// import { useLoginStore } from '@/stores/login/login';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {createPinia} from 'pinia'

const store = createPinia()
store.use(piniaPluginPersistedstate)
export default store