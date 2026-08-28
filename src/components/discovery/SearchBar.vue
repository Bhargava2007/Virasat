<template>
  <div
    class="search-bar"
    :class="{ 'search-bar--dark': dark, 'search-bar--light': !dark }"
  >
    <q-icon name="search" size="20px" class="search-bar__icon" />
    <input
      type="text"
      class="search-bar__input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
    <q-icon
      v-if="modelValue"
      name="close"
      size="18px"
      class="search-bar__clear"
      @click="$emit('update:modelValue', '')"
    />
    <div class="search-bar__filter-btn" aria-label="Filter">
      <q-icon name="filter_list" size="18px" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Search...'
  },
  dark: {
    type: Boolean,
    default: false
  }
})
defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 28px;
  padding: 6px 6px 6px 16px;
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(74, 44, 30, 0.08);
  border: 1px solid rgba(74, 44, 30, 0.08);
  transition: all 0.2s ease;
  width: 100%;

  &__input {
    flex: 1;
    font-family: var(--font-body);
    font-size: 0.875rem;
    border: none;
    outline: none;
    background: transparent;
    padding: 6px 8px;
    color: var(--color-text);

    &::placeholder {
      color: #9e8e85;
      font-weight: 400;
    }
  }

  &__icon {
    flex-shrink: 0;
    color: #8c786c;
  }

  &__clear {
    flex-shrink: 0;
    cursor: pointer;
    color: #9e8e85;
    margin-right: 6px;
    &:hover {
      color: var(--color-text);
    }
  }

  &__filter-btn {
    flex-shrink: 0;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: var(--color-primary);
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(184, 75, 42, 0.08);
    }
  }

  &:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 6px 24px rgba(184, 75, 42, 0.14);
  }
}
</style>
