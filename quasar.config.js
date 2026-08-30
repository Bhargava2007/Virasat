// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app'
import { config } from 'dotenv'
const parsedEnv = config().parsed || {}

export default defineConfig((/* ctx */) => {
  return {
    // app boot file (/src/boot)
    boot: ['leaflet'],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#css
    css: ['app.scss'],

    extras: ['roboto-font', 'material-icons', 'material-icons-outlined'],

    build: {
      vueRouterMode: 'history',
      env: {
        VITE_SUPABASE_URL: parsedEnv.VITE_SUPABASE_URL,
        VITE_SUPABASE_PUBLISHABLE_KEY: parsedEnv.VITE_SUPABASE_PUBLISHABLE_KEY
      }
    },

    devServer: {
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:11434',
          changeOrigin: true
        }
      }
    },

    framework: {
      config: {},
      plugins: ['Notify', 'Dialog']
    },

    animations: [],
    cordova: {},
    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: ''
      }
    },

    bex: {
      extraScripts: []
    }
  }
})
