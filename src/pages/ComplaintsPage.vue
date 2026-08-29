<template>
  <q-page class="complaints-page">
    <div class="complaints-header">
      <h1 class="page-title">Complaints</h1>
      <p class="page-subtitle">Dispute heritage information or report monument damage</p>
    </div>
    <div class="complaints-cards">
      <div class="complaint-card" @click="$router.push('/complaints/rectify')">
        <div class="card-icon">??</div>
        <h2>Rectify Information</h2>
        <p>If you are a local or historian and wish to dispute or correct information mentioned on the site, submit a formal request here.</p>
        <q-btn flat label="Submit Request" color="primary" />
      </div>
      <div class="complaint-card" @click="$router.push('/complaints/report')">
        <div class="card-icon">??</div>
        <h2>Report Damage</h2>
        <p>If you are visiting a monument and notice damage, upload an image and description so it can be reported to the authorities.</p>
        <q-btn flat label="Report Now" color="negative" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
</script>

<style scoped>
.complaints-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px 80px;
}
.complaints-header {
  text-align: center;
  margin-bottom: 40px;
}
.page-title {
  font-family: var(--font-heading), Outfit, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 8px;
}
.page-subtitle {
  color: var(--color-text-muted, #666);
  font-size: 1rem;
}
.complaints-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 600px) {
  .complaints-cards { grid-template-columns: 1fr; }
}
.complaint-card {
  background: var(--color-surface-raised, #fff);
  border-radius: 20px;
  padding: 32px 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.complaint-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.14);
}
.card-icon {
  font-size: 2.5rem;
}
.complaint-card h2 {
  font-family: var(--font-heading), Outfit, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
}
.complaint-card p {
  color: var(--color-text-muted, #666);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}
</style>
