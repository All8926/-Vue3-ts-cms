import './assets/css/main.css'
import 'normalize.css'
import { createApp } from "vue"


import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import hyRequest from './service/index'
const app = createApp(App)
app.use(createPinia())
app.use(router)
// console.log(import.meta.env.VITE_BASE_URL);

// diao
hyRequest.HyRequest({
  url:'/get',
  method:'get',
  interceptors: {
    aloneRequestInterceptor: (config) => {
      console.log("单独请求成功拦截")
      return config
    },
    responseInterceptor: (config) => {
      console.log("单独响应成功拦截")
      return config
    },
  },
  showLoading:false
})
app.mount("#app")
