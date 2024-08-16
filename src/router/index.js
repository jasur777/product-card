import { createRouter, createWebHistory } from 'vue-router';
import mainPage from '@/pages/mainPage.vue';
import LoginPage from '@/pages/login.vue';
import cardsPage from '@/pages/cardsPage.vue';
import AddProductPage from '@/components/addProduct.vue';

const routes = [
  { 
    path: '/', 
    name: 'LoginPage', 
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        next({ name: 'MainPage' });
      } else {
        next();
      }
    }
  },
  { 
    path: '/main', 
    name: 'MainPage', 
    component: mainPage,
    meta: { requiresAuth: true }
  },
  { 
    path: '/cardsPage', 
    component: cardsPage, 
    meta: { requiresAuth: true }
  },
  { 
    path: '/AddProduct', 
    name: 'AddProductPage',  
    component: AddProductPage,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authToken = localStorage.getItem('authToken');
  
  if (to.matched.some(record => record.meta.requiresAuth) && !authToken) {
    next({ name: 'LoginPage' });
  } else {
    next();
  }
});

export default router;
