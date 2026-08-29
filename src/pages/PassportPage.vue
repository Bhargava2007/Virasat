<template>
  <q-page class="passport-page">
    <div class="passport-container">
      <!-- HERO SUMMARY -->
      <header class="passport-hero">
        <div class="passport-hero__texture"></div>
        <div class="passport-hero__content">
          <div class="passport-emblem">
            <q-icon name="auto_stories" size="36px" color="primary" />
          </div>
          <h1 class="passport-hero__title">Heritage Passport</h1>
          <p class="passport-hero__subtitle"
            >Your verified exploration journal</p
          >

          <div class="stats-row">
            <div class="stat-box">
              <span class="stat-box__val text-primary">{{
                totalExploredCount
              }}</span>
              <span class="stat-box__label">Total<br />Explored</span>
            </div>
            <div class="stat-box">
              <span class="stat-box__val">{{ heritageCount }}</span>
              <span class="stat-box__label">Heritage<br />Sites</span>
            </div>
            <div class="stat-box">
              <span class="stat-box__val">{{ cultureCount }}</span>
              <span class="stat-box__label">Culture<br />Records</span>
            </div>
            <div class="stat-box">
              <span class="stat-box__val text-secondary">{{
                trailsCount
              }}</span>
              <span class="stat-box__label">Trails<br />Completed</span>
            </div>
          </div>
        </div>
      </header>

      <main class="passport-body">
        <!-- EARNED BADGES / STAMPS -->
        <section class="passport-section stamps-section">
          <h2 class="section-title">
            <q-icon name="stars" color="primary" class="q-mr-sm" size="22px" />
            Passport Stamps
          </h2>
          <div v-if="badges.length === 0" class="empty-state">
            <q-icon name="lock_outline" size="32px" color="grey-5" />
            <p>Start exploring records to earn stamps.</p>
          </div>
          <div v-else class="stamps-grid">
            <div
              v-for="badge in badges"
              :key="badge.id"
              class="stamp-card"
              :style="{ '--stamp-color': badge.color }"
            >
              <div class="stamp-card__ring">
                <q-icon
                  :name="badge.icon"
                  size="24px"
                  :style="{ color: badge.color }"
                />
              </div>
              <h3 class="stamp-card__title">{{ badge.name }}</h3>
              <p class="stamp-card__desc">{{ badge.desc }}</p>
            </div>
          </div>
        </section>

        <!-- STATE PROGRESS -->
        <section class="passport-section state-progress-section">
          <h2 class="section-title">
            <q-icon name="map" color="secondary" class="q-mr-sm" size="22px" />
            State Exploration
          </h2>

          <div class="state-cards">
            <div
              v-for="state in activeStateProgress"
              :key="state.stateSlug"
              class="state-card"
            >
              <div class="state-card__header">
                <h3 class="state-card__title">{{ state.name }}</h3>
                <span class="state-card__percent"
                  >{{ Math.round(state.totalPercent) }}%</span
                >
              </div>

              <div class="progress-track">
                <div
                  class="progress-bar bg-primary"
                  :style="{ width: state.totalPercent + '%' }"
                ></div>
              </div>

              <div class="state-card__stats">
                <div class="stat-pill">
                  <q-icon
                    name="account_balance"
                    size="14px"
                    class="q-mr-xs text-primary"
                  />
                  {{ state.heritageExplored }} / {{ state.heritageTotal }}
                </div>
                <div class="stat-pill">
                  <q-icon
                    name="self_improvement"
                    size="14px"
                    class="q-mr-xs text-secondary"
                  />
                  {{ state.cultureExplored }} / {{ state.cultureTotal }}
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- RECENT EXPLORATION -->
        <section class="passport-section recent-section">
          <h2 class="section-title">
            <q-icon name="history" color="dark" class="q-mr-sm" size="22px" />
            Recent Exploration
          </h2>

          <div v-if="recent.length === 0" class="empty-state">
            <p>No recent activity.</p>
          </div>
          <div v-else class="recent-list">
            <div
              v-for="item in recent"
              :key="item.id + item.ts"
              class="recent-item"
              @click="goToRecord(item)"
            >
              <div
                class="recent-item__icon"
                :class="`bg-${getIconColor(item.type)}`"
              >
                <q-icon
                  :name="getIconName(item.type)"
                  color="white"
                  size="16px"
                />
              </div>
              <div class="recent-item__content">
                <h4 class="recent-item__title">{{
                  item.record.name || item.record.title
                }}</h4>
                <p class="recent-item__date">{{ formatDate(item.ts) }}</p>
              </div>
              <q-icon name="chevron_right" color="grey-6" size="20px" />
            </div>
          </div>
        </section>

        <!-- RESET SETTINGS -->
        <section class="passport-settings">
          <q-btn
            flat
            color="negative"
            label="Reset Passport Progress"
            icon="delete_forever"
            class="full-width"
            @click="confirmReset"
          />
        </section>
      </main>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { usePassportStore } from '@/stores/passportStore.js'

const router = useRouter()
const $q = useQuasar()
const passport = usePassportStore()

const state = passport.state
const badges = passport.earnedBadges
const recent = passport.recentExplorations
const stateProgress = passport.stateProgress

// We only want to show the showcase states (Odisha)
const activeStateProgress = computed(() => {
  return stateProgress.value.filter(s =>
    ['odisha'].includes(s.stateSlug)
  )
})

const heritageCount = computed(() => Object.keys(state.heritage).length)
const cultureCount = computed(() => Object.keys(state.culture).length)
const trailsCount = computed(() => Object.keys(state.trails).length)
const totalExploredCount = computed(
  () => heritageCount.value + cultureCount.value
)

const getIconName = type => {
  if (type === 'heritage') return 'account_balance'
  if (type === 'culture') return 'self_improvement'
  return 'route'
}

const getIconColor = type => {
  if (type === 'heritage') return 'primary'
  if (type === 'culture') return 'secondary'
  return 'indigo'
}

const formatDate = ts => {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(ts))
}

const goToRecord = item => {
  if (item.type === 'heritage') {
    router.push({ name: 'heritage-detail', params: { slug: item.record.slug } })
  } else if (item.type === 'culture') {
    router.push({ name: 'culture-detail', params: { slug: item.record.slug } })
  } else if (item.type === 'trail') {
    router.push({ name: 'trail-detail', params: { slug: item.record.slug } })
  }
}

const confirmReset = () => {
  $q.dialog({
    title: 'Reset Passport?',
    message:
      'Are you sure you want to delete all exploration progress? This action cannot be undone.',
    persistent: true,
    ok: {
      label: 'Reset',
      color: 'negative',
      flat: true
    },
    cancel: {
      label: 'Cancel',
      color: 'dark',
      flat: true
    }
  }).onOk(() => {
    passport.resetPassport()
  })
}
</script>

<style scoped lang="scss">
.passport-page {
  background-color: #f8f5f2; /* Cream paper */
  background-image: url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.03)"/%3E%3C/svg%3E');
  min-height: 100vh;
  padding-bottom: 90px;
}

.passport-container {
  max-width: 600px;
  margin: 0 auto;
}

/* HERO SUMMARY */
.passport-hero {
  position: relative;
  background: #2c1e18;
  color: white;
  padding: 40px 24px 32px;
  border-radius: 0 0 24px 24px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);

  &__texture {
    position: absolute;
    inset: 0;
    opacity: 0.1;
    background: url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)"/%3E%3C/svg%3E');
  }

  &__content {
    position: relative;
    z-index: 2;
    text-align: center;
  }
}

.passport-emblem {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(212, 168, 67, 0.5); /* Gold touch */
  display: flex;
  align-items: center;
  justify-content: center;
}

.passport-hero__title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 4px;
  color: #fdf8f5;
  letter-spacing: 0.02em;
}

.passport-hero__subtitle {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 32px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.stats-row {
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(10px);
}

.stat-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  &__val {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 4px;
  }

  &__label {
    font-size: 0.625rem;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.05em;
    line-height: 1.2;
  }
}

.text-primary {
  color: #b84b2a !important;
}
.text-secondary {
  color: #8b4a6a !important;
}

/* BODY */
.passport-body {
  padding: 24px;
}

.passport-section {
  margin-bottom: 32px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: #3d2b22;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
}

.empty-state {
  text-align: center;
  padding: 32px 16px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px dashed rgba(61, 43, 34, 0.2);
  border-radius: var(--radius-md);
  color: #7a685d;
  font-size: 0.875rem;

  p {
    margin: 8px 0 0;
  }
}

/* STAMPS */
.stamps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
}

.stamp-card {
  background: white;
  border-radius: 16px;
  padding: 20px 12px;
  text-align: center;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(61, 43, 34, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--stamp-color);
  }

  &__ring {
    width: 56px;
    height: 56px;
    margin: 0 auto 12px;
    border-radius: 50%;
    border: 2px dashed var(--stamp-color);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 700;
    color: #2c1e18;
    margin: 0 0 4px;
    line-height: 1.2;
  }

  &__desc {
    font-size: 0.6875rem;
    color: #7a685d;
    margin: 0;
    line-height: 1.3;
  }
}

/* STATE PROGRESS */
.state-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.state-card {
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(61, 43, 34, 0.05);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 700;
    color: #2c1e18;
    margin: 0;
  }

  &__percent {
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 700;
    color: #b84b2a;
  }

  &__stats {
    display: flex;
    gap: 12px;
    margin-top: 12px;
  }
}

.progress-track {
  height: 6px;
  background: #f0eae4;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s ease;
}

.stat-pill {
  background: #f8f5f2;
  padding: 4px 10px;
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 600;
  color: #57463d;
  display: flex;
  align-items: center;
}

/* RECENT */
.recent-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.recent-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-soft);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:active {
    transform: scale(0.98);
  }

  &__icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    flex-shrink: 0;
  }

  &__content {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 0.9375rem;
    font-weight: 600;
    color: #2c1e18;
    margin: 0 0 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__date {
    font-size: 0.75rem;
    color: #7a685d;
    margin: 0;
  }
}

.passport-settings {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px dashed rgba(61, 43, 34, 0.15);
}
</style>
