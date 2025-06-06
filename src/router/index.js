import VueRouter from 'vue-router';
import Vue from 'vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/layout/index.vue'),
      children: []
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
  ]
})

export default router;