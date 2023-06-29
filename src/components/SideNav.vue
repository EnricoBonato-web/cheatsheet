<template>
  <ul class="side-nav flex flex-col m-auto pt-8 h-screen">
    <li v-for="link in props.links" :key="link" class="m-2 bg-red-300 rounded-md">
      <div>test</div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  links: Array(String)
});
</script>

<style scoped></style>
