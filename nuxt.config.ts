// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["@/assets/sass/main.scss"],
  build: {
    transpile: ["gsap"], // Ensure GSAP is transpiled correctly

  },
  vite: {
    define: {
      "window.global": {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  imports: {
    autoImport: true,
  },

})





