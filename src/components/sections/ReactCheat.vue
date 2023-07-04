<template>
  <language-template>
    <template #title>
      <h1>React</h1>
    </template>
    <template #description>
      <p>
        React is a popular JavaScript library for building user interfaces. It was developed by
        Facebook and released in 2013. React is widely used for creating interactive web
        applications, particularly single-page applications (SPAs) where the content is dynamically
        updated without requiring a full page reload.
      </p>
      <p>Key features of React include:</p>
      <ol>
        <li>
          <strong>Component-Based Architecture:</strong> React is based on a component-based
          architecture, where the UI is broken down into reusable components. Components encapsulate
          their own logic and state, making it easier to manage complex UIs.
        </li>
        <li>
          <strong>Virtual DOM:</strong> React uses a virtual DOM (Document Object Model) to
          efficiently update the user interface. When there are changes in the underlying data,
          React calculates the minimum number of updates required and applies them to the virtual
          DOM. Then, it efficiently updates the actual DOM, minimizing the performance overhead.
        </li>
        <li>
          <strong>JSX:</strong> React uses JSX (JavaScript XML), an extension to JavaScript that
          allows you to write HTML-like syntax within JavaScript code. This helps in creating and
          composing components in a more declarative and intuitive manner.
        </li>
        <li>
          <strong>Unidirectional Data Flow:</strong> React follows a unidirectional data flow
          pattern, where data flows in a single direction. This makes it easier to understand and
          debug how data changes propagate through the application.
        </li>
        <li>
          <strong>React Hooks:</strong> Introduced in React 16.8, hooks are functions that allow you
          to use state and other React features in functional components, which were traditionally
          stateless. Hooks provide a simpler way to manage state and lifecycle events without the
          need for class components.
        </li>
        <li>
          <strong>React Ecosystem:</strong> React has a vibrant ecosystem with a wide range of
          third-party libraries and tools. These include React Router for managing application
          routing, Redux for state management, and Material-UI for pre-built UI components, among
          many others.
        </li>
      </ol>
      <p>
        React has gained significant popularity due to its simplicity, performance optimizations,
        and community support. It is widely used by developers and companies to build complex and
        responsive web applications. React Native, a framework based on React, also enables the
        development of mobile applications for iOS and Android using React's component model.
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
.react {
  --react-accent: #007ea4;
  --react-bg-1: rgba(120, 131, 155, 0.2);
  --react-text: rgb(246 247 249);
  --react-bg: rgb(35 39 47);

  --bg: var(--react-bg);
  --nav-bg: var(--react-bg-1);
  --nav-text: var(--react-text);
  --nav-accent: var(--react-accent);
  --nav-links: var(--react-bg);
  --page-bg: var(--react-bg);
  --page-text: var(--react-text);
  --page-accent: var(--react-accent);
}
</style>
