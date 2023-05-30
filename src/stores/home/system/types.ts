export interface ISystemStote {
  userList: any[]
  userCount: number
  roleList: any[]
  roleCount: number
  [key: string]: any
}

interface StringDict {
  [key: string]: string
}

export const pageUrls: StringDict = {
  user: "/users/list",
  role: "/role/list"
}

export interface IPayload {
  pageName: string
  queryInfo?: any
}
