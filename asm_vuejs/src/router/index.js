import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/post/listpost.vue'),
    },
    {
      path: '/post/:id', 
      name: 'postdetail',
      component: () => import('../views/post/postdetail.vue'),
    },
    {
      path: '/crudpost',
      name: 'crudpost',
      component: () => import('../views/post/crudpost.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/account/login.vue'),
    },
    {
      path: '/register', 
      name: 'register', 
      component: () => import('../views/account/res.vue'), 
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/index.vue'), 
    },
    {
      path: '/forgot', 
      name: 'forgotpass',
      component: () => import('../views/account/forgotpass.vue'),
    },
    {
      path: '/video/:id', 
      name: 'videodetail',
      component: () => import('../views/viewvideos/videodetail.vue'),
    },
    {
      path: '/video',
      name: 'listvideo',
      component: () => import('../views/viewvideos/listvideo.vue'),
    },
    {
      path: '/crudvideo',
      name: 'crudvideo',
      component: () => import('../views/viewvideos/crudpost.vue'),
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/info/info.vue'),
    },
    {
      path: '/chuaco',
      name: 'chuaco',
      component: () => import('../views/common/chuaco.vue'),
    },
  ],
})

export default router