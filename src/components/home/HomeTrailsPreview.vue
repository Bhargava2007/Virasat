<template>
  <div class="trails-preview-wrapper">
    <div class="section-header">
      <h2 class="section-title">Cultural Trails</h2>
      <router-link to="/trails" class="view-all-link"
        >View All &rarr;</router-link
      >
    </div>
    <div class="trails-scroll-row">
      <div
        v-for="trail in featuredTrails"
        :key="trail.id"
        class="trail-card"
        @click="goToTrail(trail.slug)"
      >
        <q-img
          :src="`/images/${trail.coverImage}`"
          class="trail-bg"
          loading="lazy"
          fetchpriority="low"
        />
        <div class="trail-overlay"></div>
        <div class="trail-content">
          <div class="trail-title">{{ trail.title }}</div>
          <div class="trail-subtitle"
            >{{ trail.stops.length }} Locations &bull;
            {{ trail.orderType.replace('-', ' ') }}</div
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { culturalTrails } from '@/data/trails.js'

const router = useRouter()
const featuredTrails = computed(() => culturalTrails.slice(0, 3))

const goToTrail = slug => {
  router.push(`/trails/${slug}`)
}
</script>

<style scoped>
.trails-preview-wrapper {
  padding: 24px 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-title {
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text, #1a1a2e);
  margin: 0;
}

.view-all-link {
  font-size: 0.875rem;
  color: var(--color-primary, #c4632a);
  text-decoration: none;
  font-weight: 500;
}

.trails-scroll-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-bottom: 8px; /* For shadow */
}

.trails-scroll-row::-webkit-scrollbar {
  display: none;
}

.trail-card {
  position: relative;
  width: 240px;
  flex-shrink: 0;
  height: 150px;
  border-radius: var(--radius-md, 12px);
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  transition: transform 0.2s ease;
}

.trail-card:hover {
  transform: translateY(-2px);
}

.trail-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.trail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.1) 60%,
    transparent 100%
  );
}

.trail-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
}

.trail-title {
  color: white;
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 4px;
}

.trail-subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.75rem;
  text-transform: capitalize;
}
</style>
