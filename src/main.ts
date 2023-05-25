import './assets/css/main.css'
import 'normalize.css'
import { createApp } from "vue"
import App from "./App.vue"
// import store from '@/stores/index'

import router from "./router"
import { createPinia } from "pinia"
// import piniaPersist  from 'pinia-plugin-persist'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)
// app.use(store)
// console.log(import.meta.env.VITE_BASE_URL);




app.mount("#app")
