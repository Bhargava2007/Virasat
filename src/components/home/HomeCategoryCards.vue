<template>
  <div class="category-cards-wrapper">
    <div class="cards-grid">
      <router-link to="/heritage" class="category-card heritage-card">
        <q-icon name="account_balance" class="card-icon" />
        <div class="card-content">
          <div class="card-title">Heritage</div>
          <div class="card-subtitle">Monuments & Sites</div>
        </div>
      </router-link>

      <router-link to="/culture" class="category-card culture-card">
        <q-icon name="palette" class="card-icon" />
        <div class="card-content">
          <div class="card-title">Culture</div>
          <div class="card-subtitle">Arts & Traditions</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.category-cards-wrapper {
  padding: 24px 16px;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.category-card {
  text-decoration: none;
  min-height: 140px;
  border-radius: var(--radius-md, 12px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
}

.category-card:hover,
.category-card:active {
  transform: scale(0.97);
}

.heritage-card {
  background: linear-gradient(145deg, #c4632a, #a84e1f);
}

.culture-card {
  background: linear-gradient(145deg, #2d3a7c, #1e2760);
}

.card-icon {
  color: white;
  font-size: 36px;
}

.card-title {
  color: white;
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
}

.card-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
  font-family: var(--font-body), 'Inter', sans-serif;
}
</style>
