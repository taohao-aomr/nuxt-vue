
<script setup lang="ts">
import type { Social } from '~/types'

defineProps<Social>()
</script>

<template>
  <el-tooltip :content="tip">
    <el-button
      circle
      text
      :href="url"
      target="_blank"
      tag="a"
    >
      <Icon
        :name="icon"
        class="h-5 w-5"
      />
    </el-button>
  </el-tooltip>
</template>
