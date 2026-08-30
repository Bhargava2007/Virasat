<template>
  <div class="home-hero">
    <div class="hero-scene-container" v-if="enableThreeD">
      <ThreeScene
        :geometry="{ type: 'torus', scale: 1.5 }"
        :colors="threeColors"
        :enableHover="true"
        :showFallback="true"
        @loaded="onSceneLoaded"
        @hover="onSceneHover"
      />
    </div>

    <div class="hero-content">
      <div class="hero-text-wrapper">
        <h1 class="hero-title">Heritage & Culture</h1>
        <p class="hero-tagline"
          >Explore India's Living Heritage & Timeless Traditions</p
        >
        <div class="accent-line"></div>
      </div>

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
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import SearchBar from '@/components/discovery/SearchBar.vue'
import ThreeScene from '@/components/three/ThreeScene.vue'
import gsap from 'gsap'

const router = useRouter()
const searchQuery = ref('')
const sceneLoaded = ref(false)
const isHovering = ref(false)

const enableThreeD = computed(() => {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return !!gl
  } catch (e) {
    return false
  }
})

const threeColors = {
  primary: 0xc4632a,
  secondary: 0x2d3a7c,
  accent: 0xd4a843,
  glow: 0xffffff
}

const handleSearch = () => {
  const query = searchQuery.value.trim()
  if (query) {
    router.push({
      path: '/explore',
      query: { search: query }
    })
  }
}

const onSceneLoaded = () => {
  sceneLoaded.value = true
  animateEntrance()
}

const onSceneHover = hovering => {
  isHovering.value = hovering
}

const animateEntrance = () => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches
  if (prefersReducedMotion) return

  gsap.fromTo(
    '.hero-text-wrapper',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  )

  gsap.fromTo(
    '.hero-search-wrapper',
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
  )
}

onMounted(() => {
  if (!enableThreeD.value) {
    animateEntrance()
  }
})
</script>

<style scoped>
.home-hero {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.hero-scene-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 320px;
  z-index: 0;
  background: transparent;
}

.hero-content {
  position: relative;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(246, 245, 242, 0.96) 0%,
    rgba(246, 245, 242, 0.96) 100%
  );
  padding: var(--space-4) var(--space-2) var(--space-3);
  text-align: center;
}

.hero-text-wrapper {
  opacity: 0;
}

.hero-title {
  color: var(--color-base-900);
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: clamp(1.5rem, 5vw, 2.25rem);
  font-weight: 700;
  margin: 0 0 8px;
  letter-spacing: -0.5px;
}

.hero-tagline {
  color: var(--color-text-secondary);
  font-size: clamp(0.875rem, 2vw, 1.0625rem);
  font-family: var(--font-body), 'Inter', sans-serif;
  margin: 0;
  line-height: 1.5;
}

.accent-line {
  width: 40px;
  height: 3px;
  background: var(--color-accent);
  border-radius: 2px;
  margin: 16px auto;
  box-shadow: 0 0 10px rgba(191, 160, 99, 0.18);
}

.hero-search-wrapper {
  margin-top: var(--space-3);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
}

@media (max-width: 640px) {
  .hero-scene-container {
    height: 240px;
  }

  .hero-content {
    padding: 40px 16px 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-text-wrapper,
  .hero-search-wrapper {
    opacity: 1 !important;
  }
}
</style>
