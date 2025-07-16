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
      firebaseApiKey: "AIzaSyD7i225X_RdB4qXthZCaE_n3FFTHeK4O-A",
      firebaseAuthDomain: "wedding-invite-61ca4.firebaseapp.com",
      firebaseProjectId: "wedding-invite-61ca4",
      firebaseStorageBucket: "wedding-invite-61ca4.firebasestorage.app",
      firebaseMessagingSenderId: "381165593011",
      firebaseAppId: "1:381165593011:web:bfd182d6152af4242c6bc6"
    }
  },

  modules: ['@nuxt/ui']
})