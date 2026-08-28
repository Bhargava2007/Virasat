<template>
  <q-page class="discovery-page map-page">
    <!-- Header Bar -->
    <header class="map-header">
      <div class="map-header__top">
        <button
          class="back-btn"
          aria-label="Back to Explore"
          @click="handleBack"
        >
          <q-icon name="arrow_back" size="20px" />
        </button>

        <div class="map-header__title-block">
          <h1 class="map-header__title">Living Heritage Map</h1>
          <span class="map-header__counter">
            {{ filteredMappedRecords.length }} mapped pins •
            {{ unmappedCount }} regional/unmapped
          </span>
        </div>

        <!-- View Mode Toggle for Mobile -->
        <div class="view-toggle-group">
          <button
            class="view-toggle-btn"
            :class="{ 'view-toggle-btn--active': viewMode === 'map' }"
            @click="viewMode = 'map'"
          >
            <q-icon name="map" size="16px" />
            <span class="gt-xs">Map</span>
          </button>
          <button
            class="view-toggle-btn"
            :class="{ 'view-toggle-btn--active': viewMode === 'list' }"
            @click="viewMode = 'list'"
          >
            <q-icon name="list" size="16px" />
            <span class="gt-xs">List</span>
          </button>
        </div>
      </div>

      <!-- Search Bar -->
      <SearchBar
        v-model="searchQuery"
        placeholder="Search map by name, category, city..."
        class="map-header__search"
      />

      <!-- Filter Chips Row 1: Type Filter -->
      <div class="map-filters-row q-mt-sm">
        <div class="filter-chip-group">
          <button
            class="filter-type-btn"
            :class="{ 'filter-type-btn--active': selectedType === 'all' }"
            @click="selectedType = 'all'"
          >
            All Pins ({{ counts.all }})
          </button>
          <button
            class="filter-type-btn filter-type-btn--heritage"
            :class="{ 'filter-type-btn--active': selectedType === 'heritage' }"
            @click="selectedType = 'heritage'"
          >
            <q-icon name="account_balance" size="14px" class="q-mr-xs" />
            Heritage ({{ counts.heritage }})
          </button>
          <button
            class="filter-type-btn filter-type-btn--culture"
            :class="{ 'filter-type-btn--active': selectedType === 'culture' }"
            @click="selectedType = 'culture'"
          >
            <q-icon name="palette" size="14px" class="q-mr-xs" />
            Culture ({{ counts.culture }})
          </button>
        </div>
      </div>

      <!-- Filter Chips Row 2: State Filter -->
      <div class="chip-scroll-row q-mt-xs">
        <StateChip
          :state="{ id: 'all', slug: '', name: 'All States' }"
          :selected="!selectedState"
          activeColor="#4A2C1E"
          @select="() => (selectedState = '')"
        />
        <StateChip
          v-for="st in states"
          :key="st.id"
          :state="st"
          :selected="selectedState === st.slug"
          activeColor="#4A2C1E"
          @select="toggleState"
        />
      </div>
    </header>

    <!-- Search Notice for Unmapped Record Matches -->
    <div v-if="unmappedMatchNotice" class="unmapped-notice-banner">
      <q-icon name="info" size="16px" class="q-mr-xs text-amber-9" />
      <span>{{ unmappedMatchNotice }}</span>
    </div>

    <!-- MAIN CONTENT AREA -->
    <main class="map-page__content">
      <!-- MAP VIEW -->
      <div v-show="viewMode === 'map'" class="map-view-container">
        <LivingHeritageMap
          :records="filteredMappedRecords"
          :selected-state="selectedState"
          :selected-record-id="selectedRecord?.id || ''"
          @marker-click="handleMarkerClick"
        />

        <!-- Marker Bottom Sheet Popup -->
        <MarkerBottomSheet
          v-if="selectedRecord"
          :item="selectedRecord"
          @close="selectedRecord = null"
        />
      </div>

      <!-- LIST VIEW -->
      <div v-show="viewMode === 'list'" class="list-view-container">
        <div v-if="filteredMappedRecords.length > 0" class="record-list">
          <component
            :is="item.recordType === 'heritage' ? HeritageCard : CultureCard"
            v-for="item in filteredMappedRecords"
            :key="item.id"
            :item="item"
          />
        </div>
        <div v-else class="empty-state">
          <q-icon name="map" class="empty-state__icon" />
          <h3 class="empty-state__title">No mapped pins found</h3>
          <p class="empty-state__subtitle"
            >Try adjusting your filters or search query</p
          >
        </div>
      </div>
    </main>

    <!-- UNMAPPED / REGIONAL RECORDS SECTION -->
    <section class="unmapped-section">
      <div class="unmapped-header" @click="showUnmapped = !showUnmapped">
        <div class="unmapped-header__info">
          <q-icon name="travel_explore" size="20px" class="text-terracotta" />
          <div>
            <h3 class="unmapped-header__title">
              Regional & Statewide Traditions
              <span class="unmapped-count-badge">{{
                filteredUnmappedRecords.length
              }}</span>
            </h3>
            <p class="unmapped-header__sub">
              Cultural traditions & sites without single-point coordinates
            </p>
          </div>
        </div>
        <q-icon
          :name="showUnmapped ? 'expand_less' : 'expand_more'"
          size="24px"
        />
      </div>

      <div v-if="showUnmapped" class="unmapped-body q-mt-sm">
        <div v-if="filteredUnmappedRecords.length > 0" class="unmapped-grid">
          <div
            v-for="uItem in filteredUnmappedRecords"
            :key="uItem.id"
            class="unmapped-card"
            @click="navigateToDetail(uItem)"
          >
            <div class="unmapped-card__top">
              <span
                class="unmapped-badge"
                :class="`unmapped-badge--${uItem.unmappedType}`"
              >
                <q-icon
                  :name="
                    uItem.unmappedType === 'statewide'
                      ? 'public'
                      : uItem.unmappedType === 'regional'
                        ? 'map'
                        : 'location_off'
                  "
                  size="11px"
                  class="q-mr-xs"
                />
                {{ uItem.unmappedBadgeLabel }}
              </span>
              <span class="unmapped-card__state">{{ uItem.stateName }}</span>
            </div>

            <h4 class="unmapped-card__title">{{ uItem.name }}</h4>
            <p class="unmapped-card__desc">{{ uItem.shortDescription }}</p>

            <div class="unmapped-card__footer">
              <span class="unmapped-card__btn">
                Explore
                {{ uItem.recordType === 'heritage' ? 'Heritage' : 'Culture' }}
                <q-icon name="arrow_forward" size="12px" class="q-ml-xs" />
              </span>
            </div>
          </div>
        </div>
        <div v-else class="empty-state text-center q-pa-md">
          <span class="text-caption text-grey-7"
            >No unmapped records match current filters</span
          >
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { states } from '@/data/states.js'
import { getAllMappedRecords, getUnmappedRecords } from '@/data/geo/index.js'

import SearchBar from '@/components/discovery/SearchBar.vue'
import StateChip from '@/components/discovery/StateChip.vue'
import LivingHeritageMap from '@/components/map/LivingHeritageMap.vue'
import MarkerBottomSheet from '@/components/map/MarkerBottomSheet.vue'
import HeritageCard from '@/components/discovery/HeritageCard.vue'
import CultureCard from '@/components/discovery/CultureCard.vue'

const router = useRouter()

const viewMode = ref('map') // 'map' | 'list'
const selectedType = ref('all') // 'all' | 'heritage' | 'culture'
const selectedState = ref('')
const searchQuery = ref('')
const selectedRecord = ref(null)
const showUnmapped = ref(false)

const allMapped = getAllMappedRecords()
const allUnmapped = getUnmappedRecords()

const counts = computed(() => {
  return {
    all: allMapped.length,
    heritage: allMapped.filter(m => m.recordType === 'heritage').length,
    culture: allMapped.filter(m => m.recordType === 'culture').length
  }
})

const unmappedCount = computed(() => allUnmapped.length)

const handleBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/explore')
  }
}

const toggleState = state => {
  selectedState.value = selectedState.value === state.slug ? '' : state.slug
}

const handleMarkerClick = record => {
  selectedRecord.value = record
}

const navigateToDetail = record => {
  if (record?.slug) {
    router.push(`/${record.recordType}/${record.slug}`)
  }
}

// Filtered Mapped Pins
const filteredMappedRecords = computed(() => {
  return allMapped.filter(r => {
    let matchesType = true
    if (selectedType.value !== 'all') {
      matchesType = r.recordType === selectedType.value
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
        (r.locationLabel && r.locationLabel.toLowerCase().includes(q)) ||
        (r.shortDescription && r.shortDescription.toLowerCase().includes(q))
    }
    return matchesType && matchesState && matchesSearch
  })
})

// Unmapped Records Filter
const filteredUnmappedRecords = computed(() => {
  return allUnmapped.filter(r => {
    let matchesType = true
    if (selectedType.value !== 'all') {
      matchesType = r.recordType === selectedType.value
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
        (r.shortDescription && r.shortDescription.toLowerCase().includes(q))
    }
    return matchesType && matchesState && matchesSearch
  })
})

// Search Notice for Unmapped Record Matches
const unmappedMatchNotice = computed(() => {
  if (!searchQuery.value.trim()) return ''
  const q = searchQuery.value.toLowerCase().trim()
  const match = allUnmapped.find(
    u => u.name && u.name.toLowerCase().includes(q)
  )
  if (match && filteredMappedRecords.value.length === 0) {
    return `Verified record found ("${match.name}"), but precise map location is not available yet.`
  }
  return ''
})
</script>

<style scoped lang="scss">
.map-page {
  background-color: var(--color-surface);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
}

.map-header {
  background: #ffffff;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(74, 44, 30, 0.08);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 10;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
  }

  &__title-block {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0;
    line-height: 1.2;
  }

  &__counter {
    font-family: var(--font-body);
    font-size: 0.6875rem;
    color: var(--color-text-secondary);
    font-weight: 600;
  }
}

.back-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fdf8f5;
  border: 1px solid rgba(74, 44, 30, 0.12);
  color: #4a2c1e;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;

  &:active {
    transform: scale(0.94);
  }
}

.view-toggle-group {
  display: flex;
  background: #fdf8f5;
  border: 1px solid rgba(74, 44, 30, 0.1);
  border-radius: 10px;
  padding: 2px;
  gap: 2px;
}

.view-toggle-btn {
  border: none;
  background: transparent;
  padding: 6px 10px;
  border-radius: 8px;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &--active {
    background: #ffffff;
    color: #b84b2a;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
}

.filter-chip-group {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.filter-type-btn {
  border: 1px solid rgba(74, 44, 30, 0.12);
  background: #ffffff;
  color: #6e5d54;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  &--active {
    background: #4a2c1e;
    color: #ffffff;
    border-color: #4a2c1e;
  }

  &--heritage.filter-type-btn--active {
    background: #b84b2a;
    border-color: #b84b2a;
  }

  &--culture.filter-type-btn--active {
    background: #6c4ba0;
    border-color: #6c4ba0;
  }
}

.unmapped-notice-banner {
  background: #fff8e1;
  border-bottom: 1px solid #ffe082;
  padding: 8px 16px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  color: #856404;
  display: flex;
  align-items: center;
}

/* CONTENT CONTAINER */
.map-page__content {
  flex: 1;
  position: relative;
  min-height: 420px;
  display: flex;
  flex-direction: column;
}

.map-view-container {
  width: 100%;
  height: 520px;
  position: relative;

  @media (max-width: 600px) {
    height: 440px;
  }
}

.list-view-container {
  padding: 16px;

  .record-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}

/* UNMAPPED SECTION */
.unmapped-section {
  background: #ffffff;
  margin: 16px 16px 0;
  border-radius: 16px;
  border: 1px solid rgba(74, 44, 30, 0.08);
  box-shadow: 0 4px 16px rgba(74, 44, 30, 0.04);
  padding: 14px;
}

.unmapped-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &__info {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__sub {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: var(--color-text-secondary);
    margin: 2px 0 0;
  }
}

.unmapped-count-badge {
  background: #fff3ec;
  color: #b84b2a;
  font-size: 0.6875rem;
  padding: 1px 6px;
  border-radius: 10px;
  border: 1px solid rgba(184, 75, 42, 0.2);
}

.unmapped-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 12px;
  padding-top: 8px;
}

.unmapped-card {
  background: #fdf8f5;
  border: 1px solid rgba(74, 44, 30, 0.08);
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 44, 30, 0.08);
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  &__state {
    font-family: var(--font-body);
    font-size: 0.6875rem;
    font-weight: 600;
    color: #7a685d;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 4px 0;
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: #6e5d54;
    line-height: 1.35;
    margin: 0 0 8px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }

  &__btn {
    font-family: var(--font-heading);
    font-size: 0.6875rem;
    font-weight: 700;
    color: #b84b2a;
    display: flex;
    align-items: center;
  }
}

.unmapped-badge {
  font-family: var(--font-heading);
  font-size: 0.625rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;

  &--statewide {
    background: #e8f5e9;
    color: #2e7d32;
    border: 1px solid rgba(46, 125, 50, 0.2);
  }

  &--regional {
    background: #e1f5fe;
    color: #0288d1;
    border: 1px solid rgba(2, 136, 209, 0.2);
  }

  &--unverified {
    background: #fff3e0;
    color: #ef6c00;
    border: 1px solid rgba(239, 108, 0, 0.2);
  }
}
</style>
