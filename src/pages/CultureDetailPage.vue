<template>
  <q-page class="culture-detail-page">
    <!-- 404 / NOT FOUND STATE -->
    <div v-if="!record" class="detail-not-found">
      <q-icon name="search_off" size="56px" class="q-mb-md text-purple" />
      <h2 class="detail-not-found__title">Culture Record Not Found</h2>
      <p class="detail-not-found__subtitle">
        We couldn't find a culture record matching "{{ route.params.slug }}".
      </p>
      <q-btn
        unelevated
        color="secondary"
        label="Back to Culture Catalogue"
        no-caps
        class="q-mt-lg rounded-btn"
        @click="router.push('/culture')"
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
            @error="heroImageError = true"
          />
          <CategoryFallbackArt
            v-else
            :category-slug="record.category"
            record-type="culture"
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

          <p v-if="record.region" class="detail-hero__region">
            <q-icon name="location_on" size="14px" class="q-mr-xs opacity-70" />
            {{ record.region }}
          </p>
        </div>
      </header>

      <!-- MAIN BODY CONTENT -->
      <main class="detail-body">
        <!-- PASSPORT & SAVE ACTIONS -->
        <div class="passport-action-bar q-mb-lg row no-wrap q-gutter-x-sm">
          <q-btn
            :outline="!isExplored"
            :unelevated="isExplored"
            :color="isExplored ? 'positive' : 'primary'"
            :icon="isExplored ? 'check_circle' : 'explore'"
            :label="isExplored ? 'Explored ✓' : 'Mark as Explored'"
            class="col rounded-btn text-weight-bold"
            style="border-radius: 12px; padding: 10px"
            @click="toggleExplore"
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

        <!-- UNESCO Intangible Cultural Heritage Banner (If Applicable) -->
        <div v-if="record.unescoIntangibleStatus" class="unesco-ich-banner">
          <div class="unesco-ich-banner__icon">
            <q-icon name="stars" size="24px" />
          </div>
          <div class="unesco-ich-banner__info">
            <h4 class="unesco-ich-banner__title"
              >UNESCO Intangible Cultural Heritage</h4
            >
            <p class="unesco-ich-banner__text">{{
              record.unescoIntangibleStatus
            }}</p>
          </div>
        </div>

        <!-- GI STATUS BADGE (If Applicable) -->
        <div v-if="record.giStatus" class="gi-badge-card">
          <div class="gi-badge-card__icon">
            <q-icon name="verified" size="22px" />
          </div>
          <div class="gi-badge-card__info">
            <span class="gi-badge-card__label"
              >Geographical Indication (GI)</span
            >
            <span class="gi-badge-card__val">{{ record.giStatus }}</span>
          </div>
        </div>

        <!-- ABOUT SECTION -->
        <section class="detail-section">
          <h2 class="detail-section__heading">About</h2>
          <p class="detail-section__lead">{{ record.shortDescription }}</p>

          <!-- Community Tag (If Supplied) -->
          <div v-if="record.community" class="meta-badge-row q-mt-md">
            <div class="meta-badge">
              <span class="meta-badge__label"
                >Associated Community / Performers</span
              >
              <span class="meta-badge__value">{{ record.community }}</span>
            </div>
          </div>
        </section>

        <!-- KEY ELEMENTS SECTION -->
        <section
          v-if="record.keyElements && record.keyElements.length > 0"
          class="detail-section"
        >
          <h2 class="detail-section__heading">
            <q-icon name="category" size="20px" class="section-icon" />
            Key Elements & Characteristics
          </h2>
          <div class="key-elements-flex">
            <span
              v-for="(elem, idx) in record.keyElements"
              :key="idx"
              class="element-pill"
            >
              <q-icon
                name="check_circle"
                size="13px"
                class="q-mr-xs text-purple"
              />
              {{ elem }}
            </span>
          </div>
        </section>

        <!-- ORIGIN & HISTORY SECTION -->
        <section v-if="record.originHistory" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon name="history_edu" size="20px" class="section-icon" />
            Origin & History
          </h2>
          <p class="detail-section__text">{{ record.originHistory }}</p>
        </section>

        <!-- CULTURAL SIGNIFICANCE SECTION -->
        <section v-if="record.culturalSignificance" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon name="auto_awesome" size="20px" class="section-icon" />
            Cultural Significance
          </h2>
          <p class="detail-section__text">{{ record.culturalSignificance }}</p>
        </section>

        <!-- RELATED PLACES (If Supplied) -->
        <section
          v-if="record.relatedPlaces && record.relatedPlaces.length > 0"
          class="detail-section"
        >
          <h2 class="detail-section__heading">
            <q-icon name="pin_drop" size="20px" class="section-icon" />
            Associated Places & Regions
          </h2>
          <div class="place-chips">
            <span
              v-for="(place, idx) in record.relatedPlaces"
              :key="idx"
              class="place-chip"
            >
              <q-icon name="place" size="13px" class="q-mr-xs" />
              {{ place }}
            </span>
          </div>
        </section>

        <!-- RELATED FESTIVALS (If Supplied) -->
        <section
          v-if="record.relatedFestivals && record.relatedFestivals.length > 0"
          class="detail-section"
        >
          <h2 class="detail-section__heading">
            <q-icon name="festival" size="20px" class="section-icon" />
            Associated Festivals
          </h2>
          <div class="festival-chips">
            <span
              v-for="(fest, idx) in record.relatedFestivals"
              :key="idx"
              class="festival-chip"
            >
              <q-icon name="celebration" size="13px" class="q-mr-xs" />
              {{ fest }}
            </span>
          </div>
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
              <img :src="imgItem.url" :alt="imgItem.title || record.name" />
            </div>
          </div>
        </section>

        <!-- RELATED HERITAGE SITES (Culture ↔ Heritage Connections) -->
        <section v-if="relatedHeritageList.length > 0" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon
              name="account_balance"
              size="20px"
              class="section-icon text-terracotta"
            />
            Connected Heritage Sites
          </h2>
          <p class="detail-section__subtext">
            Historical monuments and places connected to {{ record.name }}.
          </p>
          <div class="related-grid">
            <RelatedContentCard
              v-for="hItem in relatedHeritageList"
              :key="hItem.id"
              :item="hItem"
              type="heritage"
            />
          </div>
        </section>

        <!-- RELATED LIVING CULTURE -->
        <section v-if="relatedCultureList.length > 0" class="detail-section">
          <h2 class="detail-section__heading">
            <q-icon
              name="palette"
              size="20px"
              class="section-icon text-purple"
            />
            Related Cultural Traditions
          </h2>
          <div class="related-grid">
            <RelatedContentCard
              v-for="cItem in relatedCultureList"
              :key="cItem.id"
              :item="cItem"
              type="culture"
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
import { allCulture } from '@/data/culture.js'
import { allHeritage } from '@/data/heritage.js'
import { cultureCategories } from '@/data/cultureCategories.js'
import { states } from '@/data/states.js'
import { getRecordImage } from '@/utils/mediaHelper.js'
import { usePassportStore } from '@/stores/passportStore.js'
import { useSavedStore } from '@/stores/savedStore.js'
import { useQuasar } from 'quasar'

import CategoryFallbackArt from '@/components/common/CategoryFallbackArt.vue'
import RelatedContentCard from '@/components/discovery/RelatedContentCard.vue'

const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const passport = usePassportStore()
const savedStore = useSavedStore()
const heroImageError = ref(false)
const record = ref(null)

onMounted(() => {
  const slug = route.params.slug
  const found = allCulture.find(c => c.slug === slug)
  if (found) {
    record.value = found
  } else {
    router.replace({ name: 'error-not-found' })
  }
})

const isExplored = computed(() => {
  return record.value ? passport.hasExploredCulture(record.value.id) : false
})

const toggleExplore = () => {
  if (record.value) passport.toggleCulture(record.value.id)
}

const isSaved = computed(() => {
  return record.value ? savedStore.isSaved(record.value.id) : false
})

const toggleSave = async () => {
  if (record.value) {
    const success = await savedStore.toggleSave(record.value.id, 'culture')
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

const isVerified = computed(
  () => record.value?.verificationStatus === 'verified'
)

const handleBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/culture')
  }
}

const heroImageUrl = computed(() => getRecordImage(record.value))

const categoryObj = computed(() => {
  if (!record.value) return {}
  return cultureCategories.find(c => c.slug === record.value.category) || {}
})

const stateObj = computed(() => {
  if (!record.value) return {}
  return states.find(s => s.slug === record.value.state) || {}
})

const categoryName = computed(
  () => record.value?.categoryName || categoryObj.value.name || 'Culture'
)
const categoryIcon = computed(() => categoryObj.value.icon || 'palette')
const categoryColor = computed(() => categoryObj.value.color || '#6C4BA0')
const stateName = computed(
  () => record.value?.stateName || stateObj.value.name || 'India'
)

// Resolve Related Heritage Records
const relatedHeritageList = computed(() => {
  if (!record.value || !Array.isArray(record.value.relatedHeritageIds))
    return []
  return record.value.relatedHeritageIds
    .map(id => allHeritage.find(h => h.id === id))
    .filter(Boolean)
})

// Resolve Related Culture Records
const relatedCultureList = computed(() => {
  if (!record.value || !Array.isArray(record.value.relatedCultureIds)) return []
  return record.value.relatedCultureIds
    .map(id => allCulture.find(c => c.id === id))
    .filter(Boolean)
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
.culture-detail-page {
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

  .text-purple {
    color: #6c4ba0;
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
  background: #3c245c;
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
      rgba(34, 18, 54, 0.95) 0%,
      rgba(44, 25, 70, 0.6) 45%,
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

/* UNESCO ICH BANNER */
.unesco-ich-banner {
  background: linear-gradient(135deg, #6a1b9a 0%, #4a148c 100%);
  color: #ffffff;
  border-radius: 14px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  box-shadow: 0 4px 16px rgba(106, 27, 154, 0.25);

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
    color: #e1bee7;
  }

  &__text {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0;
  }
}

/* GI BADGE CARD */
.gi-badge-card {
  background: #fdf2f8;
  border: 1px solid rgba(173, 20, 87, 0.2);
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  &__icon {
    color: #ad1457;
    display: flex;
    align-items: center;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__label {
    font-family: var(--font-heading);
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #ad1457;
  }

  &__val {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    color: #3d2b22;
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
  color: #6c4ba0;
}

.text-purple {
  color: #6c4ba0 !important;
}

.text-terracotta {
  color: #b84b2a !important;
}

/* KEY ELEMENTS PILLS */
.key-elements-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.element-pill {
  background: #f3eef8;
  border: 1px solid rgba(108, 75, 160, 0.15);
  color: #2c3e73;
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
}

/* PLACE & FESTIVAL CHIPS */
.place-chips,
.festival-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.place-chip,
.festival-chip {
  background: #fdf8f5;
  border: 1px solid rgba(74, 44, 30, 0.12);
  color: #4a2c1e;
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
}

/* METADATA BADGES */
.meta-badge-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.meta-badge {
  background: #f3eef8;
  border: 1px solid rgba(108, 75, 160, 0.15);
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
    color: #6c4ba0;
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
  background: #f8f5fa;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(108, 75, 160, 0.08);
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
    color: #6c4ba0;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 6px 12px;
    background: #f3eef8;
    border-radius: 6px;
    transition: background 0.2s ease;

    &:hover {
      background: #e8dcf4;
    }
  }
}
</style>
