<template>
  <div class="section-header">
    <div class="section-header__left">
      <h2 class="section-header__title">{{ title }}</h2>
      <p v-if="subtitle" class="section-header__subtitle">{{ subtitle }}</p>
    </div>
    <div class="section-header__right" v-if="actionLabel && actionTo">
      <router-link :to="actionTo" class="section-header__action">
        {{ actionLabel }} &rarr;
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  actionLabel: {
    type: String,
    default: ''
  },
  actionTo: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0;

  &__left {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text);
    margin: 0;
  }

  &__subtitle {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
    margin: 0;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__action {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
