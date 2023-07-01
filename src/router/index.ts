import { createRouter, createWebHistory } from 'vue-router';
import ReactCheat from '../components/sections/ReactCheat.vue';
import VueCheat from '../components/sections/VueCheat.vue';
const routes = [
  { path: '/vue', component: VueCheat },
  { path: '/react', component: ReactCheat },
  { path: '/', redirect: '/vue' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
