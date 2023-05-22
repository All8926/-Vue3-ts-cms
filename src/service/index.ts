import HyRequest from "./request"

const hyRequest = new HyRequest({
  baseURL: "http://httpbin.org/",
  timeout: 5000,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("请求成功拦截")
      return config
    },
    requestInterceptorCatch: (config) => {
      console.log("请求失败拦截")
      return config
    },
    responseInterceptor: (res) => {
      console.log("响应成功拦截")
      return res
    },
    responseInterceptorCatch: (config) => {
      console.log("响应失败拦截")
      return config
    }
  }
})
// console.log(hyRequest);

export default hyRequest
