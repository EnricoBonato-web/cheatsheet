<template>
  <div class="p-8 grid grid-cols-12 gap-4 w-full">
    <div id="title" class="page_accent text-center m-auto text-4xl col-span-12">
      <slot name="title" class="text-center m-auto text-4xl" />
    </div>
    <div id="toggle" class="text-left col-span-12">
      <div name="toggle" v-if="toggle.left + toggle.right != ''">
        <div name="left">{{ toggle.left }}</div>
        <switch-template :toggle="ongToggle" />
        <slot name="right">{{ toggle.right }}</slot>
      </div>
    </div>

    <div id="description" class="text-left col-span-12">
      <slot name="description"></slot>
    </div>

    <div id="code" class="col-span-12 text-left">
      <slot name="code"></slot>
    </div>

    <div id="tips" class="col-span-12">
      <slot name="tips"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SwitchTemplate from '../SwitchTemplate.vue';
const emit = defineEmits<{ onLinkUpdate: [links: string[]] }>();
onMounted(() => {
  emit('onLinkUpdate', ['title', 'description', 'code', 'tips']);
});
const toggle = ref(false);
const ongToggle = () => {
  toggle.value = !toggle.value;
};
const props = defineProps({
  toggle: { type: Object, default: () => ({ left: '', right: '' }) }
});
</script>

<style scoped></style>
