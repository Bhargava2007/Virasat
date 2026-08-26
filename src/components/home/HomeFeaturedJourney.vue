<template>
  <div class="featured-journey-wrapper">
    <h2 class="section-title">Featured Journey</h2>
    <div class="featured-card">
      <div class="demo-badge">DEMO</div>
      <div class="featured-content">
        <div class="featured-title">Cultural Journey</div>
        <div class="featured-subtitle"
          >Demo &mdash; Curated heritage journey coming soon</div
        >
        <div class="accent-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.featured-journey-wrapper {
  padding: 24px 16px;
}

.section-title {
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text, #1a1a2e);
  margin: 0 0 16px 0;
}

.featured-card {
  width: 100%;
  min-height: 160px;
  background: linear-gradient(135deg, #2d3a7c, #1a1a2e);
  border-radius: var(--radius-lg, 20px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.demo-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.625rem;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.featured-title {
  color: white;
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
}

.featured-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8125rem;
  margin-top: 4px;
}

.accent-line {
  width: 32px;
  height: 2px;
  background: #d4a843;
  margin-top: 12px;
}
</style>
