<template>
  <div class="category-cards-wrapper">
    <div class="cards-grid">
      <router-link
        to="/heritage"
        class="category-card heritage-card"
        @mouseenter="onCardHover"
        @mouseleave="onCardLeave"
        @focus="onCardHover"
        @blur="onCardLeave"
      >
        <q-icon name="account_balance" class="card-icon" />
        <div class="card-content">
          <div class="card-title">Heritage</div>
          <div class="card-subtitle">Monuments & Sites</div>
        </div>
      </router-link>

      <router-link
        to="/culture"
        class="category-card culture-card"
        @mouseenter="onCardHover"
        @mouseleave="onCardLeave"
        @focus="onCardHover"
        @blur="onCardLeave"
      >
        <q-icon name="palette" class="card-icon" />
        <div class="card-content">
          <div class="card-title">Culture</div>
          <div class="card-subtitle">Arts & Traditions</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'

const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const onCardHover = event => {
  if (prefersReducedMotion()) return

  const card = event.currentTarget
  gsap.to(card, {
    y: -8,
    duration: 0.3,
    ease: 'power2.out'
  })

  gsap.to(
    card,
    {
      boxShadow: '0 12px 32px rgba(74, 44, 30, 0.18)',
      duration: 0.3,
      ease: 'power2.out'
    },
    '<'
  )
}

const onCardLeave = event => {
  if (prefersReducedMotion()) return

  const card = event.currentTarget
  gsap.to(card, {
    y: 0,
    duration: 0.3,
    ease: 'power2.out'
  })

  gsap.to(
    card,
    {
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
      duration: 0.3,
      ease: 'power2.out'
    },
    '<'
  )
}
</script>

<style scoped>
.category-cards-wrapper {
  padding: 24px 16px;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.category-card {
  text-decoration: none;
  min-height: 140px;
  border-radius: var(--radius-md, 16px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: none;
  position: relative;
  overflow: hidden;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid #d4a843;
    outline-offset: 2px;
  }
}

.category-card:hover::before,
.category-card:focus::before {
  opacity: 1;
}

.heritage-card {
  background: linear-gradient(145deg, #c4632a, #a84e1f);
}

.culture-card {
  background: linear-gradient(145deg, #2d3a7c, #1e2760);
}

.card-icon {
  color: rgba(255, 255, 255, 0.95);
  font-size: 36px;
  margin-bottom: 8px;
  transition: transform 0.3s ease;
}

.category-card:hover .card-icon,
.category-card:focus .card-icon {
  transform: scale(1.1);
}

.card-title {
  color: #fdf8f5;
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.card-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
  font-family: var(--font-body), 'Inter', sans-serif;
  line-height: 1.4;
}

@media (max-width: 480px) {
  .cards-grid {
    gap: 12px;
  }

  .category-card {
    min-height: 120px;
    padding: 16px;
  }

  .card-icon {
    font-size: 28px;
  }

  .card-title {
    font-size: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .category-card {
    transition: opacity 0.2s ease;
  }

  .card-icon {
    transition: none;
  }
}
</style>
