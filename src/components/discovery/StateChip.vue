<template>
  <button
    class="state-chip"
    :class="{ 'state-chip--selected': selected }"
    :aria-label="state.name"
    :aria-pressed="selected"
    @click="$emit('select', state)"
    :style="
      selected ? { backgroundColor: activeColor, borderColor: activeColor } : {}
    "
  >
    <q-icon v-if="icon" :name="icon" size="14px" class="state-chip__icon" />
    <span>{{ state.name }}</span>
  </button>
</template>

<script setup>
defineProps({
  state: {
    type: Object,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  activeColor: {
    type: String,
    default: '#4A2C1E'
  }
})
defineEmits(['select'])
</script>

<style scoped lang="scss">
.state-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: 20px;
  min-height: 34px;
  background-color: #ffffff;
  border: 1px solid rgba(74, 44, 30, 0.12);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(74, 44, 30, 0.04);

  &__icon {
    color: var(--color-primary);
  }

  &--selected {
    background-color: var(--color-dark);
    border-color: var(--color-dark);
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(74, 44, 30, 0.2);

    .state-chip__icon {
      color: #ffffff;
    }
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
