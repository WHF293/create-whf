<template>
  <div class="w-100 m-auto">
    <p class="my-2 text-center text-blue-400">国际化能力</p>
    <p class="my-2 text-center">当前语言： {{ currentLanguage }}</p>
    <p class="my-2 text-center">name: {{ $t('person.name') }}</p>
    <p class="my-2 text-center">hobby: {{ $t('person.hobby') }}</p>
    <p class="my-2 text-center">
      <button class="border-1 p-2 bg-blue-300" @click="toggleLanguage">点我切换语言</button>
    </p>
  </div>
</template>
<script setup lang="ts">
import useLanguages from '@/hooks/useLanguage'
const { currentLanguage, toggleLanguage } = useLanguages()
</script>
