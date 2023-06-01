import hyRequest from "@/service/index"
import type {IDateType} from '../../types'
export const getPageListData = (url: string, queryInfo: any) => {
  return hyRequest.post<IDateType>({
    url: url,
    data: queryInfo
  })
}

export const deletePageData = (url:string) => {
  return hyRequest.delete<IDateType>({
    url:url
  })
}
