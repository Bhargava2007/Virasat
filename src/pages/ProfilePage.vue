<template>
  <q-page class="profile-page">
    <div class="profile-container">
      <!-- AUTHENTICATED STATE -->
      <template v-if="auth.state.user">
        <header class="profile-header">
          <q-avatar size="80px" class="profile-avatar q-mb-md">
            <img
              :src="
                auth.state.profile?.avatar_url ||
                'https://api.dicebear.com/7.x/initials/svg?seed=' +
                  (auth.state.profile?.display_name || auth.state.user.email)
              "
            />
          </q-avatar>
          <h1 class="profile-name">{{
            auth.state.profile?.display_name || 'Explorer'
          }}</h1>
          <p class="profile-email">{{ auth.state.user.email }}</p>
          <q-btn
            flat
            color="negative"
            label="Sign Out"
            @click="handleSignOut"
          />
        </header>

        <!-- SYNC STATUS -->
        <section class="profile-section q-mt-lg">
          <q-card class="app-card q-mb-md">
            <q-card-section class="q-pb-none">
              <div class="text-subtitle1 text-weight-bold">Passport Sync</div>
            </q-card-section>
            <q-card-section>
              <div class="row items-center q-gutter-sm">
                <q-icon
                  v-if="passport.state.syncStatus === 'syncing'"
                  name="sync"
                  color="primary"
                  size="sm"
                  class="spinning"
                />
                <q-icon
                  v-else-if="passport.state.syncStatus === 'success'"
                  name="cloud_done"
                  color="positive"
                  size="sm"
                />
                <q-icon
                  v-else-if="passport.state.syncStatus === 'error'"
                  name="cloud_off"
                  color="negative"
                  size="sm"
                />
                <q-icon v-else name="cloud" color="grey" size="sm" />

                <div>
                  <span v-if="passport.state.syncStatus === 'syncing'"
                    >Syncing progress to cloud...</span
                  >
                  <span v-else-if="passport.state.syncStatus === 'success'"
                    >Progress backed up to cloud.</span
                  >
                  <div v-else-if="passport.state.syncStatus === 'error'">
                    <span class="text-negative">Sync failed. Progress saved locally.</span>
                    <div class="text-caption text-red-9" v-if="passport.state.syncError">
                      Error: {{ passport.state.syncError }}
                    </div>
                  </div>
                  <span v-else>Progress is saved locally.</span>
                </div>
              </div>
              <div class="q-mt-sm">
                <q-btn
                  outline
                  color="primary"
                  label="Force Sync Now"
                  size="sm"
                  @click="passport.syncWithCloud()"
                />
              </div>
            </q-card-section>
          </q-card>
        </section>

        <!-- SAVED ITEMS -->
        <section class="profile-section q-mt-xl">
          <h2 class="section-title">
            <q-icon
              name="bookmark"
              color="primary"
              class="q-mr-sm"
              size="22px"
            />
            Saved Items
          </h2>

          <div
            v-if="saved.populatedSavedItems.value.length === 0"
            class="empty-state"
          >
            <p>You haven't saved any items yet.</p>
          </div>

          <div v-else class="saved-list">
            <div
              v-for="item in saved.populatedSavedItems.value"
              :key="item.id"
              class="saved-item"
              @click="goToRecord(item)"
            >
              <div class="saved-item__info">
                <q-chip
                  size="sm"
                  :color="getTypeColor(item.record_type)"
                  text-color="white"
                  class="q-mb-xs"
                >
                  {{ item.record_type }}
                </q-chip>
                <h4 class="saved-item__title">{{
                  item.record.name || item.record.title
                }}</h4>
              </div>
              <q-btn
                flat
                round
                color="grey"
                icon="bookmark_remove"
                @click.stop="saved.toggleSave(item.record_id, item.record_type)"
              />
            </div>
          </div>
        </section>
      </template>

      <!-- GUEST STATE (AUTH FORM) -->
      <template v-else>
        <div class="auth-box">
          <div class="text-center q-mb-lg">
            <q-icon name="account_circle" size="64px" color="primary" />
            <h1 class="auth-title">{{
              isLogin ? 'Welcome Back' : 'Create Account'
            }}</h1>
            <p class="auth-subtitle"
              >Sign in to sync your Passport and save favorites.</p
            >
          </div>

          <q-form @submit.prevent="handleAuth" class="q-gutter-md">
            <q-input
              v-if="!isLogin"
              v-model="form.displayName"
              outlined
              label="Display Name"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please enter a name']"
            />
            <q-input
              v-model="form.email"
              type="email"
              outlined
              label="Email"
              lazy-rules
              :rules="[
                val =>
                  (val && val.includes('@')) || 'Please enter a valid email'
              ]"
            />
            <q-input
              v-model="form.password"
              type="password"
              outlined
              label="Password"
              lazy-rules
              :rules="[
                val =>
                  (val && val.length >= 6) ||
                  'Password must be at least 6 characters'
              ]"
            />

            <q-btn
              type="submit"
              :loading="loading"
              color="primary"
              class="full-width q-py-sm"
              :label="isLogin ? 'Sign In' : 'Create Account'"
            />
          </q-form>

          <div class="text-center q-mt-md">
            <q-btn
              flat
              color="secondary"
              @click="isLogin = !isLogin"
              :label="
                isLogin
                  ? 'Need an account? Sign up'
                  : 'Already have an account? Sign in'
              "
            />
          </div>

          <div class="guest-info q-mt-xl">
            <h3 class="guest-info__title">Guest Mode Active</h3>
            <p
              >Your Passport progress is currently saved locally on this device.
              Create an account to sync it across devices and prevent data
              loss.</p
            >
          </div>
        </div>
      </template>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useAuthStore } from '@/stores/authStore.js'
import { usePassportStore } from '@/stores/passportStore.js'
import { useSavedStore } from '@/stores/savedStore.js'

const router = useRouter()
const $q = useQuasar()
const auth = useAuthStore()
const passport = usePassportStore()
const saved = useSavedStore()

const isLogin = ref(true)
const loading = ref(false)

const form = reactive({
  email: '',
  password: '',
  displayName: ''
})

onMounted(() => {
  if (!auth.state.loading && !auth.state.user) {
    // auth.init() is now handled globally in App.vue
  }
})

const syncIcon = computed(() => {
  switch (passport.state.syncStatus) {
    case 'syncing':
      return 'sync'
    case 'success':
      return 'cloud_done'
    case 'error':
      return 'cloud_off'
    default:
      return 'cloud_queue'
  }
})

const syncMessage = computed(() => {
  switch (passport.state.syncStatus) {
    case 'syncing':
      return 'Syncing with cloud...'
    case 'success':
      return 'Passport is synced securely.'
    case 'error':
      return 'Sync failed. Progress saved locally.'
    default:
      return 'Ready to sync.'
  }
})

const getTypeColor = type => {
  if (type === 'heritage') return 'primary'
  if (type === 'culture') return 'secondary'
  return 'indigo'
}

const handleAuth = async () => {
  loading.value = true
  try {
    if (isLogin.value) {
      await auth.signIn(form.email, form.password)
      $q.notify({ type: 'positive', message: 'Signed in successfully' })
    } else {
      await auth.signUp(form.email, form.password, form.displayName)
      $q.notify({
        type: 'positive',
        message: 'Account created! Please sign in.'
      })
      isLogin.value = true
    }
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.message || 'Authentication failed'
    })
  } finally {
    loading.value = false
  }
}

const handleSignOut = async () => {
  try {
    await auth.signOut()
    $q.notify({ type: 'info', message: 'Signed out' })
  } catch (error) {
    console.error(error)
  }
}

const goToRecord = item => {
  if (item.record_type === 'heritage') {
    router.push({ name: 'heritage-detail', params: { slug: item.record.slug } })
  } else if (item.record_type === 'culture') {
    router.push({ name: 'culture-detail', params: { slug: item.record.slug } })
  } else if (item.record_type === 'trail') {
    router.push({ name: 'trail-detail', params: { slug: item.record.slug } })
  }
}
</script>

<style scoped lang="scss">
.profile-page {
  background-color: #f8f5f2;
  min-height: 100vh;
  padding: 24px;
  padding-bottom: 90px;
}

.profile-container {
  max-width: 600px;
  margin: 0 auto;
}

.auth-box {
  background: white;
  padding: 32px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(61, 43, 34, 0.05);
  border: 1px solid rgba(61, 43, 34, 0.05);
}

.auth-title {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c1e18;
  margin: 16px 0 8px;
}

.auth-subtitle {
  font-size: 0.9375rem;
  color: #7a685d;
  margin-bottom: 0;
}

.guest-info {
  background: #fff3e0;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #f57c00;

  &__title {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 700;
    color: #e65100;
    margin: 0 0 8px;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    color: #5d4037;
  }
}

.profile-header {
  text-align: center;
  margin-bottom: 32px;
}

.profile-avatar {
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(61, 43, 34, 0.1);
}

.profile-name {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c1e18;
  margin: 0 0 4px;
}

.profile-email {
  color: #7a685d;
  margin: 0 0 16px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
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
  border-radius: 12px;
  color: #7a685d;
}

.sync-banner {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(61, 43, 34, 0.05);

  &.sync-success {
    border-left: 4px solid #4caf50;
    color: #2e7d32;
  }
  &.sync-syncing {
    border-left: 4px solid #2196f3;
    color: #1565c0;
  }
  &.sync-error {
    border-left: 4px solid #f44336;
    color: #c62828;
  }
  &.sync-idle {
    border-left: 4px solid #9e9e9e;
    color: #616161;
  }
}

.sync-info {
  flex: 1;
}

.sync-title {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 4px;
}

.sync-desc {
  font-size: 0.8125rem;
  margin: 0;
  opacity: 0.8;
}

.saved-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.saved-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(61, 43, 34, 0.04);
  cursor: pointer;

  &__title {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 600;
    color: #2c1e18;
    margin: 0;
  }
}
</style>
