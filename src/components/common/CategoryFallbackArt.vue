<template>
  <div
    class="category-fallback-art"
    :style="{ background: theme.bg }"
  >
    <!-- Geometric Overlay Pattern -->
    <svg class="category-fallback-art__pattern" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="heritage-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.15)" />
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#heritage-grid)" />
      <!-- Arch motif -->
      <path
        d="M 120 300 C 120 180, 280 180, 280 300"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        stroke-width="3"
      />
      <path
        d="M 150 300 C 150 210, 250 210, 250 300"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        stroke-width="2"
      />
    </svg>

    <!-- Center Icon & Label Badge -->
    <div class="category-fallback-art__content">
      <div class="category-fallback-art__icon-circle" :style="{ color: theme.accent }">
        <q-icon :name="theme.icon" size="36px" />
      </div>
      <span class="category-fallback-art__label" :style="{ color: theme.accent }">
        {{ theme.label }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getCategoryVisualTheme } from '@/utils/mediaHelper.js'

const props = defineProps({
  categorySlug: {
    type: String,
    default: ''
  },
  recordType: {
    type: String,
    default: 'heritage' // 'heritage' | 'culture'
  }
})

const theme = computed(() => getCategoryVisualTheme(props.categorySlug, props.recordType))
</script>

<style scoped lang="scss">
.category-fallback-art {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &__pattern {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &__content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-align: center;
    padding: 16px;
  }

  &__icon-circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  &__label {
    font-family: var(--font-heading);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.9;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
