import { defineStore } from "pinia"

import { type ISystemStote, pageUrls, type IPayload } from "./types"
import { getPageListData } from "@/api/home/system/system"

export const useSystemStore = defineStore("system", {
  state: (): ISystemStote => {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  actions: {
    async requestPageList(payload: IPayload) {

      const pageName: string = payload.pageName
      const pageUrl = pageUrls[pageName]
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      if(!pageResult.data) return
      
      const { totalCount, list } = pageResult.data
      console.log(pageResult);

      this[`${pageName}Count`] = totalCount
      this[`${pageName}List`] = list
    }
  },
  getters: {
    pageListData(state) {
      return (name: string) => {
        return state[name]
      }
    }
  }
})
