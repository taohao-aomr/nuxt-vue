// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  // experimental: {
  //     payloadExtraction: false
  // },
  app: {
    baseURL: '/nuxt-vue/',
    // buildAssetsDir: 'nuxt',
    head: {
      title: "学习 Nuxt",
      charset: "UTF-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,user-scalable=no",
      meta: [
        {
          name: "keywords",
          content: "Nuxt 官网",
        }
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "favicon.ico",
        },
      ],
      script: [
        {
          src: "https://nuxt.com",
        }
      ]
    }
  },

  // https://nuxt.com/docs/api/nuxt-config#srcdir
  srcDir: 'src/',

  modules: [
    // ...
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/supabase'
  ],

  // 自定义配置
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false // https://supabase.nuxtjs.org/get-started#redirect
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'
        }
      }
    }
  },

  compatibilityDate: '2024-07-10',
})