// frontend/nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      storageBase: process.env.NUXT_PUBLIC_STORAGE_BASE
    }
  }
  
})
