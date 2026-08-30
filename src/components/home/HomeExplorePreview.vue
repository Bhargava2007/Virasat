<template>
  <div class="explore-preview-wrapper">
    <div class="header-row">
      <h2 class="section-title">Explore/Experience sites and culture near you</h2>
      <router-link to="/explore/map" class="full-map-link">
        Full Screen Map & Filters
        <q-icon name="arrow_forward" size="14px" class="q-ml-xs" />
      </router-link>
    </div>

    <div class="map-card-wrapper">
      <LivingHeritageMap
        :records="records"
        :selected-record-id="selectedRecord?.id || ''"
        @marker-click="handleMarkerClick"
      />

      <MarkerBottomSheet
        v-if="selectedRecord"
        :item="selectedRecord"
        @close="selectedRecord = null"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAllMappedRecords } from '@/data/geo/index.js'
import LivingHeritageMap from '@/components/map/LivingHeritageMap.vue'
import MarkerBottomSheet from '@/components/map/MarkerBottomSheet.vue'

const records = getAllMappedRecords()
const selectedRecord = ref(null)

const handleMarkerClick = record => {
  selectedRecord.value = record
}
</script>

<style scoped lang="scss">
.explore-preview-wrapper {
  padding: 24px 16px;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.section-title {
  font-family: 'Cinzel', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.full-map-link {
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 0.8125rem;
  font-weight: 700;
  color: #b84b2a;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
}

.map-card-wrapper {
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: var(--radius-lg, 20px);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(74, 44, 30, 0.1);
  background: #eef0f2;
}
</style>
