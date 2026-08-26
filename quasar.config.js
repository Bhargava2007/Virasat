// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app'

export default defineConfig((/* ctx */) => {
  return {
    // app boot file (/src/boot)
    boot: ['leaflet'],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#css
    css: ['app.scss'],

    extras: [
      'roboto-font',
      'material-icons',
      'material-icons-outlined'
    ],

    build: {
      vueRouterMode: 'hash'
    },

    devServer: {
      open: true
    },

    framework: {
      config: {},
      plugins: []
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
