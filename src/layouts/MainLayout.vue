<template>
  <q-layout view="hHh lpr fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bottom-nav" bordered>
      <div class="bottom-nav__container">
        <router-link
          v-for="tab in tabs"
          :key="tab.route"
          :to="tab.route"
          class="bottom-nav__tab"
          :class="{ 'bottom-nav__tab--active': isActive(tab.route) }"
        >
          <q-icon
            :name="isActive(tab.route) ? tab.iconActive : tab.icon"
            class="bottom-nav__icon"
          />
          <span class="bottom-nav__label">{{ tab.label }}</span>
        </router-link>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = [
  { label: 'Home', icon: 'o_home', iconActive: 'home', route: '/' },
  {
    label: 'Explore',
    icon: 'o_explore',
    iconActive: 'explore',
    route: '/explore'
  },
  { label: 'Trails', icon: 'o_route', iconActive: 'route', route: '/trails' },
  {
    label: 'Passport',
    icon: 'o_auto_stories',
    iconActive: 'auto_stories',
    route: '/passport'
  },
  {
    label: 'Profile',
    icon: 'o_person',
    iconActive: 'person',
    route: '/profile'
  }
]

const isActive = tabRoute => {
  if (tabRoute === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(tabRoute)
}
</script>

<style scoped lang="scss">
.bottom-nav {
  background: rgba(253, 248, 245, 0.94) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(74, 44, 30, 0.08) !important;
  box-shadow: 0 -4px 20px rgba(74, 44, 30, 0.04);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  max-width: 1200px;
  left: 50% !important;
  transform: translateX(-50%);

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 480px;
    margin: 0 auto;
    padding: 6px 0 4px;
  }

  &__tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #7a685d;
    min-width: 56px;
    padding: 4px 10px;
    border-radius: 12px;
    transition: all 0.2s ease;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;

    &:active {
      transform: scale(0.92);
    }

    &--active {
      color: #b84b2a;

      .bottom-nav__icon {
        background: rgba(184, 75, 42, 0.12);
        border-radius: 20px;
        padding: 4px 16px;
        color: #b84b2a;
      }

      .bottom-nav__label {
        font-weight: 700;
        color: #b84b2a;
      }
    }
  }

  &__icon {
    font-size: 22px;
    transition: all 0.2s ease;
    margin-bottom: 2px;
  }

  &__label {
    font-family: var(--font-body);
    font-size: 0.625rem;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
}
</style>
