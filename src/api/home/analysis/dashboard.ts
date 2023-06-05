import hyRequest from "@/service/index"
import type {IDateType} from '../../types'

enum DashboardAPI  {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export const getCategoryGoodsCount = () => {
  return hyRequest.get<IDateType>({
    url:DashboardAPI.categoryGoodsCount
  })
}
export const getCategoryGoodsSale = () => {
  return hyRequest.get<IDateType>({
    url:DashboardAPI.categoryGoodsSale
  })
}
export const getCategoryGoodsFavor  = () => {
  return hyRequest.get<IDateType>({
    url:DashboardAPI.categoryGoodsFavor
  })
}
export const getAddressGoodsCount = () => {
  return hyRequest.get<IDateType>({
    url:DashboardAPI.addressGoodsSale
  })
}