<template>
  <div class="m-8 grid grid-cols-12 gap-4 w-full">
    <div id="title" class="text-center m-auto text-4xl col-span-12">
      <slot name="title" class="text-center m-auto text-4xl" />
    </div>

    <div id="description" class="text-left col-span-10">
      <slot name="description"></slot>
    </div>

    <div id="code" class="col-span-12">
      <slot name="code"></slot>
    </div>

    <div id="tips" class="col-span-12">
      <slot name="tips"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
const emit = defineEmits<{ onLinkUpdate: [links: string[]] }>();
onMounted(() => {
  emit('onLinkUpdate', ['title', 'description', 'code', 'tips']);
});
</script>

<style scoped></style>
