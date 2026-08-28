<template>
  <q-page v-if="trail" class="detail-page trail-detail">
    <!-- Back Button -->
    <q-btn
      flat
      round
      icon="arrow_back"
      class="back-btn"
      color="white"
      @click="$router.back()"
      aria-label="Go back"
    />

    <!-- Hero Section -->
    <header class="detail-hero">
      <img
        v-if="getTrailCoverImage(trail)"
        :src="getTrailCoverImage(trail)"
        :alt="trail.title"
        class="detail-hero__img"
      />
      <div v-else class="detail-hero__fallback">
        <CategoryFallbackArt
          categorySlug="historic-places"
          recordType="heritage"
        />
      </div>
      <div class="detail-hero__gradient"></div>

      <div class="detail-hero__content">
        <div class="detail-hero__meta">
          <q-chip color="primary" text-color="white" size="sm" class="q-mr-sm">
            {{ getStateName(trail.state) }}
          </q-chip>
          <q-chip color="secondary" text-color="white" size="sm">
            {{ trail.theme }}
          </q-chip>
        </div>
        <h1 class="detail-hero__title">{{ trail.title }}</h1>
        <p class="detail-hero__subtitle"
          >{{ trail.stops.length }} Stops •
          {{
            trail.orderType === 'curated-thematic'
              ? 'Thematic Journey'
              : 'Journey'
          }}</p
        >
      </div>
    </header>

    <!-- Overview -->
    <section class="section-spacing trail-overview">
      <!-- PASSPORT & SAVE ACTIONS -->
      <div class="passport-action-bar q-mb-lg row no-wrap q-gutter-x-sm">
        <q-btn
          :outline="!isCompleted"
          :unelevated="isCompleted"
          :color="isCompleted ? 'positive' : 'primary'"
          :icon="isCompleted ? 'check_circle' : 'route'"
          :label="isCompleted ? 'Completed ✓' : 'Mark Trail Complete'"
          class="col rounded-btn text-weight-bold"
          style="border-radius: 12px; padding: 10px"
          @click="toggleComplete"
        />
        <q-btn
          outline
          :color="isSaved ? 'secondary' : 'grey-7'"
          :icon="isSaved ? 'bookmark' : 'bookmark_border'"
          class="rounded-btn"
          style="border-radius: 12px; width: 48px"
          @click="toggleSave"
        />
      </div>

      <h2 class="section-title">Trail Overview</h2>
      <p class="detail-description">{{ trail.shortDescription }}</p>

      <div class="curation-box">
        <q-icon
          name="auto_awesome"
          color="secondary"
          size="20px"
          class="q-mr-sm"
        />
        <div> <strong>Curation Basis:</strong> {{ trail.curationBasis }} </div>
      </div>
    </section>

    <!-- Journey Timeline -->
    <section class="section-spacing trail-stops">
      <h2 class="section-title">The Journey</h2>

      <div class="timeline">
        <div
          v-for="(stop, index) in populatedStops"
          :key="stop.id"
          class="timeline-item"
        >
          <!-- Connector line -->
          <div
            v-if="index !== populatedStops.length - 1"
            class="timeline-line"
          ></div>

          <!-- Number badge -->
          <div class="timeline-number">{{ index + 1 }}</div>

          <!-- Stop Content -->
          <div class="stop-card">
            <div class="stop-card__visual">
              <img
                v-if="getRecordImage(stop)"
                :src="getRecordImage(stop)"
                :alt="stop.name"
                class="stop-card__image"
              />
              <CategoryFallbackArt
                v-else
                :categorySlug="stop.categorySlug || stop.categoryId"
                :recordType="stop.isHeritage ? 'heritage' : 'culture'"
              />
              <div
                class="stop-card__type-badge"
                :class="stop.isHeritage ? 'bg-primary' : 'bg-secondary'"
              >
                <q-icon
                  :name="
                    stop.isHeritage ? 'account_balance' : 'self_improvement'
                  "
                  size="12px"
                  class="q-mr-xs"
                />
                {{ stop.isHeritage ? 'Heritage' : 'Culture' }}
              </div>
            </div>

            <div class="stop-card__content">
              <div class="stop-card__meta">
                <span class="verified-badge">
                  <q-icon
                    name="verified"
                    color="positive"
                    size="14px"
                    class="q-mr-xs"
                  />
                  VERIFIED
                </span>
                <span class="stop-card__cat">{{ stop.category }}</span>
              </div>
              <h3 class="stop-card__title">{{ stop.name }}</h3>
              <p class="stop-card__desc">{{ stop.shortDescription }}</p>

              <q-btn
                outline
                color="primary"
                :label="stop.isHeritage ? 'View Heritage' : 'View Culture'"
                class="q-mt-sm"
                @click="goToStop(stop)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
  <q-page v-else class="flex flex-center">
    <q-spinner color="primary" size="3em" />
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { culturalTrails } from '@/data/trails.js'
import { allHeritage } from '@/data/heritage.js'
import { allCulture } from '@/data/culture.js'
import { states } from '@/data/states.js'
import { getRecordImage } from '@/utils/mediaHelper.js'
import { usePassportStore } from '@/stores/passportStore.js'
import { useSavedStore } from '@/stores/savedStore.js'
import { useQuasar } from 'quasar'
import CategoryFallbackArt from '@/components/common/CategoryFallbackArt.vue'

const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const passport = usePassportStore()
const savedStore = useSavedStore()
const trail = ref(null)

onMounted(() => {
  const slug = route.params.slug
  const found = culturalTrails.find(t => t.slug === slug)
  if (found) {
    trail.value = found
  } else {
    router.replace({ name: 'error-not-found' })
  }
})

const isCompleted = computed(() => {
  return trail.value ? passport.hasCompletedTrail(trail.value.slug) : false
})

const toggleComplete = () => {
  if (trail.value) passport.toggleTrail(trail.value.slug)
}

const isSaved = computed(() => {
  return trail.value ? savedStore.isSaved(trail.value.slug) : false
})

const toggleSave = async () => {
  if (trail.value) {
    const success = await savedStore.toggleSave(trail.value.slug, 'trail')
    if (!success) {
      $q.notify({ type: 'warning', message: 'Sign in to save items.' })
    } else {
      $q.notify({
        type: 'positive',
        message: isSaved.value ? 'Saved' : 'Removed from saved items'
      })
    }
  }
}

const getStateName = slug => {
  const state = states.find(s => s.slug === slug)
  return state ? state.name : slug
}

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

const populatedStops = computed(() => {
  if (!trail.value) return []
  return trail.value.stops.map(id => {
    let record = allHeritage.find(h => h.id === id)
    let isHeritage = true
    if (!record) {
      record = allCulture.find(c => c.id === id)
      isHeritage = false
    }
    return { ...record, isHeritage }
  })
})

const goToStop = stop => {
  if (stop.isHeritage) {
    router.push({ name: 'heritage-detail', params: { slug: stop.slug } })
  } else {
    router.push({ name: 'culture-detail', params: { slug: stop.slug } })
  }
}
</script>

<style lang="scss" scoped>
.trail-detail {
  background-color: var(--color-surface);
  padding-bottom: 80px;
}

.back-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 20;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}

.detail-hero {
  position: relative;
  height: 300px;
  width: 100%;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 24px 20px;
    color: white;
  }

  &__meta {
    margin-bottom: 8px;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 4px;
    line-height: 1.1;
  }

  &__subtitle {
    font-size: 0.9375rem;
    opacity: 0.9;
    margin: 0;
  }
}

.section-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--color-text);
}

.detail-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
}

.curation-box {
  background: rgba(212, 168, 67, 0.1);
  border: 1px solid rgba(212, 168, 67, 0.3);
  padding: 12px;
  border-radius: 12px;
  display: flex;
  font-size: 0.8125rem;
  color: var(--color-text);
  line-height: 1.4;
}

.timeline {
  position: relative;
  padding-left: 20px;
}

.timeline-item {
  position: relative;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-line {
  position: absolute;
  left: 11px; /* Center of number badge */
  top: 24px;
  bottom: -24px;
  width: 2px;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.timeline-number {
  position: absolute;
  left: -20px;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.75rem;
  z-index: 2;
  box-shadow: 0 0 0 4px var(--color-surface);
}

.stop-card {
  margin-left: 16px;
  background: var(--color-surface-card);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  &__visual {
    position: relative;
    height: 140px;
    width: 100%;
    flex-shrink: 0;

    @media (min-width: 600px) {
      width: 160px;
      height: auto;
      min-height: 140px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__type-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 4px 8px;
    border-radius: 12px;
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  &__content {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  .verified-badge {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    color: var(--q-positive);
    font-weight: bold;
  }

  &__cat {
    font-size: 0.75rem;
    color: var(--color-text-secondary);
    font-weight: 500;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 4px;
    color: var(--color-text);
  }

  &__desc {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
    margin: 0 0 8px;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
