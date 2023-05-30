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
      const { totalCount, list } = pageResult.data

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
