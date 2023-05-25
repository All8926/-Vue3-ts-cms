import { defineStore } from "pinia"
import { type ILoginState } from "./types"

import {
  requestAccountLogin,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/api/login/login"
import localCache from "@/utils/localCache"

import routers from "@/router/index"
const router = routers

export const useLoginStore = defineStore("login", {
  state: (): ILoginState => {
    return {
      token: "12345",
      userinfo: {},
      userMneus: []
    }
  },
  actions: {
    add() {
      // this.count++
    },
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
      this.userMneus = userMenusResult.data
      localCache.setCache("cms_userMenus", this.userMneus)
      console.log(this.userMneus)
      router.push("/home")
    }
  },
  getters: {},

  // 持久化存储
  persist: {
    key: 'login',
    paths: ['token','userinfo','userMneus'],
  }
})



