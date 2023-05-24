import HyRequest from "./request"
import localCache from '@/utils/localCache'

const hyRequest = new HyRequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('cms_token')
      if(token){
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (config) => {
      console.log("请求失败拦截")
      return config
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (config) => {
      console.log("响应失败拦截")
      return config
    }
  },

})
// console.log(hyRequest);

export default hyRequest
