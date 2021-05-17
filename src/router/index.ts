import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Zero from '@/components/pages/Zero.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/zero',
    name: 'Zero',
    component: Zero
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
