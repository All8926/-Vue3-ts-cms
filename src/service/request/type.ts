import type {  AxiosRequestConfig, AxiosResponse,InternalAxiosRequestConfig,AxiosRequestHeaders } from "axios"


export interface HyRequestInterceptors  {
  // requestInterceptor?: (config: AxiosRequestConfig ) => AxiosRequestConfig  // 请求成功
  requestInterceptor?: (config: InternalAxiosRequestConfig ) => InternalAxiosRequestConfig  // 请求成功
  aloneRequestInterceptor?: (config: AxiosRequestConfig ) => AxiosRequestConfig  // 请求成功
  requestInterceptorCatch?: (error: any) => any   // 请求失败
  // responseInterceptor?: (res: T) => T   // 响应成功
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse   // 响应成功
  responseInterceptorCatch?: (error: any) => any,   // 响应失败

}

// export interface HyRequestConfig<T = AxiosResponse,I = InternalAxiosRequestConfig> extends AxiosRequestConfig   {
//   interceptors?: HyRequestInterceptors<T,I>,
//   showLoading?:boolean,

// }
export interface HyRequestConfig extends AxiosRequestConfig   {
  interceptors?: HyRequestInterceptors,
  showLoading?:boolean,

}