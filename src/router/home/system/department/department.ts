const department = () => import('@/views/home/system/department/department.vue')

export default {
  path: '/main/system/department',
  name:'department',
  component: department,
  children:[]
}