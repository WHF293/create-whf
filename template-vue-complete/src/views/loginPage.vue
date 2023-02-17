<template>
  <div>
    <p class="text-center">我是登录页</p>
    <p class="text-center">当前主题 {{ theme }}</p>
    <p class="text-center">测试主题切换</p>
    <div class="text-center">
      <button class="border-1 p-2 bg-blue-300" @click="changeTheme('default')">
        默认主题
      </button>
      <button class="border-1 p-2 bg-blue-300" @click="changeTheme('blue')">
        蓝色主题
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import useTheme from '@/hooks/useTheme'
import type { ThemeType } from '@/theme/types'

const { theme, setTheme } = useTheme()
const changeTheme = (type: ThemeType) => setTheme(type)

</script>
<style scoped></style>
