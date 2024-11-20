import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Bai1 from '@/components/bai1.vue'
import Bai2 from '@/components/bai2.vue'
import Bai3 from '@/components/bai3.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bai1',
      component: Bai1,
    },
    {
      path: '/bai2',
      name: 'bai2',
      component: Bai2,
    },
    {
      path: '/bai3',
      name: 'bai3',
      component: Bai3,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    
    //   component: () => import(''),
    // },
  ],
})

export default router
