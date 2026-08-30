<template>
  <div class="home-hero">
    <!-- Background Image -->
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    
    <div class="hero-content">
      <transition name="fade" mode="out-in">
        <h1 
          class="hero-logo-text" 
          :key="currentLanguageIndex"
          :style="{ fontFamily: currentFont }"
        >
          {{ currentText }}
        </h1>
      </transition>
      
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
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import SearchBar from '@/components/discovery/SearchBar.vue'

const router = useRouter()
const searchQuery = ref('')

// Multilingual Logo setup
const logoVariations = [
  { text: 'Virasat', font: "'Cinzel', serif" },
  { text: 'विरासत', font: "'Noto Serif Devanagari', serif" },
  { text: 'বিরাসত', font: "'Noto Serif Bengali', serif" },
  { text: 'விராஸத்', font: "'Noto Serif Tamil', serif" }
]

const currentLanguageIndex = ref(0)
let logoInterval = null

const currentText = computed(() => logoVariations[currentLanguageIndex.value].text)
const currentFont = computed(() => logoVariations[currentLanguageIndex.value].font)

onMounted(() => {
  logoInterval = setInterval(() => {
    currentLanguageIndex.value = (currentLanguageIndex.value + 1) % logoVariations.length
  }, 2500) // Change language every 2.5 seconds
})

onUnmounted(() => {
  if (logoInterval) clearInterval(logoInterval)
})

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
  position: relative;
  width: 100%;
  min-height: 80vh; /* Make it almost full screen */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 48px 20px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop'); /* Taj Mahal placeholder */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  /* Dark overall overlay with a vignette effect */
  background: 
    radial-gradient(circle at center, rgba(26, 26, 46, 0.45) 0%, rgba(26, 26, 46, 0.75) 100%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(26, 26, 46, 0.3) 60%, var(--color-surface) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 800px;
}

.hero-logo-text {
  color: #fff;
  font-size: 5rem; /* Large logo size */
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 4px 12px rgba(0,0,0,0.5);
  letter-spacing: 2px;
}

@media (max-width: 768px) {
  .hero-logo-text {
    font-size: 3.5rem;
  }
}

.hero-tagline {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  margin: 16px 0 0;
  letter-spacing: 1px;
}

.accent-line {
  width: 60px;
  height: 4px;
  background: #d4a843;
  border-radius: 2px;
  margin: 24px auto;
}

.hero-search-wrapper {
  margin-top: 32px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  border-radius: 8px; 
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
