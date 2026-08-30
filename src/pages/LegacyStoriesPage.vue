<template>
  <q-page class="legacy-page">
    <!-- Header -->
    <header class="legacy-header">
      <div class="legacy-header__bg-pattern"></div>
      <div class="legacy-header__content">
        <div class="heritage-emblem">
          <q-icon name="auto_stories" size="32px" />
        </div>
        <p class="legacy-header__eyebrow">Oral History of Odisha</p>
        <h1 class="legacy-header__title">Legacy Stories</h1>
        <p class="legacy-header__subtitle">
          Timeless folk tales, legends &amp; oral histories — preserved before they fade into silence
        </p>
        <div class="story-count-badge">
          <span>{{ stories.length }} Verified Stories</span>
        </div>
      </div>
    </header>

    <!-- Category Filter -->
    <div class="filter-bar">
      <div class="filter-bar__inner">
        <button
          v-for="cat in ['All', ...categories]"
          :key="cat"
          class="filter-pill"
          :class="{ 'filter-pill--active': activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Stories Grid -->
    <div class="stories-section">
      <div class="stories-grid">
        <article
          v-for="(story, idx) in filteredStories"
          :key="story.id"
          class="story-card"
          :class="`story-card--color-${(idx % 5) + 1}`"
          @click="goToStory(story.slug)"
        >
          <div class="story-card__accent"></div>

          <div class="story-card__body">
            <!-- Category + read time row — no absolute positioning -->
            <div class="story-card__top-row">
              <span class="story-card__category">{{ story.category }}</span>
              <span class="story-card__read-time">
                <q-icon name="schedule" size="11px" />
                {{ story.readTime }}
              </span>
            </div>

            <h2 class="story-card__title">{{ story.title }}</h2>
            <p class="story-card__excerpt">{{ story.excerpt }}</p>

            <div class="story-card__footer">
              <span class="story-card__region">
                <q-icon name="place" size="13px" />
                {{ story.region }}
              </span>
              <span class="story-card__era-pill">{{ story.estimatedEra }}</span>
            </div>

            <div class="story-card__cta">
              Read Story <q-icon name="east" size="14px" />
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Source Footer -->
    <div class="source-footer">
      <q-icon name="verified_user" size="18px" color="positive" />
      <p>All stories are sourced from verified academic publications, temple chronicles, and documented oral traditions of Odisha.</p>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { legacyStories } from '@/data/legacyStories.js'

const router = useRouter()
const stories = legacyStories
const activeCategory = ref('All')

const categories = computed(() => [...new Set(stories.map(s => s.category))])

const filteredStories = computed(() => {
  if (activeCategory.value === 'All') return stories
  return stories.filter(s => s.category === activeCategory.value)
})

const goToStory = slug => {
  router.push({ name: 'story-detail', params: { slug } })
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

$ink: #1E1309;
$parchment: #FDF8F0;
$accent: #B84B2A;
$gold: #C9962A;
$muted: #6B5240;

.legacy-page {
  background: $parchment;
  min-height: 100vh;
  padding-bottom: 100px;
}

// === HEADER ===
.legacy-header {
  position: relative;
  padding: 56px 24px 48px;
  overflow: hidden;
  background: $ink;
  text-align: center;

  &__bg-pattern {
    position: absolute;
    inset: 0;
    opacity: 0.04;
    background-image: repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 50%);
    background-size: 20px 20px;
  }

  &__content {
    position: relative;
    z-index: 2;
    max-width: 560px;
    margin: 0 auto;
  }

  &__eyebrow {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 0.9rem;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin: 0 0 16px;
  }

  &__title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
    margin: 0 0 16px;
    letter-spacing: -0.01em;
    line-height: 1.1;

    @media (max-width: 480px) { font-size: 2.25rem; }
  }

  &__subtitle {
    font-size: 1rem;
    color: rgba(255,255,255,0.65);
    line-height: 1.6;
    margin: 0 0 28px;
  }
}

.heritage-emblem {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: $gold;
}

.story-count-badge {
  display: inline-block;
  background: rgba(201,150,42,0.18);
  border: 1px solid rgba(201,150,42,0.35);
  color: $gold;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 100px;
}

// === FILTER BAR ===
.filter-bar {
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  position: sticky;
  top: 0;
  z-index: 10;

  &::-webkit-scrollbar { display: none; }

  &__inner {
    display: flex;
    gap: 8px;
    padding: 12px 20px;
    min-width: max-content;
  }
}

.filter-pill {
  border: 1.5px solid rgba(74,44,30,0.18);
  background: transparent;
  border-radius: 100px;
  padding: 6px 16px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: $muted;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &--active {
    background: $ink;
    border-color: $ink;
    color: #fff;
  }
}

// === GRID ===
.stories-section {
  padding: 28px 16px;
  max-width: 1040px;
  margin: 0 auto;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

// Color themes
$colors: (
  1: (#B84B2A, rgba(184,75,42,0.08)),
  2: (#3B5BDB, rgba(59,91,219,0.08)),
  3: (#2D6A4F, rgba(45,106,79,0.08)),
  4: (#B5680C, rgba(181,104,12,0.08)),
  5: (#7048B8, rgba(112,72,184,0.08)),
);

@each $n, $vals in $colors {
  .story-card--color-#{$n} {
    .story-card__accent  { background: nth($vals, 1); }
    .story-card__category {
      color: nth($vals, 1);
      background: nth($vals, 2);
    }
    .story-card__cta { color: nth($vals, 1); }
  }
}

.story-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.05);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 32px rgba(0,0,0,0.09);
  }
  &:active { transform: scale(0.98); }

  &__accent {
    height: 5px;
    width: 100%;
    flex-shrink: 0;
  }

  &__body {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  // ---- TOP ROW: category pill + read time (inline, no overlap) ----
  &__top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 14px;
    flex-wrap: wrap;          // wraps gracefully if text is long
  }

  &__category {
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    padding: 4px 10px;
    border-radius: 6px;
    text-transform: uppercase;
    white-space: nowrap;
    flex-shrink: 0;
  }

  &__read-time {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 0.75rem;
    color: #aaa;
    font-weight: 500;
    white-space: nowrap;
    flex-shrink: 0;
  }

  &__title {
    font-family: 'Playfair Display', serif;
    font-size: 1.275rem;
    font-weight: 700;
    color: $ink;
    margin: 0 0 10px;
    line-height: 1.35;
  }

  &__excerpt {
    font-size: 0.875rem;
    color: $muted;
    line-height: 1.65;
    margin: 0 0 16px;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  // ---- FOOTER: region + era ----
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    flex-wrap: wrap;
  }

  &__region {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    color: #aaa;
    font-weight: 500;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__era-pill {
    font-size: 0.7rem;
    font-weight: 600;
    color: #888;
    background: #F5F0EB;
    padding: 3px 8px;
    border-radius: 4px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  // ---- CTA ----
  &__cta {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8125rem;
    font-weight: 700;
    transition: gap 0.2s;
  }
  &:hover &__cta { gap: 9px; }
}

// === SOURCE FOOTER ===
.source-footer {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  max-width: 680px;
  margin: 24px auto 0;
  padding: 16px 24px;
  background: rgba(255, 248, 235, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(212, 160, 23, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(74, 44, 30, 0.1);

  p {
    font-size: 0.8125rem;
    color: #4a2c1e;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
  }
}
</style>
