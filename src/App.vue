<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()
const route = useRoute()
const auth = useAuthStore()

onMounted(() => {
  auth.init()

  // Handle Supabase OAuth / Email confirmation callback
  if (window.location.hash.includes('access_token=')) {
    // We landed on a callback URL
    // Let Supabase process the hash to establish the session,
    // then clean the URL and redirect to profile
    setTimeout(() => {
      // Clear the hash from the URL to hide the token securely
      window.history.replaceState(null, '', window.location.pathname)
      // Redirect cleanly to profile page
      router.replace('/profile')
    }, 500) // Small delay to let Supabase.js parse the hash first
  }
})
</script>
