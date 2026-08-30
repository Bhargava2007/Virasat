<template>
  <div class="featured-journey-wrapper" v-if="featuredStory">
    <h2 class="section-title">Featured Story</h2>
    <div
      class="featured-card"
      @click="goToStory"
      @keydown.enter="goToStory"
      @keydown.space="goToStory"
      @mouseenter="onCardHover"
      @mouseleave="onCardLeave"
      @focus="onCardHover"
      @blur="onCardLeave"
      role="link"
      tabindex="0"
    >
      <q-img
        :src="`/images/${featuredStory.coverImage || ''}`"
        class="featured-bg"
        fetchpriority="high"
        fit="cover"
      />
      <div class="featured-overlay"></div>
      <div class="featured-content">
        <div class="featured-title">{{ featuredStory.title }}</div>
        <div class="featured-subtitle">
          {{ featuredStory.region }} &mdash; {{ featuredStory.readTime }}
        </div>
        <div class="accent-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { legacyStories } from '@/data/legacyStories.js'
import gsap from 'gsap'

const router = useRouter()
const featuredStory = computed(() =>
  legacyStories.length > 0 ? legacyStories[0] : null
)

const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const goToStory = () => {
  if (featuredStory.value) {
    router.push(`/stories/${featuredStory.value.slug}`)
  }
}

const onCardHover = event => {
  if (prefersReducedMotion()) return

  const card = event.currentTarget
  const bg = card.querySelector('.featured-bg')
  const overlay = card.querySelector('.featured-overlay')

  gsap.to(card, {
    y: -12,
    duration: 0.4,
    ease: 'power2.out'
  })

  gsap.to(
    card,
    {
      boxShadow: '0 12px 40px rgba(74, 44, 30, 0.25)',
      duration: 0.4,
      ease: 'power2.out'
    },
    '<'
  )

  gsap.to(
    bg,
    {
      scale: 1.05,
      duration: 0.5,
      ease: 'power2.out'
    },
    '<'
  )

  gsap.to(
    overlay,
    {
      backgroundImage:
        'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)',
      duration: 0.4,
      ease: 'power2.out'
    },
    '<'
  )
}

const onCardLeave = event => {
  if (prefersReducedMotion()) return

  const card = event.currentTarget
  const bg = card.querySelector('.featured-bg')
  const overlay = card.querySelector('.featured-overlay')

  gsap.to(card, {
    y: 0,
    duration: 0.4,
    ease: 'power2.out'
  })

  gsap.to(
    card,
    {
      boxShadow: '0 4px 16px rgba(74, 44, 30, 0.08)',
      duration: 0.4,
      ease: 'power2.out'
    },
    '<'
  )

  gsap.to(
    bg,
    {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    },
    '<'
  )

  gsap.to(
    overlay,
    {
      backgroundImage:
        'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 70%, transparent 100%)',
      duration: 0.4,
      ease: 'power2.out'
    },
    '<'
  )
}
</script>

<style scoped>
.featured-journey-wrapper {
  padding: 24px 16px;
}

.section-title {
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: clamp(1.125rem, 4vw, 1.5rem);
  font-weight: 600;
  color: var(--color-text, #1a1a2e);
  margin: 0 0 16px 0;
}

.featured-card {
  width: 100%;
  min-height: 200px;
  border-radius: var(--radius-lg, 20px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(74, 44, 30, 0.08);
  transition: none;
  outline: none;

  &:focus-visible {
    outline: 2px solid #d4a843;
    outline-offset: 2px;
  }
}

.featured-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: none;
}

.featured-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(15, 23, 32, 0.6) 0%,
    rgba(15, 23, 32, 0.18) 70%,
    transparent 100%
  );
  pointer-events: none;
  transition: none;
}

.featured-content {
  position: relative;
  z-index: 1;
}

.featured-title {
  color: var(--color-base-900);
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: clamp(1.125rem, 5vw, 1.5rem);
  font-weight: 700;
  line-height: 1.3;
}

.featured-subtitle {
  color: var(--color-text-secondary);
  font-size: 0.8125rem;
  margin-top: 8px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.accent-line {
  width: 32px;
  height: 2px;
  background: #d4a843;
  margin-top: 12px;
  border-radius: 1px;
  box-shadow: 0 0 8px rgba(212, 168, 67, 0.3);
}

@media (max-width: 480px) {
  .featured-card {
    min-height: 160px;
    padding: 16px;
  }

  .featured-title {
    font-size: 1.125rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured-bg,
  .featured-overlay {
    transition: opacity 0.2s ease;
  }
}
</style>
