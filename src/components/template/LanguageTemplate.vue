<template>
  <div class="m-8 grid grid-cols-12 gap-4 w-full">
    <div class="text-center m-auto text-4xl col-span-12">
      <slot name="title" class="text-center m-auto text-4xl" />
    </div>

    <div class="text-left col-span-10">
      <slot name="description"></slot>
    </div>

    <div class="col-span-2">
      <slot name="index"></slot>
    </div>

    <div class="col-span-12">
      <slot name="code"></slot>
    </div>

    <div class="col-span-12">
      <slot name="tips"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
