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

    // console.log(menus);

    if(!token){
      return '/login'
    }
    // if(to.path === '/home'){

    //   const routes = mapMenuToRoutes(menus)
    //   routes.forEach(item => {
    //     router.addRoute("main",item)

    //   });
    // }
  }
   // console.log(to,from);
  //  if(!from.name){
  //   console.log(to,from);
  //   const menus = localCache.getCache('cms_userMenus')
  //   const routes = mapMenuToRoutes(menus)
  //   routes.forEach(item => {
  //     router.addRoute("main",item)
  //   });
  //   return to.path
  // }
})

export default router
