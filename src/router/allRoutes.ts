export const allRoutes = [
  {
    path: '/main/analysis/dashboard',
    name:'dashboard',
    component: () => import('@/views/home/analysis/dashboard/dashboard.vue'),
    children:[]
  },
  {
    path: '/main/analysis/overview',
    name:'overview',
    component: () => import('@/views/home/analysis/overview/overview.vue'),
    children:[]
  },
  {
    path: '/main/product/category',
    name:'category',
    component: () => import('@/views/home/product/category/category.vue'),
    children:[]
  },
  {
    path: '/main/product/goods',
    name:'goods',
    component: () => import('@/views/home/product/goods/goods.vue'),
    children:[]
  },
  {
    path: '/main/story/chat',
    name:'chat',
    component: () => import('@/views/home/story/chat/chat.vue'),
    children:[]
  },
  {
    path: '/main/story/list',
    name:'list',
    component: () => import('@/views/home/story/list/list.vue'),
    children:[]
  },
  {
    path: '/main/system/department',
    name:'department',
    component: () => import('@/views/home/system/department/department.vue'),
    children:[]
  },
  {
    path: '/main/system/menu',
    name:'menu',
    component: () => import('@/views/home/system/menu/menu.vue'),
    children:[]
  },
  {
    path: '/main/system/user',
    name:'user',
    component:  () => import('@/views/home/system/user/user.vue'),
    children:[]
  },
  {
    path: '/main/system/role',
    name:'role',
    component: () => import('@/views/home/system/role/role.vue'),
    children:[]
  }
]