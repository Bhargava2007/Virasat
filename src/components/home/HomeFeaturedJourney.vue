<template>
  <div class="featured-journey-wrapper" v-if="featuredTrail">
    <h2 class="section-title">Featured Journey</h2>
    <div class="featured-card" @click="goToTrail">
      <q-img
        :src="`/images/${featuredTrail.coverImage}`"
        class="featured-bg"
        fetchpriority="high"
        fit="cover"
      />
      <div class="featured-overlay"></div>
      <div class="featured-content">
        <div class="featured-title">{{ featuredTrail.title }}</div>
        <div class="featured-subtitle"
          >{{ featuredTrail.stops.length }} Locations &mdash; {{ featuredTrail.curationBasis }}</div
        >
        <div class="accent-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { culturalTrails } from '@/data/trails.js'

const router = useRouter()
// Use the 4th trail (or any specific one) as the featured journey
const featuredTrail = computed(() => culturalTrails.length > 3 ? culturalTrails[3] : culturalTrails[0])

const goToTrail = () => {
  if (featuredTrail.value) {
    router.push(`/trails/${featuredTrail.value.slug}`)
  }
}
</script>

<style scoped>
.featured-journey-wrapper {
  padding: 24px 16px;
}

.section-title {
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text, #1a1a2e);
  margin: 0 0 16px 0;
}

.featured-card {
  width: 100%;
  min-height: 180px;
  border-radius: var(--radius-lg, 20px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  background-size: cover;
  background-position: center;
  transition: transform 0.2s ease;
}

.featured-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.featured-card:hover {
  transform: translateY(-2px);
}

.featured-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 70%, transparent 100%);
  pointer-events: none;
}

.featured-content {
  position: relative;
  z-index: 1;
}

.featured-title {
  color: white;
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
}

.featured-subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.8125rem;
  margin-top: 6px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.accent-line {
  width: 32px;
  height: 3px;
  background: #d4a843;
  margin-top: 12px;
  border-radius: 2px;
}
</style>
