<template>
  <div>
    <p>A pages</p>
    <p>当前语言： {{ currentLanguage }}</p>
    <p>name: {{ $t("person.name") }}</p>
    <p>hobby: {{ $t("person.hobby") }}</p>
    <p @click="toggleLanguage">点我切换语言</p>
  </div>
</template>
<script setup lang="ts">
import useLanguages from "@/hooks/useLanguage";
const { currentLanguage, toggleLanguage } = useLanguages();
</script>
