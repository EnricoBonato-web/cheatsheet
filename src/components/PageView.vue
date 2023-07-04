<template>
  <div class="nav_background nav_text flex h-screen col-span-2 sticky top-0">
    <side-nav :links="linksArray" />
  </div>
  <div class="page_background page_text grid mt-8 -right-0 p-2 col-span-10 h-max">
    <router-view @onLinkUpdate="update" v-slot="{ Component, route }">
      <transition appear name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import SideNav from './SideNav.vue';
import { ref } from 'vue';

const linksArray = ref(['']);

const update = (newLinks: string[]) => {
  linksArray.value = newLinks;
};
</script>

<style scoped></style>
