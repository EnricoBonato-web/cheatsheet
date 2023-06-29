<template>
  <div class="fixed h-screen w-2/12">
    <side-nav :links="'test'" />
  </div>
  <div class="grid absolute w-10/12 mt-8 -right-0 p-2">
    <react-cheat />
  </div>
</template>

<script setup lang="ts">
import SideNav from './SideNav.vue';
import ReactCheat from './sections/ReactCheat.vue';
</script>

<style scoped></style>
