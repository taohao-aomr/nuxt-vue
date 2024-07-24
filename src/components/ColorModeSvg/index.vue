
<script setup lang="ts">
const colorMode = useColorMode()

type Props = {
  name: string // svg 路径
  lightFill?: string // 亮色模式填充
  darkFill?: string // 暗色模式填充
  className?: string // 图片样式
}

defineProps<Props>()

// 判断是否暗色模式
const isDark = colorMode.preference === 'dark'
</script>

<template>
  <nuxt-icon :name="name" :fill="isDark ? darkFill : lightFill" :class="className" />
</template>

<style>
.nuxt-icon svg {
  margin-bottom: 0 !important;
  width: auto !important;
  height: auto !important;
}
</style>
