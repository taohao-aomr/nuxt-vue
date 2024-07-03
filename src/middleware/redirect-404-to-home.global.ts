// filename: src/middleware/redirect-404-to-home.global.ts
export default defineNuxtRouteMiddleware((to, form) => {
    if (to.matched.length === 0) {
      // 404自动重定向到首页
      return navigateTo('/')
    }
  })