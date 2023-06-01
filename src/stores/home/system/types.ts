export interface ISystemStote {
  userList: any[]
  userCount: number
  roleList: any[]
  roleCount: number
  goodsList:any[]
  goodsCount:number
  menuList:any[],
  menuCount:number
  [key: string]: any
}

interface StringDict {
  [key: string]: string
}

export const pageUrls: StringDict = {
  user: "/users/",
  role: "/role/",
  goods:"/goods/",
  menu:'/menu/'
}

export interface IPayload {
  pageName: string
  queryInfo?: any
}
