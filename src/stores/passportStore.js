import { reactive, watch, computed } from 'vue'
import { allHeritage } from '@/data/heritage.js'
import { allCulture } from '@/data/culture.js'
import { culturalTrails } from '@/data/trails.js'
import { states } from '@/data/states.js'
import { supabase } from '@/utils/supabase.js'

const STORAGE_KEY = 'heritage_culture_passport_v1'

const isValidHeritage = id => allHeritage.some(h => h.id === id)
const isValidCulture = id => allCulture.some(c => c.id === id)
const isValidTrail = id => culturalTrails.some(t => t.slug === id)

const defaultState = {
  heritage: {},
  culture: {},
  trails: {},
  syncStatus: 'idle' // 'idle' | 'syncing' | 'error' | 'success'
}

const loadLocalState = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored)
      return { ...defaultState, heritage: {}, culture: {}, trails: {} }

    const parsed = JSON.parse(stored)
    const validState = {
      heritage: {},
      culture: {},
      trails: {},
      syncStatus: 'idle'
    }

    if (parsed.heritage) {
      for (const [id, ts] of Object.entries(parsed.heritage)) {
        if (isValidHeritage(id))
          validState.heritage[id] = typeof ts === 'number' ? ts : Date.now()
      }
    }
    if (parsed.culture) {
      for (const [id, ts] of Object.entries(parsed.culture)) {
        if (isValidCulture(id))
          validState.culture[id] = typeof ts === 'number' ? ts : Date.now()
      }
    }
    if (parsed.trails) {
      for (const [id, ts] of Object.entries(parsed.trails)) {
        if (isValidTrail(id))
          validState.trails[id] = typeof ts === 'number' ? ts : Date.now()
      }
    }
    return validState
  } catch (e) {
    console.error('Failed to parse local passport state', e)
    return { ...defaultState, heritage: {}, culture: {}, trails: {} }
  }
}

const state = reactive(loadLocalState())

// Persist local state whenever it changes (Offline fallback)
watch(
  state,
  newState => {
    try {
      const toSave = {
        heritage: newState.heritage,
        culture: newState.culture,
        trails: newState.trails
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
    } catch (e) {
      console.error('Failed to save passport state', e)
    }
  },
  { deep: true }
)

const getUserId = async () => {
  const { data } = await supabase.auth.getSession()
  return data?.session?.user?.id
}

const pushRecordToCloud = async (recordId, recordType, ts) => {
  const userId = await getUserId()
  if (!userId) return false
  try {
    const { error } = await supabase.from('exploration_events').upsert(
      {
        user_id: userId,
        record_id: recordId,
        record_type: recordType,
        explored_at: new Date(ts).toISOString()
      },
      { onConflict: 'user_id,record_type,record_id' }
    )
    return !error
  } catch {
    return false
  }
}

const removeRecordFromCloud = async (recordId, recordType) => {
  const userId = await getUserId()
  if (!userId) return false
  try {
    const { error } = await supabase
      .from('exploration_events')
      .delete()
      .eq('user_id', userId)
      .eq('record_id', recordId)
      .eq('record_type', recordType)
    return !error
  } catch {
    return false
  }
}

const syncWithCloud = async () => {
  const userId = await getUserId()
  if (!userId) {
    state.syncStatus = 'idle'
    return
  }

  state.syncStatus = 'syncing'
  try {
    // 1. Fetch cloud records
    const { data: cloudData, error } = await supabase
      .from('exploration_events')
      .select('record_id, record_type, explored_at')

    if (error) throw error

    let needsUpsert = false
    const toUpsert = []

    // 2. Merge Cloud -> Local
    if (cloudData) {
      cloudData.forEach(row => {
        const ts = new Date(row.explored_at).getTime()
        const id = row.record_id

        if (row.record_type === 'heritage' && isValidHeritage(id)) {
          if (!state.heritage[id] || state.heritage[id] > ts)
            state.heritage[id] = ts
        } else if (row.record_type === 'culture' && isValidCulture(id)) {
          if (!state.culture[id] || state.culture[id] > ts)
            state.culture[id] = ts
        } else if (row.record_type === 'trail' && isValidTrail(id)) {
          if (!state.trails[id] || state.trails[id] > ts) state.trails[id] = ts
        }
      })
    }

    // 3. Merge Local -> Cloud (Find items in local not in cloud)
    const checkLocal = (dict, type) => {
      Object.entries(dict).forEach(([id, ts]) => {
        const inCloud = cloudData?.find(
          r => r.record_type === type && r.record_id === id
        )
        if (!inCloud) {
          needsUpsert = true
          toUpsert.push({
            user_id: userId,
            record_id: id,
            record_type: type,
            explored_at: new Date(ts).toISOString()
          })
        }
      })
    }

    checkLocal(state.heritage, 'heritage')
    checkLocal(state.culture, 'culture')
    checkLocal(state.trails, 'trail')

    if (needsUpsert && toUpsert.length > 0) {
      const { error: upsertError } = await supabase
        .from('exploration_events')
        .upsert(toUpsert, { onConflict: 'user_id,record_type,record_id' })
      if (upsertError) throw upsertError
    }

    state.syncStatus = 'success'
    state.syncError = null
  } catch (e) {
    console.error('Passport Sync Failed:', e)
    state.syncStatus = 'error'
    state.syncError = e.message || e.details || JSON.stringify(e)
  }
}

// Subscribe to auth changes to trigger sync
supabase.auth.onAuthStateChange((event, session) => {
  if (session?.user) {
    syncWithCloud()
  } else {
    state.syncStatus = 'idle'
  }
})

// Progress & Badges identical to Stage 6 (using unified local state)
const stateProgress = computed(() => {
  return states.map(st => {
    const stSlug = st.slug
    const hTotal = allHeritage.filter(h => h.state === stSlug).length
    const cTotal = allCulture.filter(c => c.state === stSlug).length
    const hExplored = allHeritage.filter(
      h => h.state === stSlug && state.heritage[h.id]
    ).length
    const cExplored = allCulture.filter(
      c => c.state === stSlug && state.culture[c.id]
    ).length
    return {
      stateSlug: stSlug,
      name: st.name,
      heritageTotal: hTotal,
      cultureTotal: cTotal,
      total: hTotal + cTotal,
      heritageExplored: hExplored,
      cultureExplored: cExplored,
      totalExplored: hExplored + cExplored,
      heritagePercent: hTotal > 0 ? (hExplored / hTotal) * 100 : 0,
      culturePercent: cTotal > 0 ? (cExplored / cTotal) * 100 : 0,
      totalPercent:
        hTotal + cTotal > 0
          ? ((hExplored + cExplored) / (hTotal + cTotal)) * 100
          : 0
    }
  })
})

const earnedBadges = computed(() => {
  const badges = []
  const hCount = Object.keys(state.heritage).length
  const cCount = Object.keys(state.culture).length
  const tCount = Object.keys(state.trails).length

  if (hCount >= 1)
    badges.push({
      id: 'first-heritage',
      name: 'Heritage Seeker',
      icon: 'account_balance',
      color: '#B84B2A',
      desc: 'Explored first Heritage record'
    })
  if (cCount >= 1)
    badges.push({
      id: 'first-culture',
      name: 'Culture Explorer',
      icon: 'palette',
      color: '#4A148C',
      desc: 'Explored first Culture record'
    })
  if (tCount >= 1)
    badges.push({
      id: 'first-trail',
      name: 'Trailblazer',
      icon: 'route',
      color: '#1A237E',
      desc: 'Completed first Cultural Trail'
    })
  if (hCount >= 5)
    badges.push({
      id: 'five-heritage',
      name: 'Heritage Scholar',
      icon: 'history_edu',
      color: '#8D6E63',
      desc: 'Explored 5 Heritage records'
    })
  if (cCount >= 5)
    badges.push({
      id: 'five-culture',
      name: 'Culture Enthusiast',
      icon: 'diversity_3',
      color: '#6A1B9A',
      desc: 'Explored 5 Culture records'
    })

  const sp = stateProgress.value
  const ka = sp.find(s => s.stateSlug === 'karnataka')
  const rj = sp.find(s => s.stateSlug === 'rajasthan')
  const tn = sp.find(s => s.stateSlug === 'tamil-nadu')

  if (ka && ka.totalExplored >= 1)
    badges.push({
      id: 'ka-explorer',
      name: 'Karnataka Explorer',
      icon: 'place',
      color: '#F57C00',
      desc: 'Explored Karnataka heritage/culture'
    })
  if (rj && rj.totalExplored >= 1)
    badges.push({
      id: 'rj-explorer',
      name: 'Rajasthan Explorer',
      icon: 'place',
      color: '#D81B60',
      desc: 'Explored Rajasthan heritage/culture'
    })
  if (tn && tn.totalExplored >= 1)
    badges.push({
      id: 'tn-explorer',
      name: 'Tamil Nadu Explorer',
      icon: 'place',
      color: '#00695C',
      desc: 'Explored Tamil Nadu heritage/culture'
    })

  if (
    ka?.totalExplored >= 1 &&
    rj?.totalExplored >= 1 &&
    tn?.totalExplored >= 1
  ) {
    badges.push({
      id: 'all-states',
      name: 'Pan-India Explorer',
      icon: 'public',
      color: '#D4A843',
      desc: 'Explored records from all showcase states'
    })
  }
  return badges
})

const recentExplorations = computed(() => {
  const all = []
  Object.entries(state.heritage).forEach(([id, ts]) => {
    const record = allHeritage.find(r => r.id === id)
    if (record) all.push({ id, ts, type: 'heritage', record })
  })
  Object.entries(state.culture).forEach(([id, ts]) => {
    const record = allCulture.find(r => r.id === id)
    if (record) all.push({ id, ts, type: 'culture', record })
  })
  Object.entries(state.trails).forEach(([slug, ts]) => {
    const record = culturalTrails.find(r => r.slug === slug)
    if (record) all.push({ id: slug, ts, type: 'trail', record })
  })
  all.sort((a, b) => b.ts - a.ts)
  return all.slice(0, 10)
})

export const usePassportStore = () => {
  return {
    state,
    stateProgress,
    earnedBadges,
    recentExplorations,
    syncWithCloud,

    toggleHeritage: async id => {
      if (!isValidHeritage(id)) return
      if (state.heritage[id]) {
        delete state.heritage[id]
        removeRecordFromCloud(id, 'heritage')
      } else {
        const ts = Date.now()
        state.heritage[id] = ts
        pushRecordToCloud(id, 'heritage', ts)
      }
    },

    toggleCulture: async id => {
      if (!isValidCulture(id)) return
      if (state.culture[id]) {
        delete state.culture[id]
        removeRecordFromCloud(id, 'culture')
      } else {
        const ts = Date.now()
        state.culture[id] = ts
        pushRecordToCloud(id, 'culture', ts)
      }
    },

    toggleTrail: async slug => {
      if (!isValidTrail(slug)) return
      if (state.trails[slug]) {
        delete state.trails[slug]
        removeRecordFromCloud(slug, 'trail')
      } else {
        const ts = Date.now()
        state.trails[slug] = ts
        pushRecordToCloud(slug, 'trail', ts)
      }
    },

    hasExploredHeritage: id => !!state.heritage[id],
    hasExploredCulture: id => !!state.culture[id],
    hasCompletedTrail: slug => !!state.trails[slug],

    resetPassport: () => {
      state.heritage = {}
      state.culture = {}
      state.trails = {}
      // Cloud reset could be implemented here, but for safety in the prototype we only clear local
    }
  }
}
