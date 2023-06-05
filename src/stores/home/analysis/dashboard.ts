import {defineStore} from 'pinia'
import type {IDashboardState} from './types'
import {getCategoryGoodsCount, getCategoryGoodsFavor,getCategoryGoodsSale,getAddressGoodsCount} from '@/api/home/analysis/dashboard'

export const useDashboardStore = defineStore('deshboard',{
  state:():IDashboardState => {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  actions:{
   async getDashboardData(){
      const countResult = await getCategoryGoodsCount()
      this.categoryGoodsCount = countResult.data

      const saleResult = await getCategoryGoodsSale()
      this.categoryGoodsSale = saleResult.data

      const favorResult = await getCategoryGoodsFavor()
      this.categoryGoodsFavor = favorResult.data

      const addressResult = await getAddressGoodsCount()
      this.addressGoodsSale = addressResult.data
    }
  }
})