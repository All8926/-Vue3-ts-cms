import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import localCache from '@/utils/localCache'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },

    {
      path: '/login',
      name: 'login',
      component:() => import('../views/login/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/Home.vue')
    }
  ]
})

router.beforeEach((to) => {
  if(to.path !== '/login'){
    const token = localCache.getCache('cms_token')
    if(!token){
      return '/login'

    }
  }
})

export default router
