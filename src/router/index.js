import { createRouter, createWebHashHistory } from 'vue-router'
import langLib from '@/lib/langLib'
import store from '@/store'

const lang = langLib.getLang()

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/Index'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
//路由守卫
router.beforeEach((to, from, next) => {
    //启动加载
    store.commit('showLoading')
    document.title = lang.appName
    if (!store.state.user.token && to.path !== '/login') {
      next('/login')
    }
    //延迟关闭
    setTimeout(() => {
      store.commit('hideLoading')
    }, 100)
    //走下去
    next()
  }
)
export default router
