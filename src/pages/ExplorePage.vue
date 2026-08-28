<template>
  <q-page class="discovery-page explore-page">
    <!-- Top-Left Curved Terracotta Organic Shape -->
    <div class="organic-terracotta-wave" aria-hidden="true">
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H200C140 0 120 40 60 40C30 40 10 20 0 0Z" fill="#B84B2A" />
      </svg>
    </div>

    <!-- Hero Section -->
    <header class="explore-hero">
      <HeroMonumentsBg />

      <!-- Top Row: Notification Bell -->
      <div class="explore-hero__top-bar">
        <div class="explore-hero__bell-btn" aria-label="Notifications">
          <q-icon name="notifications_none" size="20px" />
        </div>
      </div>

      <div class="explore-hero__content">
        <h1 class="explore-hero__title">Explore India</h1>
        <p class="explore-hero__subtitle">
          Discover India's timeless heritage and vibrant living culture.
        </p>
      </div>

      <SearchBar
        v-model="searchQuery"
        placeholder="Search heritage, culture, places..."
        class="explore-hero__search"
      />
    </header>

    <!-- Heritage & Culture Entry Cards -->
    <section class="section-spacing entry-section">
      <div class="entry-cards-grid">
        <router-link to="/heritage" class="entry-card entry-card--heritage">
          <div class="entry-card__icon-wrap">
            <q-icon name="account_balance" size="22px" />
          </div>
          <div class="entry-card__body">
            <h2 class="entry-card__title">Heritage</h2>
            <p class="entry-card__text"
              >Monuments, forts, heritage sites & more</p
            >
          </div>
          <div class="entry-card__arrow">
            <q-icon name="chevron_right" size="18px" />
          </div>
        </router-link>

        <router-link to="/culture" class="entry-card entry-card--culture">
          <div class="entry-card__icon-wrap">
            <q-icon name="self_improvement" size="22px" />
          </div>
          <div class="entry-card__body">
            <h2 class="entry-card__title">Culture</h2>
            <p class="entry-card__text">Traditions, arts, festivals & more</p>
          </div>
          <div class="entry-card__arrow">
            <q-icon name="chevron_right" size="18px" />
          </div>
        </router-link>

        <router-link
          to="/explore/map"
          class="entry-card entry-card--map full-width-card"
        >
          <div class="entry-card__icon-wrap">
            <q-icon name="map" size="22px" />
          </div>
          <div class="entry-card__body">
            <h2 class="entry-card__title">Living Heritage Map</h2>
            <p class="entry-card__text"
              >Explore India visually through an interactive map.</p
            >
          </div>
          <div class="entry-card__arrow">
            <q-icon name="chevron_right" size="18px" />
          </div>
        </router-link>
      </div>
    </section>

    <!-- Explore by Category -->
    <section class="section-spacing">
      <SectionHeader
        title="Explore by Category"
        actionLabel="View all"
        actionTo="/heritage"
      />
      <div class="category-tiles-row">
        <CategoryCard
          v-for="cat in featuredHeritageCats"
          :key="cat.id"
          :category="cat"
          :selected="false"
          @select="goToHeritageCategory"
        />
      </div>
      <div class="category-tiles-row q-mt-sm">
        <CategoryCard
          v-for="cat in featuredCultureCats"
          :key="cat.id"
          :category="cat"
          :selected="false"
          @select="goToCultureCategory"
        />
      </div>
    </section>

    <!-- Explore by State -->
    <section class="section-spacing">
      <SectionHeader title="Explore by State" actionLabel="View all" />
      <div class="chip-scroll-row">
        <StateChip
          v-for="st in stateChipsWithIcons"
          :key="st.id"
          :state="st"
          :icon="st.icon"
          :selected="selectedState === st.slug"
          activeColor="#B84B2A"
          @select="toggleState"
        />
      </div>
    </section>

    <!-- Featured Heritage -->
    <section class="section-spacing">
      <SectionHeader
        title="Featured Heritage"
        actionLabel="View all"
        actionTo="/heritage"
      />
      <div v-if="filteredHeritage.length > 0" class="featured-scroll-row">
        <FeaturedVisualCard
          v-for="item in filteredHeritage"
          :key="item.id"
          :item="item"
          type="heritage"
        />
      </div>
      <div v-else class="empty-state">
        <q-icon name="search_off" class="empty-state__icon" />
        <h3 class="empty-state__title">No heritage sites found</h3>
        <p class="empty-state__subtitle">Try adjusting your search query</p>
      </div>
    </section>

    <!-- Living Culture -->
    <section class="section-spacing">
      <SectionHeader
        title="Living Culture"
        actionLabel="View all"
        actionTo="/culture"
      />
      <div v-if="filteredCulture.length > 0" class="featured-scroll-row">
        <FeaturedVisualCard
          v-for="item in filteredCulture"
          :key="item.id"
          :item="item"
          type="culture"
        />
      </div>
      <div v-else class="empty-state">
        <q-icon name="search_off" class="empty-state__icon" />
        <h3 class="empty-state__title">No results found</h3>
        <p class="empty-state__subtitle"
          >Try adjusting your filters or search</p
        >
      </div>
    </section>

    <!-- Map FAB -->
    <q-page-sticky position="bottom-right" :offset="[20, 20]">
      <q-btn
        fab
        icon="map"
        color="primary"
        aria-label="Open Map"
        @click="router.push('/explore/map')"
        class="map-fab"
      >
        <q-tooltip>Interactive Map</q-tooltip>
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { heritageCategories } from '@/data/heritageCategories.js'
import { cultureCategories } from '@/data/cultureCategories.js'
import { states } from '@/data/states.js'
import { allHeritage } from '@/data/heritage.js'
import { allCulture } from '@/data/culture.js'

import HeroMonumentsBg from '@/components/decor/HeroMonumentsBg.vue'
import SectionHeader from '@/components/discovery/SectionHeader.vue'
import SearchBar from '@/components/discovery/SearchBar.vue'
import CategoryCard from '@/components/discovery/CategoryCard.vue'
import StateChip from '@/components/discovery/StateChip.vue'
import FeaturedVisualCard from '@/components/discovery/FeaturedVisualCard.vue'

const router = useRouter()
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedState = ref('')

const featuredHeritageCats = computed(() => heritageCategories.slice(0, 5))
const featuredCultureCats = computed(() => [
  cultureCategories[0],
  cultureCategories[1],
  cultureCategories[3],
  cultureCategories[2],
  cultureCategories[6]
])

const stateChipsWithIcons = computed(() => {
  const iconMap = {
    karnataka: 'account_balance',
    rajasthan: 'fort',
    'tamil-nadu': 'temple_hindu'
  }
  return states.map(s => ({
    ...s,
    icon: iconMap[s.slug] || 'place'
  }))
})

const goToHeritageCategory = cat => {
  router.push({ name: 'heritage', query: { category: cat.slug } })
}

const goToCultureCategory = cat => {
  router.push({ name: 'culture', query: { category: cat.slug } })
}

const toggleState = state => {
  selectedState.value = selectedState.value === state.slug ? '' : state.slug
}

const filterRecords = records => {
  return records.filter(r => {
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
    return matchesState && matchesSearch
  })
}

const filteredHeritage = computed(() => filterRecords(allHeritage))
const filteredCulture = computed(() => filterRecords(allCulture))
</script>

<style lang="scss" scoped>
.explore-page {
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

.explore-hero {
  position: relative;
  background: linear-gradient(165deg, #fff3ec 0%, #fdf8f5 100%);
  padding: 16px 20px 48px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  margin-bottom: 24px;

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
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(74, 44, 30, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid rgba(74, 44, 30, 0.08);
    color: var(--color-primary);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 10px;
      right: 10px;
      width: 6px;
      height: 6px;
      background-color: var(--color-primary);
      border-radius: 50%;
    }
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
    color: var(--color-text);
    margin: 0 0 6px 0;
    letter-spacing: -0.02em;
  }

  &__subtitle {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
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

.entry-section {
  padding-top: 20px;
}

.entry-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.entry-card {
  position: relative;
  padding: 16px;
  border-radius: 16px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 135px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &__icon-wrap {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 1.0625rem;
    font-weight: 700;
    margin: 0 0 4px 0;
  }

  &__text {
    font-family: var(--font-body);
    font-size: 0.6875rem;
    line-height: 1.3;
    margin: 0;
  }

  &__arrow {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &--heritage {
    background: #fff1ed;
    border: 1px solid rgba(184, 75, 42, 0.15);

    .entry-card__icon-wrap {
      background: #b84b2a;
      color: #ffffff;
    }

    .entry-card__title {
      color: #4a2c1e;
    }

    .entry-card__text {
      color: #7a5c4e;
    }

    .entry-card__arrow {
      color: #b84b2a;
    }
  }

  &--culture {
    background: #f3eef8;
    border: 1px solid rgba(108, 75, 160, 0.15);

    .entry-card__icon-wrap {
      background: #6c4ba0;
      color: #ffffff;
    }

    .entry-card__title {
      color: #2c3e73;
    }

    .entry-card__text {
      color: #5c5378;
    }

    .entry-card__arrow {
      color: #6c4ba0;
    }
  }

  &--map {
    background: #e1f5fe;
    border: 1px solid rgba(2, 119, 189, 0.15);

    .entry-card__icon-wrap {
      background: #0277bd;
      color: #ffffff;
    }

    .entry-card__title {
      color: #01579b;
    }

    .entry-card__text {
      color: #0277bd;
    }

    .entry-card__arrow {
      color: #0277bd;
    }
  }

  &:active {
    transform: scale(0.96);
  }
}

.full-width-card {
  grid-column: 1 / -1;
  min-height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .entry-card__icon-wrap {
    margin-bottom: 0;
    margin-right: 16px;
  }

  .entry-card__arrow {
    position: relative;
    bottom: auto;
    right: auto;
    margin-left: auto;
  }
}

.category-tiles-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 16px;
  gap: 8px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 20px;
  }
}

.featured-scroll-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 4px 16px 12px;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
