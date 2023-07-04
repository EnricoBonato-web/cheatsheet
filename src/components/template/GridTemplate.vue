<template>
  <div class="mt-4 p-4 grid grid-cols-12 gap-4 w-full max-w-6xl m-auto">
    <div id="title" class="text-center m-0 text-4xl col-span-12">
      <slot name="title" class="text-center m-auto text-4xl" />
    </div>

    <div id="elements" class="text-left col-span-12 grid grid-cols-3 gap-4">
      <slot name="elements"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
const emit = defineEmits<{ onLinkUpdate: [links: string[]] }>();
onMounted(() => {
  emit('onLinkUpdate', ['title', 'elements']);
});
</script>

<style scoped></style>
