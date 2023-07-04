<template>
  <language-template>
    <template #title>
      <h1>Vue</h1>
    </template>
    <template #description>
      <h2>What is Vue?</h2>
      <p>
        <strong>Vue.js</strong> is a progressive JavaScript framework for building user interfaces.
        It offers reactive data binding, a component-based architecture, virtual DOM, directives,
        routing with Vue Router, state management with Vuex, and a command-line interface (Vue CLI).
        Vue is known for its simplicity, performance, and active community.
      </p>
      <h2>Why use Vue?</h2>
      <ul class="grid grid-cols-4 gap-4 mb-4">
        <li class="whys">
          <strong>Easy Learning Curve:</strong> Vue.js has a gentle learning curve, making it
          accessible for developers of all levels.
        </li>
        <li class="whys">
          <strong>Flexible and Versatile:</strong> Vue.js is adaptable, fitting small to large
          projects and allowing incremental adoption.
        </li>
        <li class="whys">
          <strong>Reactive Data Binding:</strong> Vue.js's reactive data binding system keeps the UI
          in sync with the data effortlessly.
        </li>
        <li class="whys">
          <strong>Performance Optimization:</strong> Vue.js optimizes performance by efficiently
          updating the UI using a virtual DOM.
        </li>
        <li class="whys">
          <strong>Active Community:</strong> Vue.js boasts an active community, offering extensive
          resources and plugins.
        </li>
        <li class="whys">
          <strong>Official Tooling:</strong> Vue.js provides official tools like Vue Router and Vuex
          for routing and state management.
        </li>
        <li class="whys">
          <strong>Trusted by Big Companies:</strong> Vue.js is adopted by renowned companies,
          demonstrating its reliability.
        </li>
        <li class="whys">
          <strong>Incremental Integration:</strong> Vue.js can be integrated gradually into existing
          projects without the need for a complete overhaul.
        </li>
      </ul>
      <p>
        Vue.js strikes a balance between simplicity, performance, and flexibility, making it a
        popular choice for modern web application development.
      </p>
    </template>

    <template #code>
      <h1>React</h1>
    </template>

    <template #tips>
      <h1>React</h1>
    </template>
  </language-template>
</template>

<script setup lang="ts">
import LanguageTemplate from '../template/LanguageTemplate.vue';
</script>

<style>
.whys {
  @apply flex flex-col;
}
.vue {
  --vue-accent: #42b883;
  --vue-bg-1: #1a1a1a;
  --vue-text: rgba(255, 255, 255, 0.87);
  --vue-bg: #242424;

  --bg: var(--vue-bg);
  --nav-bg: var(--vue-bg-1);
  --nav-text: var(--vue-text);
  --nav-accent: var(--vue-accent);
  --nav-links: var(--vue-bg);
  --page-bg: var(--vue-bg);
  --page-text: var(--vue-text);
  --page-accent: var(--vue-accent);
}
</style>
