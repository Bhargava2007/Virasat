<template>
  <div class="home-hero">
    <h1 class="hero-title">Heritage & Culture</h1>
    <p class="hero-tagline">Explore India's Heritage & Living Culture</p>
    <div class="accent-line"></div>
    <q-input
      readonly
      class="hero-search"
      placeholder="Search monuments, festivals, arts..."
      borderless
      dense
    >
      <template v-slot:prepend>
        <q-icon name="search" color="white" />
      </template>
    </q-input>
  </div>
</template>

<script setup></script>

<style scoped>
.home-hero {
  width: 100%;
  background: linear-gradient(160deg, #1a1a2e 0%, #2d3a7c 40%, #c4632a 100%);
  padding: 48px 20px 32px;
  text-align: center;
}

.hero-title {
  color: white;
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
}

.hero-tagline {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9375rem;
  font-family: var(--font-body), 'Inter', sans-serif;
  margin: 8px 0 0;
}

.accent-line {
  width: 40px;
  height: 3px;
  background: #d4a843;
  border-radius: 2px;
  margin: 16px auto;
}

.hero-search {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 28px;
  color: white;
  margin-top: 24px;
  padding: 0 16px;
}

:deep(.q-field__native),
:deep(.q-field__input) {
  color: white !important;
}

:deep(.q-field__native::placeholder) {
  color: rgba(255, 255, 255, 0.5);
}
</style>
