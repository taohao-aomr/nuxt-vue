<template>
    <div class="abc">
      <strong>
        姓名：{{ userInfo.userName }}
        性别：{{ userInfo.sex }}
      </strong>
      <!-- <h1> 测试 vueUse 的鼠标坐标 </h1> -->
      <!-- <h3>Mouse: {{x}} x {{y}}</h3> -->
    </div>
  </template>

  <script setup lang="ts">
  import { useUserStore } from '../../stores/useUserStore'
  const userInfo = useUserStore().userInfo
  </script>

  <style lang="scss" scoped>
  .abc {
    background-color: $bgColor;
    color: $theme;
  }
  </style>