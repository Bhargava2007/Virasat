<template>
  <q-page class="discovery-page trails-page">
    <!-- Top-Left Organic Wave -->
    <div class="organic-terracotta-wave" aria-hidden="true">
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H200C140 0 120 40 60 40C30 40 10 20 0 0Z" fill="#B84B2A" />
      </svg>
    </div>

    <!-- Hero Section -->
    <header class="trails-hero">
      <div class="trails-hero__bg" aria-hidden="true">
        <!-- We can reuse HeroCultureDancer or HeroMonumentsBg or just a gradient -->
        <div class="trails-hero__gradient"></div>
      </div>

      <div class="trails-hero__top-bar">
        <div class="trails-hero__bell-btn" aria-label="Notifications">
          <q-icon name="notifications_none" size="20px" />
        </div>
      </div>

      <div class="trails-hero__content">
        <h1 class="trails-hero__title">Cultural Trails</h1>
        <p class="trails-hero__subtitle">
          Curated journeys connecting India's heritage sites with its vibrant
          living culture.
        </p>
      </div>

      <SearchBar
        v-model="searchQuery"
        placeholder="Search trails..."
        class="trails-hero__search"
      />
    </header>

    <!-- Filters -->
    <section class="section-spacing trails-filters">
      <div class="chip-scroll-row">
        <q-chip
          clickable
          :selected="selectedState === ''"
          @click="selectedState = ''"
          color="primary"
          :outline="selectedState !== ''"
          text-color="white"
        >
          All Regions
        </q-chip>
        <StateChip
          v-for="st in stateChips"
          :key="st.slug"
          :state="st"
          :selected="selectedState === st.slug"
          activeColor="#B84B2A"
          @select="toggleState"
        />
      </div>
    </section>

    <!-- Trails List -->
    <section class="section-spacing trails-list">
      <div v-if="filteredTrails.length > 0" class="trails-grid">
        <router-link
          v-for="trail in filteredTrails"
          :key="trail.id"
          :to="'/trails/' + trail.slug"
          class="trail-card"
        >
          <div class="trail-card__image-wrapper">
            <img
              v-if="getTrailCoverImage(trail)"
              :src="getTrailCoverImage(trail)"
              alt=""
              class="trail-card__image"
            />
            <CategoryFallbackArt
              v-else
              categorySlug="historic-places"
              recordType="heritage"
            />
            <div class="trail-card__badge">
              <q-icon name="route" size="14px" class="q-mr-xs" />
              {{ trail.stops.length }} Stops
            </div>
          </div>
          <div class="trail-card__content">
            <div class="trail-card__meta">
              <span class="trail-card__state">{{
                getStateName(trail.state)
              }}</span>
              <span class="trail-card__dot">•</span>
              <span class="trail-card__theme">{{ trail.theme }}</span>
            </div>
            <h3 class="trail-card__title">{{ trail.title }}</h3>
            <p class="trail-card__desc">{{ trail.shortDescription }}</p>
            <div class="trail-card__action">
              <span>Explore Trail</span>
              <q-icon name="arrow_forward" size="16px" />
            </div>
          </div>
        </router-link>
      </div>
      <div v-else class="empty-state">
        <q-icon name="route" class="empty-state__icon" />
        <h3 class="empty-state__title">No trails found</h3>
        <p class="empty-state__subtitle">Try adjusting your filters</p>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { culturalTrails } from '@/data/trails.js'
import { states } from '@/data/states.js'
import { allHeritage } from '@/data/heritage.js'
import { allCulture } from '@/data/culture.js'
import { getRecordImage } from '@/utils/mediaHelper.js'
import SearchBar from '@/components/discovery/SearchBar.vue'
import StateChip from '@/components/discovery/StateChip.vue'
import CategoryFallbackArt from '@/components/common/CategoryFallbackArt.vue'

const searchQuery = ref('')
const selectedState = ref('')

const stateChips = computed(() => {
  return states.map(s => ({
    ...s,
    icon: 'place'
  }))
})

const getStateName = slug => {
  const state = states.find(s => s.slug === slug)
  return state ? state.name : slug
}

const toggleState = state => {
  selectedState.value = selectedState.value === state.slug ? '' : state.slug
}

const filteredTrails = computed(() => {
  return culturalTrails.filter(t => {
    let matchesState = true
    if (selectedState.value) {
      matchesState = t.state === selectedState.value
    }
    let matchesSearch = true
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim()
      matchesSearch =
        t.title.toLowerCase().includes(q) ||
        t.shortDescription.toLowerCase().includes(q) ||
        t.theme.toLowerCase().includes(q)
    }
    return matchesState && matchesSearch
  })
})

const getTrailCoverImage = trail => {
  if (
    trail.coverImage &&
    trail.coverImage !== 'heritage_hero_art_1787729701525.png'
  ) {
    return trail.coverImage.startsWith('/')
      ? trail.coverImage
      : '/images/' + trail.coverImage
  }

  if (trail.stops && trail.stops.length > 0) {
    for (const stopId of trail.stops) {
      let record = allHeritage.find(h => h.id === stopId)
      if (!record) record = allCulture.find(c => c.id === stopId)

      const img = getRecordImage(record)
      if (img) return img
    }
  }
  return null
}
</script>

<style lang="scss" scoped>
.trails-page {
  background-color: var(--color-surface);
  position: relative;
}

.organic-terracotta-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 45px;
  z-index: 10;
  pointer-events: none;
}

.trails-hero {
  position: relative;
  background: linear-gradient(165deg, #1e2c4a 0%, #3a4a73 100%);
  padding: 16px 20px 48px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  margin-bottom: 24px;
  color: #ffffff;

  &__bg {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    opacity: 0.4;
    background-image: url('/images/amber-fort.png');
    background-size: cover;
    background-position: center right;
    mix-blend-mode: luminosity;
  }

  &__gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(30, 44, 74, 1) 0%,
      rgba(30, 44, 74, 0.4) 100%
    );
  }

  &__top-bar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;
    position: relative;
    z-index: 12;
  }

  &__bell-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    position: relative;
  }

  &__content {
    max-width: 270px;
    position: relative;
    z-index: 2;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 2.125rem;
    font-weight: 700;
    margin: 0 0 6px 0;
    letter-spacing: -0.02em;
  }

  &__subtitle {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    line-height: 1.45;
    margin: 0;
    opacity: 0.9;
  }

  &__search {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: -24px;
    z-index: 10;
  }
}

.trails-filters {
  padding-top: 20px;
}

.trails-list {
  padding-bottom: 40px;
}

.trails-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.trail-card {
  background: var(--color-surface-card);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  text-decoration: none;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:active {
    transform: scale(0.98);
  }

  &__image-wrapper {
    position: relative;
    height: 160px;
    width: 100%;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__badge {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    color: white;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  &__content {
    padding: 16px;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 6px;
  }

  &__desc {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    line-height: 1.4;
    margin: 0 0 16px;
  }

  &__action {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--color-secondary);
    font-weight: 600;
    font-size: 0.875rem;
  }
}
</style>
