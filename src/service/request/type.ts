import type {  AxiosRequestConfig, AxiosResponse } from "axios"


export interface HyRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig ) => AxiosRequestConfig  // 请求成功
  requestInterceptorCatch?: (error: any) => any   // 请求失败
  responseInterceptor?: (res: any) => any   // 响应成功
  responseInterceptorCatch?: (error: any) => any   // 响应失败
}

export interface HyRequestConfig extends AxiosRequestConfig   {
  interceptors?: HyRequestInterceptors,
  showLoading?:boolean
}