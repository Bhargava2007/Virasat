import { reactive } from 'vue'
import { supabase } from '@/utils/supabase.js'

const state = reactive({
  user: null,
  profile: null,
  loading: true
})

export const useAuthStore = () => {
  const fetchProfile = async userId => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (!error && data) {
        state.profile = data
      }
    } catch (e) {
      console.error('Failed to fetch profile', e)
    }
  }

  const init = async () => {
    state.loading = true
    try {
      const {
        data: { session }
      } = await supabase.auth.getSession()
      state.user = session?.user || null
      if (state.user) {
        await fetchProfile(state.user.id)
      }
    } catch (e) {
      console.warn('Auth offline/unavailable', e)
    } finally {
      state.loading = false
    }

    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (event, session) => {
      state.user = session?.user || null
      if (state.user) {
        await fetchProfile(state.user.id)
      } else {
        state.profile = null
      }
    })
  }

  const signUp = async (email, password, displayName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName
        }
      }
    })
    if (error) throw error
    return data
  }

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw error
    return data
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return {
    state,
    init,
    signUp,
    signIn,
    signOut
  }
}
