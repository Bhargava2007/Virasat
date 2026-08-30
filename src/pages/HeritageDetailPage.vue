<template>
  <q-page class="heritage-detail-page">
    <!-- 404 / NOT FOUND STATE -->
    <div v-if="!record" class="detail-not-found">
      <q-icon name="search_off" size="56px" class="q-mb-md text-terracotta" />
      <h2 class="detail-not-found__title">Heritage Record Not Found</h2>
      <p class="detail-not-found__subtitle">
        We couldn't find a heritage record matching "{{ route.params.slug }}".
      </p>
      <q-btn
        unelevated
        color="primary"
        label="Back to Heritage Catalogue"
        no-caps
        class="q-mt-lg rounded-btn"
        @click="router.push('/heritage')"
      />
    </div>

    <!-- MAIN DETAIL CONTENT -->
    <article v-else class="detail-container">
      <!-- HERO SECTION -->
      <header class="detail-hero">
        <div class="detail-hero__media">
          <img
            v-if="heroImageUrl && !heroImageError"
            :src="heroImageUrl"
            :alt="record.name"
            class="detail-hero__img"
            fetchpriority="high"
            @error="heroImageError = true"
          />
          <CategoryFallbackArt
            v-else
            :category-slug="record.category"
            record-type="heritage"
          />
          <div class="detail-hero__gradient"></div>
        </div>

        <!-- Floating Top Bar -->
        <div class="detail-hero__top-bar">
          <button
            class="back-circle-btn"
            aria-label="Go back"
            @click="handleBack"
          >
            <q-icon name="arrow_back" size="20px" />
          </button>
          <div v-if="isVerified" class="verified-pill">
            <q-icon name="verified" size="12px" class="q-mr-xs" />
            VERIFIED RECORD
          </div>
        </div>

        <!-- Hero Title Block -->
        <div class="detail-hero__title-block">
          <div class="detail-hero__tags">
            <span
              class="category-chip"
              :style="{ backgroundColor: categoryColor }"
            >
              <q-icon :name="categoryIcon" size="13px" class="q-mr-xs" />
              {{ categoryName }}
            </span>
            <span class="state-chip-label">
              <q-icon name="place" size="13px" class="q-mr-xs" />
              {{ stateName }}
            </span>
          </div>

          <h1 class="detail-hero__title">{{ record.name }}</h1>

          <p v-if="record.districtOrRegion" class="detail-hero__region">
            <q-icon name="location_on" size="14px" class="q-mr-xs opacity-70" />
            {{ record.districtOrRegion }}
          </p>
        </div>
      </header>

      <!-- MAIN BODY CONTENT -->
      <main class="detail-body">
        <!-- UNESCO World Heritage Banner (If Applicable) -->
        <div v-if="record.unescoStatus" class="unesco-banner">
          <div class="unesco-banner__icon">
            <q-icon name="public" size="24px" />
          </div>
          <div class="unesco-banner__info">
            <h4 class="unesco-banner__title">UNESCO World Heritage</h4>
            <p class="unesco-banner__text">{{ record.unescoStatus }}</p>
          </div>
        </div>

        <!-- ABOUT SECTION -->
        <section class="detail-section">
          <h2 class="detail-section__heading">About</h2>
          <p class="detail-section__lead">{{ record.shortDescription }}</p>

          <!-- Historical Period Metadata Badge -->
          <div v-if="record.historicalPeriod" class="meta-badge-row q-mt-md">
            <div class="meta-badge">
              <span class="meta-badge__label">Historical Period</span>
              <span class="meta-badge__value">{{
                record.historicalPeriod
              }}</span>
            </div>
          </div>
        </section>

        <!-- HISTORY SECTION -->
        <section v-if="record.history" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon name="history_edu" size="20px" class="section-icon" />
            History & Origins
          </h2>
          <p class="detail-section__text">{{ record.history }}</p>
        </section>

        <!-- CULTURAL SIGNIFICANCE SECTION -->
        <section v-if="record.culturalSignificance" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon name="auto_awesome" size="20px" class="section-icon" />
            Cultural Significance
          </h2>
          <p class="detail-section__text">{{ record.culturalSignificance }}</p>
        </section>

        <!-- ARCHITECTURE SECTION -->
        <section v-if="record.architecture" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon name="architecture" size="20px" class="section-icon" />
            Architecture & Design
          </h2>
          <p class="detail-section__text">{{ record.architecture }}</p>
        </section>

        <!-- CONSTRUCTION STORY SECTION -->
        <section v-if="record.constructionDetails" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon name="engineering" size="20px" class="section-icon" />
            Construction Story
          </h2>
          <p v-if="record.constructionDetails.commissioner" class="detail-section__subtext q-mb-sm">
            <strong>Commissioned by:</strong> {{ record.constructionDetails.commissioner }}
          </p>
          <p v-if="record.constructionDetails.duration" class="detail-section__subtext q-mb-sm">
            <strong>Construction Period:</strong> {{ record.constructionDetails.duration }}
          </p>
          <p v-if="record.constructionDetails.craftspeople" class="detail-section__subtext q-mb-sm">
            <strong>Craftspeople & Artisans:</strong> {{ record.constructionDetails.craftspeople }}
          </p>
          <p v-if="record.constructionDetails.materials" class="detail-section__subtext q-mb-sm">
            <strong>Materials Used:</strong> {{ record.constructionDetails.materials }}
          </p>
          <p v-if="record.constructionDetails.process" class="detail-section__text q-mt-sm">
            {{ record.constructionDetails.process }}
          </p>
        </section>

        <!-- HISTORICAL TIMELINE SECTION -->
        <section v-if="record.timelineEvents && record.timelineEvents.length > 0" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon name="timeline" size="20px" class="section-icon" />
            Historical Timeline
          </h2>
          <div class="timeline-list">
            <div
              v-for="(evt, idx) in record.timelineEvents"
              :key="idx"
              class="timeline-item"
            >
              <div class="timeline-item__dot"></div>
              <div class="timeline-item__content">
                <span class="timeline-item__year">{{ evt.year }}</span>
                <p class="timeline-item__desc">{{ evt.event }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- NOTABLE EVENTS SECTION -->
        <section v-if="record.notableEvents && record.notableEvents.length > 0" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon name="event_note" size="20px" class="section-icon" />
            Notable Events
          </h2>
          <div class="notable-events-list">
            <div
              v-for="(evt, idx) in record.notableEvents"
              :key="idx"
              class="notable-event-card"
            >
              <div class="notable-event-card__header">
                <q-icon name="stars" size="16px" class="q-mr-xs text-amber-7" />
                <span class="notable-event-card__title">{{ evt.title }}</span>
                <span v-if="evt.year" class="notable-event-card__year">{{ evt.year }}</span>
              </div>
              <p class="notable-event-card__desc">{{ evt.description }}</p>
            </div>
          </div>
        </section>

        <!-- TRADITIONS & CULTURE BORN HERE -->
        <section v-if="record.traditionsSpawned && record.traditionsSpawned.length > 0" class="detail-section traditions-section">
          <h2 class="detail-section__heading">
            <q-icon name="auto_stories" size="20px" class="section-icon" />
            Traditions & Culture Born Here
          </h2>
          <p class="detail-section__subtext q-mb-md">
            How this site influenced the living culture around it — traditions, art forms, food, and rituals that emerged from or because of this place.
          </p>
          <div class="traditions-list">
            <div
              v-for="(item, idx) in record.traditionsSpawned"
              :key="idx"
              class="tradition-card"
            >
              <div class="tradition-card__icon">
                <q-icon :name="item.icon || 'fiber_manual_record'" size="20px" />
              </div>
              <div class="tradition-card__body">
                <h4 class="tradition-card__name">{{ item.name }}</h4>
                <span class="tradition-card__type">{{ item.type }}</span>
                <p class="tradition-card__desc">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ACTIVE USE & LEGACY -->
        <section v-if="record.activeUsePeriod" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon name="hourglass_full" size="20px" class="section-icon" />
            Active Use & Legacy
          </h2>
          <p class="detail-section__text">{{ record.activeUsePeriod }}</p>
        </section>

        <!-- GALLERY SECTION (Only if legitimate media exists) -->
        <section v-if="hasGallery" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon name="collections" size="20px" class="section-icon" />
            Gallery
          </h2>
          <div class="gallery-grid">
            <div
              v-for="(imgItem, idx) in galleryItems"
              :key="idx"
              class="gallery-item"
            >
              <img :src="imgItem.url" :alt="imgItem.title || record.name" loading="lazy" />
            </div>
          </div>
        </section>

        <!-- RELATED HERITAGE & CULTURE -->
        <section v-if="relatedContentList.length > 0" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon
              name="explore"
              size="20px"
              class="section-icon text-terracotta"
            />
            Explore More
          </h2>
          <p class="detail-section__subtext">
            Related Heritage & Culture you might find interesting.
          </p>
          <div class="related-grid">
            <RelatedContentCard
              v-for="item in relatedContentList"
              :key="item.id"
              :item="item"
              :type="item.record_type"
            />
          </div>
        </section>

        <!-- SOURCES & VERIFICATION METADATA -->
        <section
          v-if="record.sources && record.sources.length > 0"
          class="detail-section sources-section"
        >
          <h2 class="detail-section__heading">
            <q-icon name="menu_book" size="18px" class="section-icon" />
            Verified Source Attribution
          </h2>
          <div class="source-list">
            <div
              v-for="(src, idx) in record.sources"
              :key="idx"
              class="source-card"
            >
              <div class="source-card__icon">
                <q-icon name="verified_user" size="18px" />
              </div>
              <div class="source-card__content">
                <h5 class="source-card__title">{{ src.sourceName }}</h5>
                <span class="source-card__type"
                  >{{ src.sourceType }} Source</span
                >
              </div>
              <a
                v-if="src.sourceUrl"
                :href="src.sourceUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="source-card__link"
                aria-label="View Source (opens in new tab)"
              >
                <span>Source Link</span>
                <q-icon name="open_in_new" size="14px" class="q-ml-xs" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </article>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { allHeritage } from '@/data/heritage.js'
import { allCulture } from '@/data/culture.js'
import { heritageCategories } from '@/data/heritageCategories.js'
import { states } from '@/data/states.js'
import { getRecordImage, getRecordGalleryImages } from '@/utils/mediaHelper.js'
import { useQuasar } from 'quasar'

import CategoryFallbackArt from '@/components/common/CategoryFallbackArt.vue'
import RelatedContentCard from '@/components/discovery/RelatedContentCard.vue'

const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const heroImageError = ref(false)

const record = computed(() => {
  return allHeritage.find(h => h.slug === route.params.slug) || null
})

const isVerified = computed(
  () => record.value?.verificationStatus === 'verified'
)

const handleBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/heritage')
  }
}

const heroImageUrl = computed(() => getRecordImage(record.value))

const categoryObj = computed(() => {
  if (!record.value) return {}
  return heritageCategories.find(c => c.slug === record.value.category) || {}
})

const stateObj = computed(() => {
  if (!record.value) return {}
  return states.find(s => s.slug === record.value.state) || {}
})

const categoryName = computed(
  () => record.value?.categoryName || categoryObj.value.name || 'Heritage'
)
const categoryIcon = computed(() => categoryObj.value.icon || 'account_balance')
const categoryColor = computed(() => categoryObj.value.color || '#B84B2A')
const stateName = computed(
  () => record.value?.stateName || stateObj.value.name || 'India'
)

// Deterministic Related Content Logic
const relatedContentList = computed(() => {
  if (!record.value) return []

  const current = record.value
  const allUnified = [
    ...allHeritage.map(h => ({ ...h, record_type: 'heritage' })),
    ...allCulture.map(c => ({ ...c, record_type: 'culture' }))
  ]

  // Filter out current record
  const candidates = allUnified.filter(item => item.id !== current.id)

  // Rank 1: Same category + same state
  const rank1 = candidates.filter(
    item => item.category === current.category && item.state === current.state
  )

  // Rank 2: Same category (but not same state, as they are in rank1)
  const rank2 = candidates.filter(
    item => item.category === current.category && item.state !== current.state
  )

  // Rank 3: Same state (but not same category)
  const rank3 = candidates.filter(
    item => item.state === current.state && item.category !== current.category
  )

  // Combine and deduplicate (deduplication happens naturally here due to exclusive conditions)
  const combined = [...rank1, ...rank2, ...rank3]

  return combined.slice(0, 3)
})

// Gallery Check
const galleryItems = computed(() => {
  if (!record.value) return []
  const items = []
  if (Array.isArray(record.value.images)) {
    record.value.images.forEach(img => {
      if (typeof img === 'string') items.push({ url: img })
      else if (img && img.url) items.push(img)
    })
  }
  return items
})

const hasGallery = computed(() => galleryItems.value.length > 0)
</script>

<style scoped lang="scss">
.heritage-detail-page {
  background-color: var(--color-surface);
  min-height: 100vh;
  padding-bottom: 90px;
}

.detail-container {
  max-width: 900px;
  margin: 0 auto;
  background: #ffffff;
  min-height: 100vh;
  box-shadow: 0 0 30px rgba(74, 44, 30, 0.05);

  @media (max-width: 900px) {
    max-width: 100%;
  }
}

/* 404 / NOT FOUND */
.detail-not-found {
  max-width: 500px;
  margin: 80px auto;
  padding: 32px 24px;
  text-align: center;

  &__title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 8px;
  }

  &__subtitle {
    font-family: var(--font-body);
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    margin: 0;
  }

  .text-terracotta {
    color: #b84b2a;
  }

  .rounded-btn {
    border-radius: 12px;
  }
}

/* HERO SECTION */
.detail-hero {
  position: relative;
  width: 100%;
  height: 380px;
  background: #4a2c1e;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 20px 24px;

  @media (max-width: 600px) {
    height: 320px;
  }

  &__media {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(35, 18, 11, 0.95) 0%,
      rgba(42, 24, 16, 0.6) 45%,
      rgba(0, 0, 0, 0.25) 100%
    );
  }

  &__top-bar {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title-block {
    position: relative;
    z-index: 2;
  }

  &__tags {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 6px 0;
    line-height: 1.25;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

    @media (max-width: 600px) {
      font-size: 1.625rem;
    }
  }

  &__region {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
    display: flex;
    align-items: center;
  }
}

.back-circle-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.92);
    background: rgba(255, 255, 255, 0.35);
  }
}

.verified-pill {
  background: rgba(46, 125, 50, 0.9);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.625rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.06em;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.category-chip {
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.state-chip-label {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

/* DETAIL BODY */
.detail-body {
  padding: 24px;

  @media (max-width: 600px) {
    padding: 20px 16px;
  }
}

/* UNESCO BANNER */
.unesco-banner {
  background: linear-gradient(135deg, #1565c0 0%, #0d47a1 100%);
  color: #ffffff;
  border-radius: 14px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(21, 101, 192, 0.25);

  &__icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0 0 2px 0;
    color: #90caf9;
  }

  &__text {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0;
  }
}

/* DETAIL SECTIONS */
.detail-section {
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(74, 44, 30, 0.08);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  &__heading {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 12px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__subtext {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
    margin: -6px 0 14px 0;
  }

  &__lead {
    font-family: var(--font-body);
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #3d2b22;
    margin: 0;
    font-weight: 500;
  }

  &__text {
    font-family: var(--font-body);
    font-size: 0.875rem;
    line-height: 1.65;
    color: #57463d;
    margin: 0;
  }
}

.section-icon {
  color: #b84b2a;
}

.text-purple {
  color: #6c4ba0 !important;
}

.text-terracotta {
  color: #b84b2a !important;
}

/* METADATA BADGES */
.meta-badge-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.meta-badge {
  background: #fdf8f5;
  border: 1px solid rgba(184, 75, 42, 0.12);
  border-radius: 10px;
  padding: 8px 14px;
  display: flex;
  flex-direction: column;

  &__label {
    font-family: var(--font-heading);
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #b84b2a;
    margin-bottom: 2px;
  }

  &__value {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    font-weight: 600;
    color: #3d2b22;
  }
}

/* GALLERY GRID */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}

.gallery-item {
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  background: #fdf8f5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* RELATED GRID */
.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 12px;
}

/* SOURCES SECTION */
.sources-section {
  background: #faf6f3;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(74, 44, 30, 0.06);
}

.source-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.source-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(74, 44, 30, 0.06);

  &__icon {
    color: #2e7d32;
    display: flex;
    align-items: center;
  }

  &__content {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 0.8125rem;
    font-weight: 700;
    color: #2c1e18;
    margin: 0 0 2px 0;
  }

  &__type {
    font-family: var(--font-body);
    font-size: 0.6875rem;
    color: #7a685d;
  }

  &__link {
    font-family: var(--font-heading);
    font-size: 0.75rem;
    font-weight: 700;
    color: #b84b2a;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 6px 12px;
    background: #fff3ec;
    border-radius: 6px;
    transition: background 0.2s ease;

    &:hover {
      background: #ffe5d6;
    }
  }
}

/* TIMELINE */
.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-left: 8px;
}

.timeline-item {
  display: flex;
  gap: 16px;
  position: relative;
  padding-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 20px;
    bottom: 0;
    width: 2px;
    background: rgba(184, 75, 42, 0.15);
  }

  &:last-child::before { display: none; }

  &__dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #B84B2A;
    border: 3px solid #fff3ec;
    flex-shrink: 0;
    margin-top: 2px;
    box-shadow: 0 0 0 2px rgba(184, 75, 42, 0.2);
  }

  &__content { flex: 1; }

  &__year {
    font-family: var(--font-heading);
    font-size: 0.75rem;
    font-weight: 800;
    color: #B84B2A;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 2px;
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--color-text);
    line-height: 1.55;
    margin: 0;
  }
}

/* NOTABLE EVENTS */
.notable-events-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.notable-event-card {
  background: #fffaf7;
  border: 1px solid rgba(184, 75, 42, 0.1);
  border-left: 3px solid #B84B2A;
  border-radius: 8px;
  padding: 12px 14px;

  &__header {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 6px;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 700;
    color: #2c1e18;
    flex: 1;
  }

  &__year {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: #B84B2A;
    font-weight: 600;
    background: #fff3ec;
    padding: 2px 8px;
    border-radius: 20px;
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    line-height: 1.55;
    margin: 0;
  }
}

/* TRADITIONS & CULTURE */
.traditions-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tradition-card {
  display: flex;
  gap: 14px;
  background: linear-gradient(135deg, #fdf6f0 0%, #fff9f5 100%);
  border: 1px solid rgba(184, 75, 42, 0.1);
  border-radius: 12px;
  padding: 14px 16px;

  &__icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(184, 75, 42, 0.1);
    color: #B84B2A;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__body { flex: 1; }

  &__name {
    font-family: var(--font-heading);
    font-size: 0.9375rem;
    font-weight: 700;
    color: #2c1e18;
    margin: 0 0 2px;
  }

  &__type {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #B84B2A;
    display: block;
    margin-bottom: 6px;
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    line-height: 1.55;
    margin: 0;
  }
}
</style>
