<template>
  <div>
    <page-view :theme="activeTheme" />
  </div>
</template>

<script setup lang="ts">
import PageView from './components/PageView.vue';
const activeTheme = 'light';
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import './var.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
}
</style>
