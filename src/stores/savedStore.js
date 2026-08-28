import { reactive, computed } from 'vue'
import { supabase } from '@/utils/supabase.js'
import { useAuthStore } from '@/stores/authStore.js'
import { allHeritage } from '@/data/heritage.js'
import { allCulture } from '@/data/culture.js'
import { culturalTrails } from '@/data/trails.js'

const state = reactive({
  savedItems: [], // Array of { id, record_id, record_type, saved_at }
  loading: false
})

export const useSavedStore = () => {
  const auth = useAuthStore()

  const fetchSavedItems = async () => {
    if (!auth.state.user) return
    state.loading = true
    try {
      const { data, error } = await supabase
        .from('saved_items')
        .select('*')
        .order('saved_at', { ascending: false })

      if (!error && data) {
        state.savedItems = data
      }
    } catch (e) {
      console.error('Error fetching saved items', e)
    } finally {
      state.loading = false
    }
  }

  const toggleSave = async (recordId, recordType) => {
    if (!auth.state.user) return false // Must be logged in

    const existing = state.savedItems.find(
      i => i.record_id === recordId && i.record_type === recordType
    )

    if (existing) {
      // Remove
      state.savedItems = state.savedItems.filter(i => i.id !== existing.id)
      await supabase.from('saved_items').delete().eq('id', existing.id)
    } else {
      // Add (Optimistic UI)
      const tempId = `temp-${Date.now()}`
      state.savedItems.unshift({
        id: tempId,
        user_id: auth.state.user.id,
        record_id: recordId,
        record_type: recordType,
        saved_at: new Date().toISOString()
      })

      const { data, error } = await supabase
        .from('saved_items')
        .upsert({
          user_id: auth.state.user.id,
          record_id: recordId,
          record_type: recordType
        }, { onConflict: 'user_id,record_type,record_id' })
        .select()
        .single()

      if (!error && data) {
        // Replace temp with real
        const idx = state.savedItems.findIndex(i => i.id === tempId)
        if (idx !== -1) state.savedItems[idx] = data
      } else {
        // Revert
        state.savedItems = state.savedItems.filter(i => i.id !== tempId)
      }
    }
    return true
  }

  const isSaved = recordId => {
    return state.savedItems.some(i => i.record_id === recordId)
  }

  const populatedSavedItems = computed(() => {
    return state.savedItems
      .map(item => {
        let record = null
        if (item.record_type === 'heritage')
          record = allHeritage.find(h => h.id === item.record_id)
        else if (item.record_type === 'culture')
          record = allCulture.find(c => c.id === item.record_id)
        else if (item.record_type === 'trail')
          record = culturalTrails.find(t => t.slug === item.record_id)

        return { ...item, record }
      })
      .filter(i => i.record) // Remove if record no longer exists
  })

  // Hook into auth state
  supabase.auth.onAuthStateChange((event, session) => {
    if (session?.user) {
      fetchSavedItems()
    } else {
      state.savedItems = []
    }
  })

  return {
    state,
    populatedSavedItems,
    fetchSavedItems,
    toggleSave,
    isSaved
  }
}
