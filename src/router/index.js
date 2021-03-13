import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Account from '@/views/Account.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Account',
    name: 'Account',
    component: Account,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
