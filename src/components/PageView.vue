<template>
  <div class="flex background_color h-screen col-span-2 sticky">
    <side-nav :links="'test'" />
  </div>
  <div class="grid mt-8 -right-0 p-2 col-span-10 h-max">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import SideNav from './SideNav.vue';
</script>

<style scoped></style>
