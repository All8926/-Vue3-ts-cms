import './assets/css/main.css'
import 'normalize.css'
import { createApp } from "vue"
import App from "./App.vue"
import store from '@/stores/index'
import router from "./router"
import { useAddRoutes} from '@/utils/useAddRoutes'
const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store)
useAddRoutes()
app.use(router)




app.mount("#app")
