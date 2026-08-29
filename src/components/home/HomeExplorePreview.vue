<template>
  <div class="explore-preview-wrapper">
    <h2 class="section-title">Explore India</h2>
    <div class="map-card">
      <q-icon name="explore" class="map-icon" />
      <div class="map-text">Interactive Map</div>
    </div>
    <q-btn
      flat
      color="primary"
      label="Open Full Map &rarr;"
      to="/explore/map"
      no-caps
      class="explore-btn"
    />
  </div>
</template>

<script setup></script>

<style scoped>
.explore-preview-wrapper {
  padding: 24px 16px;
}

.section-title {
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text, #1a1a2e);
  margin: 0 0 16px 0;
}

.map-card {
  width: 100%;
  height: 180px;
  border-radius: var(--radius-lg, 20px);
  background: #e8e4de;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.map-icon {
  font-size: 48px;
  color: #5a5a6e;
  opacity: 0.4;
}

.map-text {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #5a5a6e);
  margin-top: 8px;
}

.explore-btn {
  margin-top: 12px;
  padding: 8px 0;
  width: 100%;
}
</style>
