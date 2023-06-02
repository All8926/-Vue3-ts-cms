import { defineStore } from "pinia"
import { type ILoginState } from "./types"

import {
  requestAccountLogin,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/api/login/login"
import {getPageListData} from '@/api/home/system/system'
import localCache from "@/utils/localCache"
import {mapMenuToRoutes, mapMenusToPermissions} from "@/utils/map-menus"

import routers from "@/router/index"
const router = routers

export const useLoginStore = defineStore("login", {
  state: (): ILoginState => {
    return {
      token: "12345",
      userinfo: {},
      userMneus: [],
      promissions:[],
      departmentList:[],
      roleList:[]
    }
  },
  actions: {

    async accountLoginAction(userinfo: any) {
      // 登录逻辑
      const loginResult = await requestAccountLogin(userinfo)
      const { id, token } = loginResult.data
      this.token = token
      localCache.setCache("cms_token", token)

      // 获取用户信息
      const userinfoResult = await requestUserInfoById(id)
      this.userinfo = userinfoResult.data
      localCache.setCache("cms_userinfo", this.userinfo)

      // 获取用户菜单
      const userMenusResult = await requestUserMenusByRoleId(this.userinfo.role.id)
      console.log(userMenusResult.data);

      this.userMneus = userMenusResult.data
      localCache.setCache("cms_userMenus", this.userMneus)
      router.push("/main")
      this.addRoutes()
       // 获取权限数组
    const getPromissions = mapMenusToPermissions(this.userMneus)
    this.promissions = getPromissions
    this.getInitialData()
    },

    // 动态添加路由
    addRoutes(){

      const routes = mapMenuToRoutes(this.userMneus)
      routes.forEach(item => {
        router.addRoute("main",item)
      });
    },

  async  getInitialData(){
    // 请求部门和角色数据
      const departmentResult = await getPageListData('/department/list',{
        offset:0,
        size:100
      })
      const {list:departmentList} = departmentResult.data
      this.departmentList = departmentList

      const roleResult = await getPageListData('/role/list',{
        offset:0,
        size:100
      })
      const {list:roleList} = roleResult.data
      this.roleList = roleList

    }


  },
  getters: {},

  // 持久化存储
  persist: {
    key: "login",
    paths: ["token", "userinfo", "userMneus","promissions","roleList","departmentList"]
  }
})
