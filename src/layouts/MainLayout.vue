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

    <!-- Global AI Voice Guide FAB -->
    <div class="ai-orb-fab-container" v-if="!showVoiceGuide">
      <div 
        class="ai-orb-fab" 
        @click="showVoiceGuide = true"
        aria-label="Start AI Audio Guide"
      >
        <div class="orb-core">
          <q-icon name="record_voice_over" color="white" size="24px" />
        </div>
        <div class="orb-glow"></div>
        <q-tooltip class="bg-brown-9" :offset="[10, 10]">
          Start AI Assistant
        </q-tooltip>
      </div>
    </div>

    <VoiceTourGuide v-model="showVoiceGuide" />
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import VoiceTourGuide from '@/components/common/VoiceTourGuide.vue'

const route = useRoute()
const showVoiceGuide = ref(false)

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

/* Global AI FAB Styles */
.ai-orb-fab-container {
  position: fixed;
  bottom: 100px;
  right: 24px;
  z-index: 4000;
  
  @media (max-width: 600px) {
    bottom: 90px;
    right: 16px;
  }
}

.ai-orb-fab {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: scale(1.1) translateY(-4px);
    
    .orb-glow {
      opacity: 0.8;
      transform: scale(1.2);
    }
    
    .orb-core {
      box-shadow: 0 0 20px rgba(184, 75, 42, 0.6);
    }
  }

  &:active {
    transform: scale(0.95);
  }
}

.orb-core {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #d86b4a, #b84b2a);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(184, 75, 42, 0.4);
  transition: all 0.3s ease;
}

.orb-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(184, 75, 42, 0.4) 0%, rgba(184, 75, 42, 0) 70%);
  z-index: 1;
  opacity: 0.5;
  transition: all 0.3s ease;
  animation: pulse-glow 3s infinite alternate;
}

@keyframes pulse-glow {
  0% { transform: scale(0.9); opacity: 0.4; }
  100% { transform: scale(1.1); opacity: 0.7; }
}
</style>
