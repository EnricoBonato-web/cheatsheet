<template>
  <language-template :toggle="{ left: 'Option API', right: 'Composition API' }">
    <template #title>
      <h1>Vue</h1>
    </template>
    <template #toggle>
      <div name="left">Option API</div>
      <div name="right">Composition API</div>
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
      <h2>When Vue?</h2>
      <ol class="pl-2 pr-2 pb-4">
        <li>
          <strong>Vue 1.x:</strong> The initial version of Vue.js, released in February 2014. It
          introduced the core concepts and features of Vue, such as the virtual DOM, data binding,
          and component-based architecture.
        </li>
        <li>
          <strong>Vue 2.x:</strong> A major release that brought significant improvements and
          enhancements over Vue 1.x. Vue 2.x introduced better performance optimizations, a
          reactivity system based on ES5 getters/setters, server-side rendering (SSR) support, and
          improved tooling. Vue 2.x is widely used and still actively maintained.
        </li>
        <li>
          <strong>Vue 3.x:</strong> The latest major version of Vue.js, released in September 2020.
          Vue 3.x introduced several important changes and improvements. The most notable change is
          the rewrite of the reactivity system using a new mechanism called the Composition API,
          which provides more flexibility and scalability in managing component logic. Vue 3.x also
          introduced a new rendering engine called "Vue Next" (or "Vue 3's Renderer") and enhanced
          TypeScript support. The new version brings better performance, improved bundle size, and
          additional features compared to Vue 2.x.
        </li>
      </ol>
      <p>
        It's important to note that migrating from Vue 2.x to Vue 3.x may require some changes in
        your codebase due to the differences in the reactivity system and syntax. However, the Vue
        team provides a migration guide and tooling to assist with the migration process.
      </p>
      <p>
        Additionally, Vue.js follows semantic versioning, where major releases (e.g., 1.x, 2.x, 3.x)
        may introduce breaking changes, minor releases (e.g., 2.6, 3.1) introduce new features
        without breaking changes, and patch releases (e.g., 2.6.12, 3.1.4) include bug fixes and
        other patches without introducing new features.
      </p>
    </template>

    <template #code>
      <h2>Vue 3 Component Structure with Composition API</h2>
      <pre>
        <code>
         {{ code }}
        </code>
      </pre>
      <p>
        In this example, we have a component called <strong>MyComponent</strong> that displays a
        title and a button to increment a count. Here's a breakdown of the component's structure:
      </p>
      <ul>
        <li>
          The <code>&lt;template&gt;</code> section contains the HTML structure of the component,
          including placeholders (<code></code>) for dynamic data.
        </li>
        <li>
          The <code>&lt;script&gt;</code> section starts with an import statement to import the
          necessary functions from the Vue library (<code>reactive</code> and
          <code>computed</code>).
        </li>
        <li>
          Inside the <code>export default</code> statement, we define the component and its
          <code>name</code> property.
        </li>
        <li>
          The <code>setup()</code> function is where we define our component's data, methods,
          computed properties, and lifecycle hooks (if needed).
        </li>
        <li>
          In the <code>setup()</code> function, we create a reactive object <code>data</code> to
          hold our component's data (<code>title</code> and <code>count</code>).
        </li>
        <li>
          We define the <code>increment</code> method, which increments the
          <code>count</code> property when the button is clicked.
        </li>
        <li>
          We define a computed property <code>doubledCount</code>, which computes the value of
          <code>count</code> multiplied by 2.
        </li>
        <li>
          We return an object containing the properties that we want to make available in the
          component's template.
        </li>
        <li>
          The <code>&lt;style scoped&gt;</code> section allows you to define component-specific
          styles that only apply to this component.
        </li>
      </ul>
      <p>
        This structure demonstrates the basic organization of a Vue 3 component using the
        Composition API. However, depending on the complexity of your component, you can further
        modularize your code by extracting reusable logic into separate functions or using other
        Composition API functions like <code>watch</code>, <code>ref</code>, or
        <code>provide/inject</code>.
      </p>
    </template>

    <template #tips>
      <h1>React</h1>
    </template>
  </language-template>
</template>

<script setup lang="ts">
import { Slot } from 'vue';
import LanguageTemplate from '../template/LanguageTemplate.vue';

const code =
  "<template>\n \
  <div>\n \
    <h1>{{ title }}</h1>\n \
    <button @click='increment'>{{ count }}</button>\n \
  </div>\n \
</template>\n \
\n \
<script>\n \
import { reactive, computed } from 'vue';\n \
\n \
export default {\n \
  name: 'MyComponent',\n \
  setup() {\n \
    // Data\n \
    const data = reactive({\n \
      title: 'My Component',\n \
      count: 0,\n \
    });\n \
    \n \
    // Methods\n \
    const increment = () => {\n \
      data.count++;\n \
    };\n \
    \n \
    // Computed properties\n \
    const doubledCount = computed(() => data.count * 2);\n \
    \n \
    // Lifecycle hook\n \
    // (Note: in the Composition API, lifecycle hooks are replaced by the `onMounted`, `onUpdated`, and `onUnmounted` functions)\n \
    \n \
    // Return the data, methods, and computed properties\n \
    return {\n \
      title: data.title,\n \
      count: data.count,\n \
      doubledCount,\n \
      increment,\n \
    }; \n \
  }, \n \
}; \n \
/* Component-specific styles */\n \
</style>";
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
