import router from '@/router/index'
import VueRouter from 'vue-router'

const loadMenusFn = () => {
  return new Promise((resolve, reject) => {
    // 清空之前动态添加的路由 start ------
    const routes = router.options.routes;
    router.matcher = new VueRouter({ routes }).matcher

    // 清空之前动态添加的路由 end ------

    // 添加新路由 start---------
    const token = localStorage.getItem('token');
    if (token === 'a') {
      router.addRoute('main', {
        path: '/a',
        component: () => import('@/views/demo/a.vue')
      })
    }
    if (token === 'b') {
      router.addRoute('main', {
        path: '/b',
        component: () => import('@/views/demo/b.vue')
      })
    }
    router.addRoute({
      path: '*',
      name: '404',
      component: () => import('@/views/system/404/index.vue')
    })
    // 添加新路由 end---------

    console.log('matcher getRoutes', router.getRoutes())
    resolve();
  })
}

export default loadMenusFn;