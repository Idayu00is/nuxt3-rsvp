import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css', '~/assets/css/global.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},  // ✅ Use the correct plugin
      autoprefixer: {}
    }
  },

  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
    }
  },

  modules: ['@nuxt/ui']
})