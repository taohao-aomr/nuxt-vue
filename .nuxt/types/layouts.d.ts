import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "footer" | "header"
declare module "../../node_modules/.pnpm/nuxt@3.12.3_@opentelemetry+api@1.9.0_@types+node@20.14.9_eslint@9.6.0_sass@1.77.6_typescript@5.5.3_vite@5.3.3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}