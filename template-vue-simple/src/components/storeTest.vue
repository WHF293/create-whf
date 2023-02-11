<template>
  <div class="w-100 m-auto">
    <p class="text-center my-2">数据管理</p>
    <div class="justify_center my-2">
      <button class="border-1 p-2 bg-blue-300" @click="change(1)">+ 1</button>
      <span class="mx-3">{{ store.count }}</span>
      <button class="border-1 p-2 bg-blue-300" @click="change(-1)">- 1</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const change = (step: number) => {
  store.changCount(step)
}
</script>
