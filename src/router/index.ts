import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      redirect:'/login'
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

export default router
