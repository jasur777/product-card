import { createRouter, createWebHistory } from 'vue-router';
// import cardlist from '@/components/cardlist.vue';
import mainPage from '@/pages/mainPage.vue';

const routes = [
  // { path: '/', component: Home },
  { path: '/mainPage', component: mainPage, alias: '/'},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
