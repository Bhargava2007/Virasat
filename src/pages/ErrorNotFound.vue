<template>
  <div class="error-page fullscreen q-pa-md flex flex-center">
    <div class="text-center">
      <div class="error-page__code">404</div>
      <div class="error-page__message">This page seems lost in history...</div>
      <q-btn
        class="q-mt-xl"
        color="primary"
        unelevated
        rounded
        to="/"
        label="Return Home"
        no-caps
        padding="12px 32px"
      />
    </div>
  </div>
</template>

<style scoped>
.error-page {
  background: #1a1a2e;
  color: #faf7f2;
}

.error-page__code {
  font-family: 'Outfit', sans-serif;
  font-size: 20vh;
  font-weight: 700;
  line-height: 1;
  opacity: 0.15;
  color: #d4a843;
}

.error-page__message {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  opacity: 0.7;
  margin-top: -2vh;
}
</style>
