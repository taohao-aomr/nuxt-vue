import import { UnwrapRef from 'vue';

<template>
  <div>
    <p class="u-text-black">正在登录...</p>
  </div>
</template>
<script setup lang="ts">
import { watch } from 'vue'

const user = useSupabaseUser()

watch(
  user,
  () => {
    if (user.value) {
      return navigator('/')
    }
  },
  { immediate: true }
)
</script>
