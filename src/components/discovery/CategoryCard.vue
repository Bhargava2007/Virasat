<template>
  <button
    class="category-card"
    :class="{ 'category-card--selected': selected }"
    :aria-label="category.name"
    :aria-pressed="selected"
    @click="$emit('select', category)"
  >
    <div class="category-card__icon-wrap" :style="iconWrapStyles">
      <q-icon
        :name="category.icon"
        size="20px"
        :style="{ color: category.color }"
      />
    </div>
    <span class="category-card__name">{{
      category.shortName || category.name
    }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  category: {
    type: Object,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  }
})

defineEmits(['select'])

const hexToRgb = hex => {
  if (!hex) return { r: 184, g: 75, b: 42 }
  const h = hex.replace('#', '')
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16)
  }
}

const iconWrapStyles = computed(() => {
  const rgb = hexToRgb(props.category.color)
  if (props.selected) {
    return {
      backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.18)`,
      borderColor: props.category.color,
      boxShadow: `0 4px 12px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25)`
    }
  }
  return {
    backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
    borderColor: 'transparent'
  }
})
</script>

<style scoped lang="scss">
.category-card {
  width: 64px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  padding: 2px 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.2s ease;

  &__icon-wrap {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    transition: all 0.2s ease;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(74, 44, 30, 0.05);
  }

  &__name {
    font-family: var(--font-body);
    font-size: 0.6875rem;
    font-weight: 500;
    color: var(--color-text);
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.2;
    white-space: nowrap;
  }

  &--selected &__name {
    font-weight: 700;
    color: var(--color-primary);
  }

  &:active {
    transform: scale(0.94);
  }
}
</style>
