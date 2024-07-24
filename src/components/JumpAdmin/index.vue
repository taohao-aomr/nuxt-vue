
<template>
  <client-only>
    <template v-if="user">
      <el-tooltip content="进入管理后台" placement="bottom">
        <NuxtLink to="/admin">
          <el-button circle text>
            <Icon name="ri:apps-fill" class="h-5 w-5" />
          </el-button>
        </NuxtLink>
      </el-tooltip>
    </template>
  </client-only>
</template>
<script setup lang="ts">
const user = useSupabaseUser()
</script>
