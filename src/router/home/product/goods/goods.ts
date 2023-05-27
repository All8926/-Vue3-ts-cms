const goods = () => import('@/views/home/system/goods/goods.vue')

export default {
  path: '/main/system/goods',
  name:'goods',
  component: goods,
  children:[]
}