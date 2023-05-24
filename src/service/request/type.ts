import type {  AxiosRequestConfig, AxiosResponse,InternalAxiosRequestConfig } from "axios"


export interface HyRequestInterceptors<T = AxiosResponse>  {
// export interface HyRequestInterceptors  {
  // requestInterceptor?: (config: AxiosRequestConfig ) => AxiosRequestConfig  // 请求成功
  requestInterceptor?: (config: InternalAxiosRequestConfig ) => InternalAxiosRequestConfig  // 请求成功
  aloneRequestInterceptor?: (config: AxiosRequestConfig ) => AxiosRequestConfig  // 请求成功
  requestInterceptorCatch?: (error: any) => any   // 请求失败
  // responseInterceptor?: (res: AxiosResponse) => AxiosResponse   // 响应成功
  responseInterceptor?: (res: T) => T   // 响应成功
  responseInterceptorCatch?: (error: any) => any,   // 响应失败

}

// export interface HyRequestConfig extends AxiosRequestConfig   {
//   interceptors?: HyRequestInterceptors
//   showLoading?:boolean,

// }
export interface HyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig   {
  interceptors?: HyRequestInterceptors<T>,
  showLoading?:boolean,

}