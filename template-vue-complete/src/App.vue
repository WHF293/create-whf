<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-200 m-auto mt-20 border-1 p-5 h-min-100 my-bg">
    <div class="my-4 justify_center">
      <img
        src="https://whf-img.oss-cn-hangzhou.aliyuncs.com/img/h-theme.png"
        alt="create-whf"
        class="w-80" />
    </div>
    <p class="text-center active-text">
      vue3 | ts | vue-router | i18n | pinia | axios | vueuse | lodash-es |
      自动导入功能
    </p>
    <nav class="justify_center">
      <RouterLink to="/" class="mx-4 active-text">数据持久化</RouterLink>
      <span>|</span>
      <RouterLink to="/about" class="mx-4 active-text">国际化</RouterLink>
      <span>|</span>
      <RouterLink to="/login" class="mx-4 active-text">主题切换</RouterLink>
    </nav>
    <RouterView />
    <p class="text-center active-text">project created by create-whf</p>
  </div>
</template>

<style scoped></style>
