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
      @keyup.enter="handleEnter"
      :placeholder="placeholder"
    />
    <q-icon
      v-if="modelValue"
      name="close"
      size="18px"
      class="search-bar__clear"
      @click="clearInput"
    />
    <div class="search-bar__filter-btn" aria-label="Search" @click="handleEnter">
      <q-icon name="arrow_forward" size="18px" v-if="actionIcon === 'arrow'" />
      <q-icon name="filter_list" size="18px" v-else />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
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
  },
  actionIcon: {
    type: String,
    default: 'filter' // 'filter' or 'arrow'
  }
})
const emit = defineEmits(['update:modelValue', 'submit'])

const handleEnter = () => {
  emit('submit', props.modelValue)
}

const clearInput = () => {
  emit('update:modelValue', '')
}
</script>

<style scoped lang="scss">
.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 28px;
  padding: 6px 6px 6px 16px;
  transition: all 0.2s ease;
  width: 100%;

  /* Light Theme (Default) */
  &--light {
    background: #ffffff;
    box-shadow: 0 4px 20px rgba(74, 44, 30, 0.08);
    border: 1px solid rgba(74, 44, 30, 0.08);

    &:focus-within {
      border-color: var(--color-primary);
      box-shadow: 0 6px 24px rgba(184, 75, 42, 0.14);
    }
  }

  /* Dark Theme */
  &--dark {
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:focus-within {
      border-color: rgba(255, 255, 255, 0.4);
      background: rgba(255, 255, 255, 0.16);
    }
  }

  &__input {
    flex: 1;
    font-family: var(--font-body);
    font-size: 0.875rem;
    border: none;
    outline: none;
    background: transparent;
    padding: 6px 8px;

    .search-bar--light & {
      color: var(--color-text);
      &::placeholder {
        color: #9e8e85;
      }
    }

    .search-bar--dark & {
      color: #ffffff;
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }

  &__icon {
    flex-shrink: 0;
    
    .search-bar--light & {
      color: #8c786c;
    }
    .search-bar--dark & {
      color: #ffffff;
    }
  }

  &__clear {
    flex-shrink: 0;
    cursor: pointer;
    margin-right: 6px;
    
    .search-bar--light & {
      color: #9e8e85;
      &:hover { color: var(--color-text); }
    }
    .search-bar--dark & {
      color: rgba(255, 255, 255, 0.7);
      &:hover { color: #ffffff; }
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
    cursor: pointer;
    transition: background 0.2s ease;

    .search-bar--light & {
      color: var(--color-primary);
      &:hover {
        background: rgba(184, 75, 42, 0.08);
      }
    }
    
    .search-bar--dark & {
      color: #ffffff;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
}
</style>
