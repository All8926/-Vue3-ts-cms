import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import localCache from '@/utils/localCache'
import mapMenuToRoutes from "@/utils/map-menus"


// console.log(routes)


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      redirect:'/main'
    },

    {
      path: '/login',
      name: 'login',
      component:() => import('../views/login/Login.vue'),
      children:[{
        path: "main/system/menu",
        name: "menu",
        component: () => import("@/views/home/system/menu/menu.vue"),
        children: []
      }]
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/home/Home.vue'),
      children:[]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

// router.addRoute("main", {
//   path: "main/system/menu",
//   name: "menu",
//   component: () => import("@/views/home/system/menu/menu.vue"),
//   children: []
// })

router.beforeEach((to,from) => {
  if(to.path !== '/login'){
    const token = localCache.getCache('cms_token')
    if(!token){
      return '/login'
    }
  }
})

export default router
