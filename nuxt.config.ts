// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  // experimental: {
  //     payloadExtraction: false
  // },
  app: {
    baseURL: '/',
    // buildAssetsDir: 'nuxt',
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // https://nuxt.com/docs/api/nuxt-config#srcdir
  srcDir: 'src/',

  modules: [
    '@nuxt/image',
    'nuxt-icons',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    'nuxt-gtag',
    "@nuxtjs/tailwindcss"
  ],

  // 自定义配置
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false // https://supabase.nuxtjs.org/get-started#redirect
  },

  css: ['element-plus/theme-chalk/dark/css-vars.css', '~/assets/scss/main.scss'],
  colorMode: {
    classSuffix: ''
  },
  // colorMode: {
  //   preference: 'system', // default value of $colorMode.preference
  //   fallback: 'light', // fallback value if not system preference found
  //   hid: 'nuxt-color-mode-script',
  //   globalName: '__NUXT_COLOR_MODE__',
  //   componentName: 'ColorScheme',
  //   classPrefix: '',
  //   classSuffix: '-mode',
  //   storageKey: 'nuxt-color-mode'
  // },

  compatibilityDate: '2024-07-10',
})