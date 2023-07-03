<template>
  <div class="m-8 grid grid-cols-12 gap-4 w-full">
    <div id="title" class="text-center m-auto text-4xl col-span-12">
      <slot name="title" class="text-center m-auto text-4xl" />
    </div>

    <div id="elements" class="text-left col-span-10">
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
