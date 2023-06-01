import { defineStore } from "pinia"

import { type ISystemStote, pageUrls, type IPayload } from "./types"
import { getPageListData,deletePageData } from "@/api/home/system/system"

export const useSystemStore = defineStore("system", {
  state: (): ISystemStote => {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList:[],
      goodsCount:0,
      menuList:[],
      menuCount:0
    }
  },
  actions: {
    // 获取数据
    async requestPageList(payload: IPayload) {

      const pageName: string = payload.pageName
      const pageUrl = pageUrls[pageName] + 'list'
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      if(!pageResult.data) return

      const { totalCount, list } = pageResult.data

      this[`${pageName}Count`] = totalCount
      this[`${pageName}List`] = list
    },

    // 删除数据
   async deletePageData(payload: any){
      const pageName: string = payload.pageName

      const pageUrl = pageUrls[pageName] + payload.id
       const {code} = await deletePageData(pageUrl)
        if(!code){
          ElMessage.success('删除成功')
          this.requestPageList(payload)
        }else{
          ElMessage.error('此项不允许删除')
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
