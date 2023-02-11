<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-200 m-auto mt-20 border-1 p-5 h-min-100">
    <div class="my-4 justify_center">
      <img src="https://whf-img.oss-cn-hangzhou.aliyuncs.com/img/h-theme.png" alt="create-whf" class="w-80" />
    </div>
    <p class="text-center text-green-400">
      vue3 | ts | vue-router | i18n | pinia | axios | vueuse | lodash-es | 自动导入功能
    </p>
    <nav class="justify_center">
      <RouterLink to="/" class="mx-4">Home</RouterLink>
      <span>|</span>
      <RouterLink to="/about" class="mx-4">About</RouterLink>
      <span>|</span>
      <RouterLink to="/login" class="mx-4">login</RouterLink>
    </nav>
    <RouterView />
    <p class="text-center text-blue-400">project created by create-whf</p>
  </div>
</template>

<style scoped></style>
