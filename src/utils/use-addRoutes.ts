import {useLoginStore} from '@/stores/login/login'
export const useAddRoutes = () => {
  const loginStore = useLoginStore()
  loginStore.addRoutes()
}
