<template>
  <div class="home-hero">
    <h1 class="hero-title">Heritage & Culture</h1>
    <p class="hero-tagline">Explore India's Heritage & Living Culture</p>
    <div class="accent-line"></div>
    
    <div class="hero-search-wrapper">
      <SearchBar
        v-model="searchQuery"
        placeholder="Search monuments, festivals, arts..."
        dark
        actionIcon="arrow"
        @submit="handleSearch"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SearchBar from '@/components/discovery/SearchBar.vue'

const router = useRouter()
const searchQuery = ref('')

const handleSearch = () => {
  const query = searchQuery.value.trim()
  if (query) {
    router.push({
      path: '/explore',
      query: { search: query }
    })
  }
}
</script>

<style scoped>
.home-hero {
  width: 100%;
  background: linear-gradient(160deg, #1a1a2e 0%, #2d3a7c 40%, #c4632a 100%);
  padding: 48px 20px 32px;
  text-align: center;
}

.hero-title {
  color: white;
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
}

.hero-tagline {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9375rem;
  font-family: var(--font-body), 'Inter', sans-serif;
  margin: 8px 0 0;
}

.accent-line {
  width: 40px;
  height: 3px;
  background: #d4a843;
  border-radius: 2px;
  margin: 16px auto;
}

.hero-search-wrapper {
  margin-top: 24px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
