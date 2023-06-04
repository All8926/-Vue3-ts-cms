import { defineStore } from "pinia"

import { type ISystemStote, pageUrls, type IPayload } from "./types"
import { getPageListData, deletePageData,patchPageData } from "@/api/home/system/system"

export const useSystemStore = defineStore("system", {
  state: (): ISystemStote => {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  actions: {
    // 获取数据
    async requestPageList(payload: IPayload) {

      const pageName: string = payload.pageName
      const pageUrl = pageUrls[pageName] + "list"
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      console.log(pageResult);

      if (!pageResult.data) return

      const { totalCount, list } = pageResult.data

      this[`${pageName}Count`] = totalCount
      this[`${pageName}List`] = list
    },

    // 删除数据
    async deletePageData(payload: any) {
      const pageName: string = payload.pageName

      const pageUrl = pageUrls[pageName] + payload.id
      const { code, data } = await deletePageData(pageUrl)
      this.feedback(code, data, payload)
    },
    // 新建数据
    async createPageData(payload: any) {

      const pageName: string = payload.pageName
      const pageUrl = pageUrls[pageName]
      const { code, data } = await getPageListData(pageUrl, payload.queryInfo)
       this.feedback(code, data, {pageName:payload.pageName})
    },
    // 编辑数据
    async editPageData(payload: any) {

      const pageName: string = payload.pageName
      const pageUrl = pageUrls[pageName] + payload.id
      const { code, data } = await patchPageData(pageUrl, payload.queryInfo)
       this.feedback(code, data, {pageName:payload.pageName})
    },

    feedback(code: number, data: string, payload: any) {
      if (!code) {
        ElMessage.success(data)
        this.requestPageList(payload)
      } else {
        ElMessage.error(data)
      }
    }
  },
  getters: {
    pageListData(state) {
      return (name: string) => {
        return state[name]
      }
    },
    pageListCount(state) {
      return (name: string) => {
        return state[name]
      }
    }
  }
})
