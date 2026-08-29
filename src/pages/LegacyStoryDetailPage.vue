<template>
  <q-page v-if="story" class="story-reading-page">
    <!-- Back button -->
    <button class="back-btn" @click="$router.back()" aria-label="Go back">
      <q-icon name="arrow_back" size="20px" />
    </button>

    <!-- Minimal header bar showing title after scroll -->
    <div class="sticky-bar" :class="{ 'sticky-bar--visible': scrolled }">
      <span>{{ story.title }}</span>
    </div>

    <article class="reading-container">
      <!-- Story Cover Block -->
      <div class="cover-block">
        <div class="cover-block__ornament">
          <div class="ornament-line"></div>
          <q-icon name="auto_stories" size="20px" />
          <div class="ornament-line"></div>
        </div>

        <div class="cover-block__badges">
          <span class="badge badge--category">{{ story.category }}</span>
          <span class="badge badge--era">{{ story.estimatedEra }}</span>
        </div>

        <h1 class="cover-block__title">{{ story.title }}</h1>

        <p class="cover-block__excerpt">{{ story.excerpt }}</p>

        <div class="cover-block__meta">
          <div class="meta-item">
            <q-icon name="place" size="14px" />
            <span>{{ story.region }}</span>
          </div>
          <div class="meta-divider">|</div>
          <div class="meta-item">
            <q-icon name="schedule" size="14px" />
            <span>{{ story.readTime }}</span>
          </div>
        </div>
      </div>

      <!-- Story Divider -->
      <div class="section-divider">
        <span></span>
        <span class="divider-dot"></span>
        <span class="divider-dot"></span>
        <span class="divider-dot"></span>
        <span></span>
      </div>

      <!-- Story Body -->
      <div class="story-body">
        <div class="story-prose" v-html="formattedContent"></div>
      </div>

      <!-- Source & Verification Box -->
      <div class="verification-box">
        <div class="verification-box__header">
          <q-icon name="verified_user" size="22px" color="positive" />
          <h3>Verified Oral History</h3>
        </div>
        <p>
          This story is part of Odisha's documented oral tradition, sourced from:
          <em>{{ story.source }}</em>
        </p>
        <p class="verification-box__disclaimer">
          Oral histories may vary between communities and tellings. This version represents one of the most widely documented narratives of this tale.
        </p>
      </div>

      <!-- Navigation to more stories -->
      <div class="more-stories">
        <button class="more-stories__btn" @click="$router.push({ name: 'legacy-stories' })">
          <q-icon name="arrow_back" size="16px" />
          Explore More Stories
        </button>
      </div>
    </article>
  </q-page>

  <q-page v-else class="flex flex-center">
    <q-spinner color="primary" size="3em" />
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { legacyStories } from '@/data/legacyStories.js'

const route = useRoute()
const router = useRouter()
const story = ref(null)
const scrolled = ref(false)

onMounted(() => {
  const slug = route.params.slug
  const found = legacyStories.find(s => s.slug === slug)
  if (found) {
    story.value = found
  } else {
    router.replace({ name: 'error-not-found' })
  }

  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const onScroll = () => {
  scrolled.value = window.scrollY > 160
}

const formattedContent = computed(() => {
  if (!story.value) return ''
  const paragraphs = story.value.content.trim().split('\n\n')
  return paragraphs
    .map((p, index) => {
      const clean = p.replace(/\n/g, ' ').trim()
      if (index === 0) {
        // Drop cap on first letter
        const first = clean.charAt(0)
        const rest = clean.slice(1)
        return `<p><span class="drop-cap">${first}</span>${rest}</p>`
      }
      return `<p>${clean}</p>`
    })
    .join('')
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

// ============ BASE ============
.story-reading-page {
  background: #FFFDF9;
  min-height: 100vh;
  padding-bottom: 80px;
}

// ============ BACK BUTTON ============
.back-btn {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 100;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #1E1309;
  transition: transform 0.15s;

  &:active { transform: scale(0.9); }
}

// ============ STICKY BAR ============
.sticky-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255,253,249,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.07);
  padding: 14px 70px 14px 70px;
  font-family: 'Playfair Display', serif;
  font-size: 0.9375rem;
  font-weight: 700;
  color: #1E1309;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translateY(-100%);
  transition: transform 0.3s ease;

  &--visible {
    transform: translateY(0);
  }
}

// ============ READING CONTAINER ============
.reading-container {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 24px;
}

// ============ COVER BLOCK ============
.cover-block {
  padding: 80px 0 48px;
  text-align: center;

  &__ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: #B84B2A;
    margin-bottom: 32px;
    opacity: 0.6;
  }

  &__badges {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  &__title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 900;
    color: #1E1309;
    margin: 0 0 20px;
    line-height: 1.15;
    letter-spacing: -0.02em;

    @media (max-width: 480px) { font-size: 2.25rem; }
  }

  &__excerpt {
    font-family: 'Lora', serif;
    font-style: italic;
    font-size: 1.125rem;
    color: #6B5240;
    line-height: 1.7;
    margin: 0 0 28px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }

  &__meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: #9B8070;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
}

.ornament-line {
  flex: 1;
  max-width: 60px;
  height: 1px;
  background: currentColor;
}

.badge {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 5px 12px;
  border-radius: 100px;
  text-transform: uppercase;

  &--category {
    background: rgba(184, 75, 42, 0.1);
    color: #B84B2A;
    border: 1px solid rgba(184, 75, 42, 0.2);
  }

  &--era {
    background: rgba(201, 150, 42, 0.1);
    color: #C9962A;
    border: 1px solid rgba(201, 150, 42, 0.2);
  }
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.meta-divider {
  color: #D4C0B0;
}

// ============ SECTION DIVIDER ============
.section-divider {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 48px;
  padding: 0 8px;

  span:first-child,
  span:last-child {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, #D4C0B0, transparent);
  }

  .divider-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #C9962A;
    flex: none;
  }
}

// ============ STORY BODY / PROSE ============
.story-body {
  margin-bottom: 60px;
}

.story-prose {
  p {
    font-family: 'Lora', serif;
    font-size: 1.125rem;
    line-height: 1.85;
    color: #2E1F14;
    margin: 0 0 28px;

    @media (max-width: 480px) {
      font-size: 1rem;
      line-height: 1.75;
    }
  }

  .drop-cap {
    float: left;
    font-family: 'Playfair Display', serif;
    font-size: 5.5rem;
    font-weight: 900;
    line-height: 0.78;
    padding-right: 10px;
    padding-top: 8px;
    color: #B84B2A;
    display: block;
  }

  em {
    font-style: italic;
    color: #5C3D2A;
  }

  strong {
    font-weight: 700;
    color: #1E1309;
  }
}

// ============ VERIFICATION BOX ============
.verification-box {
  background: #F5FAF0;
  border: 1px solid rgba(46, 125, 50, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 40px;

  &__header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.125rem;
      font-weight: 700;
      color: #1B5E20;
      margin: 0;
    }
  }

  p {
    font-family: 'Lora', serif;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #2E5539;
    margin: 0 0 12px;

    em {
      font-style: italic;
      font-weight: 600;
    }
  }

  &__disclaimer {
    font-size: 0.8125rem !important;
    color: #5D8966 !important;
    border-top: 1px solid rgba(46, 125, 50, 0.1);
    padding-top: 12px;
    margin-top: 12px !important;
    margin-bottom: 0 !important;
  }
}

// ============ MORE STORIES ============
.more-stories {
  text-align: center;
  padding-bottom: 24px;

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #1E1309;
    color: #fff;
    border: none;
    border-radius: 100px;
    padding: 14px 28px;
    font-size: 0.9375rem;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: 'Playfair Display', serif;

    &:active { opacity: 0.85; }
  }
}
</style>
