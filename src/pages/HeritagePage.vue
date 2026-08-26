<template>
  <q-page class="discovery-page heritage-page">
    <!-- Hero Header -->
    <header class="heritage-hero">
      <HeroHeritageArch />

      <!-- Top Row with Back Button -->
      <div class="heritage-hero__top-bar">
        <button class="back-btn" aria-label="Go back" @click="handleBack">
          <q-icon name="arrow_back" size="20px" />
        </button>
      </div>

      <div class="heritage-hero__content">
        <h1 class="heritage-hero__title">Heritage</h1>
        <p class="heritage-hero__subtitle">
          Explore India's timeless heritage and historic places.
        </p>
      </div>

      <SearchBar
        v-model="searchQuery"
        placeholder="Search heritage sites..."
        class="heritage-hero__search"
      />
    </header>

    <!-- Categories -->
    <section class="section-spacing">
      <SectionHeader title="Categories" actionLabel="View all" />
      <div class="category-scroll-row">
        <CategoryCard
          v-for="cat in heritageCategories"
          :key="cat.id"
          :category="cat"
          :selected="selectedCategory === cat.slug"
          @select="toggleCategory"
        />
      </div>
    </section>

    <!-- State Filter -->
    <section class="section-spacing state-section">
      <SectionHeader title="Filter by State" />
      <div class="chip-scroll-row">
        <StateChip
          :state="{ id: 'all', slug: '', name: 'All States' }"
          :selected="!selectedState"
          activeColor="#4A2C1E"
          @select="() => (selectedState = '')"
        />
        <StateChip
          v-for="state in states"
          :key="state.id"
          :state="state"
          :selected="selectedState === state.slug"
          activeColor="#4A2C1E"
          @select="toggleState"
        />
      </div>
    </section>

    <!-- Counter & Results -->
    <section class="section-spacing results-section">
      <div class="counter-heading">
        <span class="counter-heading__text">{{ filteredRecords.length }} sites found</span>
      </div>

      <div v-if="filteredRecords.length > 0" class="record-list">
        <HeritageCard
          v-for="item in filteredRecords"
          :key="item.id"
          :item="item"
        />
      </div>
      <div v-else class="empty-state">
        <q-icon name="search_off" class="empty-state__icon" />
        <h3 class="empty-state__title">No heritage sites found</h3>
        <p class="empty-state__subtitle">Try adjusting your filters or search</p>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { heritageCategories } from '@/data/heritageCategories.js'
import { states } from '@/data/states.js'
import { allHeritage } from '@/data/heritage.js'

import HeroHeritageArch from '@/components/decor/HeroHeritageArch.vue'
import SectionHeader from '@/components/discovery/SectionHeader.vue'
import SearchBar from '@/components/discovery/SearchBar.vue'
import CategoryCard from '@/components/discovery/CategoryCard.vue'
import StateChip from '@/components/discovery/StateChip.vue'
import HeritageCard from '@/components/discovery/HeritageCard.vue'

const route = useRoute()
const router = useRouter()

const searchQuery = ref('')
const selectedCategory = ref(route.query.category || '')
const selectedState = ref(route.query.state || '')

const handleBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/explore')
  }
}

const toggleCategory = cat => {
  selectedCategory.value = selectedCategory.value === cat.slug ? '' : cat.slug
}

const toggleState = state => {
  selectedState.value = selectedState.value === state.slug ? '' : state.slug
}

const filteredRecords = computed(() => {
  return allHeritage.filter(r => {
    let matchesCategory = true
    if (selectedCategory.value) {
      matchesCategory = r.category === selectedCategory.value
    }
    let matchesState = true
    if (selectedState.value) {
      matchesState = r.state === selectedState.value
    }
    let matchesSearch = true
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim()
      matchesSearch =
        (r.name && r.name.toLowerCase().includes(q)) ||
        (r.category && r.category.toLowerCase().includes(q)) ||
        (r.state && r.state.toLowerCase().includes(q)) ||
        (r.shortDescription && r.shortDescription.toLowerCase().includes(q))
    }
    return matchesCategory && matchesState && matchesSearch
  })
})
</script>

<style scoped lang="scss">
.heritage-page {
  background-color: var(--color-surface);
}

.heritage-hero {
  position: relative;
  background: linear-gradient(165deg, #4a2c1e 0%, #7a331c 40%, #b84b2a 100%);
  padding: 16px 20px 48px;
  color: #ffffff;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  margin-bottom: 24px;

  &__top-bar {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    position: relative;
    z-index: 2;
  }

  &__content {
    max-width: 280px;
    position: relative;
    z-index: 2;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 2.125rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 6px 0;
    letter-spacing: -0.02em;
  }

  &__subtitle {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.45;
    margin: 0;
  }

  &__search {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: -24px;
    z-index: 10;
  }
}

.back-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;

  &:active {
    transform: scale(0.94);
    background: rgba(255, 255, 255, 0.3);
  }
}

.state-section {
  padding-top: 0;
}

.results-section {
  padding-top: 0;
}

.counter-heading {
  margin-bottom: 12px;
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

.record-list {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 16px;
  }
}
</style>
