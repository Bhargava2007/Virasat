<template>
  <div class="preserve-cta-wrapper">
    <div class="cta-card">
      <q-icon name="volunteer_activism" class="cta-icon" />
      <h3 class="cta-title">Preserve a Tradition</h3>
      <p class="cta-subtitle">
        Help document and preserve India's living cultural heritage for future
        generations
      </p>
      <q-btn
        unelevated
        rounded
        color="grey-6"
        text-color="white"
        label="Coming Soon"
        no-caps
        disable
        class="cta-btn"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.preserve-cta-wrapper {
  padding: 24px 16px;
}

.cta-card {
  background: linear-gradient(
    135deg,
    rgba(196, 99, 42, 0.06),
    rgba(212, 168, 67, 0.06)
  );
  border: 1px solid rgba(196, 99, 42, 0.15);
  border-radius: var(--radius-lg, 20px);
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-icon {
  font-size: 40px;
  color: var(--color-primary, #c4632a);
  margin-bottom: 12px;
}

.cta-title {
  font-family: var(--font-heading), 'Outfit', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text, #1a1a2e);
  margin: 0 0 8px 0;
}

.cta-subtitle {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 0.8125rem;
  color: var(--color-text-secondary, #5a5a6e);
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.cta-btn {
  padding: 10px 28px;
}
</style>
