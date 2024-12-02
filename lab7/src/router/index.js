import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import bai1 from '@/views/bai1.vue'
import bai2 from '@/views/bai2.vue'
import bai3 from '@/views/bai3.vue'
import bai4 from '@/views/bai4.vue'
import loginComponent from '@/views/bai4/loginComponent.vue'
import commentComponent from '@/views/bai4/commentComponent.vue'
import test from '@/views/test.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/bai1',
      name: 'bai1',
      component: bai1,
    },
    {
      path: '/bai2',
      name: 'bai2',
      component: bai2,
    },
    {
      path: '/bai3',
      name: 'bai3',
      component: bai3,
    },
    {
      path: '/bai4',
      name: 'bai4',
      component: bai4,
    },
    {
      path: '/test',
      name: 'test',
      component: loginComponent,
    },
    {
      path: '/test22',
      name: 'test22',
      component: commentComponent,
    },
    {
      path: '/test3',
      name: 'test3',
      component: test,
    },
  ],
})

export default router
