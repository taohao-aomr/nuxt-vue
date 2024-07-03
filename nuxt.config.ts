// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-vue/'
  },
  // https://nuxt.com/docs/api/nuxt-config#srcdir
  srcDir: 'src/',

  modules: [
    // ...
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@import "@/assets/styles/default.scss";'
              }
          }
      }
  },

  compatibilityDate: '2024-07-03'
})