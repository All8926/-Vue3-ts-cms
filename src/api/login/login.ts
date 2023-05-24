import hyRequest from '@/service/index'
import type { IAccount, ILoginResult, IDateType} from './types'


enum LoginAPI {
  AccountLogin ='/login',
LoginUserInfo = '/users/',
userMenus = '/role/'
}

export const requestAccountLogin = (account:IAccount) => {
  return hyRequest.post<IDateType<ILoginResult>>({
    url:LoginAPI.AccountLogin,
    data:account
  })
}

export const requestUserInfoById = (id:number) => {
  return hyRequest.get<IDateType>({
    url: LoginAPI.LoginUserInfo + id
  })
}
export const  requestUserMenusByRoleId = (id:number) => {
  return hyRequest.get<IDateType>({
    url:LoginAPI.userMenus + id + '/menu'
  })
}

