import { createRouter, createWebHistory } from 'vue-router';
// import cardlist from '@/components/cardlist.vue';
import mainPage from '@/pages/mainPage.vue';
import LoginPage from '@/components/login.vue';
// import nav from '@/components/nav.vue';
import cardsPage from '@/pages/cardsPage.vue';
import AddProductPage  from '@/components/addProduct.vue';
import draganddrop from '@/pages/draganddrop.vue';

const routes = [
  // { path: '/', component: Home },
  { path: '/main', name: 'MainPage', component: mainPage, meta: { requiresAuth: true },},
  { path: '/', name: 'LoginPage', component: LoginPage },
  { path: '/cardsPage', component: cardsPage },
  { path: '/draganddrop', component: draganddrop },
  { path: '/AddProduct', name: 'AddProductPage ',  component: AddProductPage  }, 
];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('loggedIn');

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: 'LoginPage' });
  } else {
    next();
  }
});

export default router;
