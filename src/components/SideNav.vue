<template>
  <ul class="w-80 text-left p-2 side-nav flex flex-col m-auto pt-8">
    <li v-for="page in pages" :key="page" class="nav_links link">
      <RouterLink :to="page">
        <div class="pl-4">{{ page }}</div>
        <transition appear name="fade" mode="out-in">
          <ul class="hidden">
            <li v-for="link in prop.links" :key="link" class="ml-6 text-base">
              {{ link }}
            </li>
          </ul>
        </transition>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const prop = defineProps<{ links: string[] }>();
const pages: string[] = ['Vue', 'React', 'Ui', 'Design', 'Javascript'];
</script>

<style scoped>
.link {
  @apply m-2 rounded-md pt-4 pb-4 text-2xl;
}

.router-link-active ul {
  display: block;
}
.router-link-active div:first-of-type {
  border-left: 3px solid var(--nav-accent);
  display: block;
}
</style>
