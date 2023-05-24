import './assets/css/main.css'
import 'normalize.css'
import { createApp } from "vue"
import App from "./App.vue"
// import store from '@/stores/index'
import piniaPersist  from 'pinia-plugin-persist'
import router from "./router"
import { createPinia } from "pinia"
const pinia = createPinia();
pinia.use(piniaPersist)

const app = createApp(App)
app.use(pinia)
app.use(router)
// app.use(store)
// console.log(import.meta.env.VITE_BASE_URL);

// import hyRequest from './service/index'
// hyRequest.get({
//   url:'/get',
//   // method:'get',
//   interceptors: {
//     aloneRequestInterceptor: (config) => {
//       console.log("单独请求成功拦截")
//       return config
//     },
//     responseInterceptor: (config) => {
//       console.log("单独响应成功拦截")
//       return config
//     },
//   },
//   showLoading:false
// })


app.mount("#app")
