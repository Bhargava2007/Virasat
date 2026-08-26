<template>
  <q-page class="placeholder-page">
    <div class="placeholder-page__content">
      <div class="placeholder-page__icon-wrapper">
        <q-icon name="route" size="48px" color="primary" />
      </div>
      <h1 class="placeholder-page__title">Cultural Trails</h1>
      <p class="placeholder-page__subtitle"
        >Journeys connecting heritage sites with living culture</p
      >
      <div class="demo-badge">Coming Soon</div>
    </div>
  </q-page>
</template>

<script setup>
//
</script>

<style scoped>
.placeholder-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  padding: 24px;
  padding-bottom: 80px;
}

.placeholder-page__content {
  text-align: center;
  max-width: 320px;
}

.placeholder-page__icon-wrapper {
  width: 88px;
  height: 88px;
  border-radius: 24px;
  background: linear-gradient(
    135deg,
    rgba(196, 99, 42, 0.08),
    rgba(212, 168, 67, 0.08)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.placeholder-page__title {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 8px;
  letter-spacing: -0.02em;
}

.placeholder-page__subtitle {
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  margin: 0 0 20px;
  line-height: 1.5;
}
</style>
