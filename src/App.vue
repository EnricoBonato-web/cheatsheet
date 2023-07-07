<template>
  <div :class="`background_color grid grid-cols-12 light ${activeTheme}`">
    <page-view />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import PageView from './components/PageView.vue';
import { useRoute } from 'vue-router';

const activeTheme = ref('light');

const route = useRoute();

watch(
  () => route.path,
  (newRouteName) => {
    console.log(newRouteName);
    activeTheme.value = newRouteName
      ? newRouteName.toString().substring(1).toLocaleLowerCase()
      : 'default-theme';
  }
);
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import './var.css';

h2 {
  color: var(--page-accent);
  @apply mt-4 mb-2 text-2xl;
}
h1 {
  color: var(--page-accent);
  @apply mt-4 mb-2 text-4xl;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
}
</style>
