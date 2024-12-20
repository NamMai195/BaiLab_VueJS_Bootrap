import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import home from '@/views/home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
     },
    {
      path: '/lab5bai1',
      name: 'bai1',
      component: () => import('../views/lab5/bai1.vue'),
    },
    {
      path: '/lab5bai2',
      name: 'bai2',
      component: () => import('../views/lab5/bai2.vue'),
    },
    {
      path: '/lab5bai3',
      name: 'bai3',
      component: () => import('../views/lab5/bai3.vue'),
    },
    {
      path: '/lab5bai4',
      name: 'bai4',
      component: () => import('../views/lab5//bai4/bai4.vue'),
    },
  ],
})

export default router
