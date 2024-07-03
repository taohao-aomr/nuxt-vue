<template>
    <div>
      <h1>欢迎来到易师傅的第一个页面</h1>
      <NuxtLayout name="header"/>
      <NuxtLink to="/list">进入列表页</NuxtLink>
      <div>{{ foo }}</div>
      <h3>{{ result.hello }}</h3>
    </div>
  </template>
<script setup lang="ts">
   import { getUser } from '../server/api/user'
   const result = await getUser();
  const foo = useFoo()
</script>
