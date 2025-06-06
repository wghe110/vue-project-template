import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/layout/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/system/login/index.vue')
    },
    {
      path: '/third-login',
      name: 'third-login',
      component: () => import('@/views/system/third-login/index.vue')
    },
    {
      path: '/*',
      name: '404',
      component: () => import('@/views/system/404/index.vue')
    }
  ]
})

export default router;