const role = () => import('@/views/home/system/role/role.vue')

export default {
  path: '/main/system/role',
  name:'role',
  component: role,
  children:[]
}