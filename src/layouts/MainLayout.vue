<template>
  <q-layout view="hHh lpr fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="bottom-nav fixed-bottom" style="z-index: 2000;">
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
    </div>
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
  { label: 'Complaints', icon: 'o_report_problem', iconActive: 'report_problem', route: '/complaints' },
  { label: 'Stories', icon: 'o_menu_book', iconActive: 'menu_book', route: '/stories' }
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
  /* Make the main footer wrapper transparent */
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding-bottom: env(safe-area-inset-bottom, 12px);
  max-width: 100vw;
  left: 0 !important;
  transform: none;
  pointer-events: none; /* Let clicks pass through the invisible parts */

  &__container {
    pointer-events: auto; /* Re-enable clicks for the dock */
    /* Chameleon Glass Dock Styling - adapts to ANY background color */
    background: rgba(0, 0, 0, 0.3); /* Neutral translucent */
    backdrop-filter: blur(24px) saturate(200%);
    -webkit-backdrop-filter: blur(24px) saturate(200%);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 360px;
    margin: 0 auto 16px; /* Floating margin */
    padding: 8px 12px;
    gap: 4px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  &__container:hover {
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  &__tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.55); /* Neutral white for inactive */
    min-width: 64px;
    padding: 6px 8px;
    border-radius: 20px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;

    &:active {
      transform: scale(0.92);
    }

    &--active {
      color: #ffffff; /* Bright white for active */
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

      .bottom-nav__icon {
        color: #ffffff;
        background: transparent;
        padding: 0;
        border-radius: 0;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
      }

      .bottom-nav__label {
        font-weight: 700;
        color: #ffffff;
        text-shadow: 0 1px 3px rgba(0,0,0,0.6);
      }
    }
  }

  &__icon {
    font-size: 22px;
    transition: all 0.2s ease;
    margin-bottom: 2px;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
  }

  &__label {
    font-family: var(--font-body);
    font-size: 0.625rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
  }
}
</style>
