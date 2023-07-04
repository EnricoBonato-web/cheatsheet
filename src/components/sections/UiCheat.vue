<template>
  <grid-template>
    <template #title>
      <h1>Laws of UX</h1>
    </template>
    <template #elements>
      <div v-for="(value, key) in json" :key="key" class="nav_background p-4 rounded-md">
        <h3 class="text-center page_accent text-lg">{{ key }}</h3>
        <p class="text-center">
          {{ value }}
        </p>
      </div>
    </template>
  </grid-template>
</template>

<script setup lang="ts">
import GridTemplate from '../template/GridTemplate.vue';
import { ref } from 'vue';
let json = ref({});
import('../../assets/ui.json').then((module) => {
  json.value = module.default;
});
</script>

<style>
.ui {
  --ui-accent: #de6717;
  --ui-bg-1: #16171d;
  --ui-text: #f4f1d0;
  --ui-bg: #101014;

  --bg: var(--ui-bg);
  --nav-bg: var(--ui-bg-1);
  --nav-text: var(--ui-text);
  --nav-accent: var(--ui-accent);
  --nav-links: var(--ui-bg);
  --page-bg: var(--ui-bg);
  --page-text: var(--ui-text);
  --page-accent: var(--ui-accent);
}
</style>
