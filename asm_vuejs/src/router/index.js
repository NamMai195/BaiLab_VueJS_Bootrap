import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    //Home
    {
      path: '/',
      name: 'home', 
      component: () => import('../views/index.vue'),
    },
    //Post
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/post/listpost.vue'),
    },
    //postdetail
    {
      path: '/postdetail',
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
      path: '/resgin',
      name: 'resgin',
      component: () => import('../views/account/res.vue'),
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/fogot',
      name: 'fogotpass',
      component: () => import('../views/account/forgotpass.vue'),
    },
    {
      path: '/videodetail',
      name: 'videodetail',
      component: () => import('../views/viewvideos/videodetail.vue'),
    },
    {
      path: '/video',
      name: 'listvideo',
      component: () => import('../views/viewvideos/listvideo.vue'),
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
