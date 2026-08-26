<template>
  <div class="trails-preview-wrapper">
    <div class="section-header">
      <h2 class="section-title">Cultural Trails</h2>
      <router-link to="/trails" class="view-all-link"
        >View All &rarr;</router-link
      >
    </div>
    <div class="trails-scroll-row">
      <div class="trail-card card-1">
        <div class="demo-badge">DEMO</div>
        <div class="trail-content">
          <div class="trail-title">Trail Placeholder 1</div>
          <div class="trail-subtitle">Demo cultural journey</div>
        </div>
      </div>
      <div class="trail-card card-2">
        <div class="demo-badge">DEMO</div>
        <div class="trail-content">
          <div class="trail-title">Trail Placeholder 2</div>
          <div class="trail-subtitle">Demo cultural journey</div>
        </div>
      </div>
      <div class="trail-card card-3">
        <div class="demo-badge">DEMO</div>
        <div class="trail-content">
          <div class="trail-title">Trail Placeholder 3</div>
          <div class="trail-subtitle">Demo cultural journey</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.trails-preview-wrapper {
  padding: 24px 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-title {
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text, #1a1a2e);
  margin: 0;
}

.view-all-link {
  font-size: 0.875rem;
  color: var(--color-primary, #c4632a);
  text-decoration: none;
  font-weight: 500;
}

.trails-scroll-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.trails-scroll-row::-webkit-scrollbar {
  display: none;
}

.trail-card {
  position: relative;
  width: 240px;
  flex-shrink: 0;
  height: 150px;
  border-radius: var(--radius-md, 12px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card-1 {
  background: linear-gradient(135deg, #c4632a 0%, #d4a843 100%);
}

.card-2 {
  background: linear-gradient(135deg, #2d3a7c 0%, #4a5aa8 100%);
}

.card-3 {
  background: linear-gradient(135deg, #1a1a2e 0%, #2d3a7c 100%);
}

.demo-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.625rem;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.trail-title {
  color: white;
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 1rem;
}

.trail-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
}
</style>
