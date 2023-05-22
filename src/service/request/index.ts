import axios from "axios"
import type { AxiosInstance } from "axios"
import type { HyRequestInterceptors, HyRequestConfig } from "./type"

const DEFALUT_LOADING = true // 网络请求时开启loding加载效果的默认值
class HyRequest {
  instance: AxiosInstance // axios实例
  interceptors?: HyRequestInterceptors // axios实例的拦截对象，
  loading: any
  showLoading: boolean
  constructor(config: HyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFALUT_LOADING
    console.log(config.showLoading);

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有axios实例都有拦截器
    this.instance.interceptors.request.use(
      (config:HyRequestConfig) => {
        console.log(config);
        this.showLoading = (config.showLoading as boolean) ?? DEFALUT_LOADING
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
        console.log('在所有请求拦截中：请求失败拦截');
        return  error
      }
    )
    this.instance.interceptors.response.use(

      (res) => {
        this.showLoading = DEFALUT_LOADING
        this.loading.close()
        console.log("所有实例响应成功的拦截")
        return res
      },
      (error) => {
        console.log('在所有响应拦截中：响应失败拦截');
        return  error
      }
    )
  }

  request<T>(config: HyRequestConfig): Promise<T> {
    return new Promise((resolve,reject) => {
          // 单独设置请求拦截
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request<any,T>(config).then((res) => {
        // 单独设置响应拦截
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
        console.log(res)
      })
      .catch((err) => {
        this.showLoading = DEFALUT_LOADING
        reject(err)
        return err
      })
    })
  }
  get<T>(config:HyRequestConfig): Promise<T>{
    return this.request<T>({...config, method:'get'})
  }
  post<T>(config:HyRequestConfig): Promise<T>{
    return this.request<T>({...config, method:'post'})
  }
  delete<T>(config:HyRequestConfig): Promise<T>{
    return this.request<T>({...config, method:'delete'})
  }
  patch<T>(config:HyRequestConfig): Promise<T>{
    return this.request<T>({...config, method:'patch'})
  }
}

export default HyRequest
