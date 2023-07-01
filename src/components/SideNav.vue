<template>
  <ul class="w-80 side-nav flex flex-col m-auto pt-8">
    <li class="m-2 bg-red-300 rounded-md">
      <RouterLink to="Vue"><div>Vue</div></RouterLink>
    </li>
    <li class="m-2 bg-red-300 rounded-md">
      <RouterLink to="React"><div>React</div></RouterLink>
    </li>
    <li class="m-2 bg-red-300 rounded-md">
      <RouterLink to="Vue"
        >Vue
        <div class="hidden">test</div></RouterLink
      >
    </li>
    <li class="m-2 bg-red-300 rounded-md">
      <RouterLink to="Vue"><div>Vue</div></RouterLink>
    </li>
    <li class="m-2 bg-red-300 rounded-md">
      <RouterLink to="Vue"><div>Vue</div></RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link-active {
  background-color: var(--bg) !important;
}
.router-link-active div {
  display: block;
}
</style>
