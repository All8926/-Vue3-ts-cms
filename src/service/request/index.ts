import axios from "axios"
import type { AxiosInstance } from "axios"
import type { HyRequestInterceptors, HyRequestConfig } from "./type"
// import type {  InternalAxiosRequestConfig } from "axios"
const DEFALUT_LOADING = true // 网络请求时开启loding加载效果的默认值

class HyRequest {
  instance: AxiosInstance // axios实例
  interceptors?: HyRequestInterceptors // axios实例的拦截对象，
  options: HyRequestConfig
  loading: any
  showLoading: boolean
  constructor(config: HyRequestConfig) {
    this.instance = axios.create(config)
    this.options = config
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFALUT_LOADING

    // 单个axios实例的请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 单个axios实例的响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    console.log(config)
    // 所有axios实例都有的请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log(config)

        console.log(this.options)
        this.options = config
        this.showLoading = (this.options.showLoading as boolean) ?? DEFALUT_LOADING
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据中...",
            background: "rgba(0, 0, 0, 0.5)"
          })
        }

        console.log("所有实例请求成功的拦截")
        return config
      },
      (error) => {
        console.log("在所有请求拦截中：请求失败拦截")
        return error
      }
    )
    // 所有axios实例都有的响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        this.showLoading = DEFALUT_LOADING
        this.loading.close()
        console.log("所有实例响应成功的拦截")
        return res
      },
      (error) => {
        console.log("在所有响应拦截中：响应失败拦截")
        return error
      }
    )
  }

  HyRequest(config: HyRequestConfig) {
    // 单独请求的拦截
    if (config.interceptors?.aloneRequestInterceptor) {
      config = config.interceptors.aloneRequestInterceptor(config)
    }
    this.instance
      .request(config)
      .then((res) => {
        // 单独q响应拦截
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        console.log(res)
      })
      .catch((err) => {
        this.showLoading = DEFALUT_LOADING

        return err
      })
  }
  // HyRequest<T>(config: HyRequestConfig<T>): Promise<T> {
  //   return new Promise((resolve, reject) => {
  //     // 单独请求的拦截
  //     if (config.interceptors?.requestInterceptor) {
  //       config = config.interceptors.requestInterceptor( config)
  //     }

  //     this.instance
  //       .request<any, T>(config)
  //       .then((res) => {
  //         // 单独q响应拦截
  //         if (config.interceptors?.responseInterceptor) {
  //           res = config.interceptors.responseInterceptor(res)
  //         }
  //         resolve(res)
  //         console.log(res)
  //       })
  //       .catch((err) => {
  //         this.showLoading = DEFALUT_LOADING
  //         reject(err)
  //         return err
  //       })
  //   })
  // }
  // get<T>(config: HyRequestConfig<T>): Promise<T> {
  //   return this.HyRequest<T>({ ...config, method: "get" })
  // }
  // post<T>(config: HyRequestConfig<T>): Promise<T> {
  //   return this.HyRequest<T>({ ...config, method: "post" })
  // }
  // delete<T>(config: HyRequestConfig<T>): Promise<T> {
  //   return this.HyRequest<T>({ ...config, method: "delete" })
  // }
  // patch<T>(config: HyRequestConfig<T>): Promise<T> {
  //   return this.HyRequest<T>({ ...config, method: "patch" })
  // }
}

export default HyRequest
