import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function changCount(step: number = 1) {
      count.value += step
    }

    return { count, doubleCount, changCount }
  },
  {
    // 开启状态持久化
    persist: true,
  },
)
