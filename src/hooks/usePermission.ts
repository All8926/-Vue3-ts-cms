import { useLoginStore } from "@/stores/login/login"

export function usePermission(pageName: string, hanldName: string) {
  const name = pageName === 'user' ? 'users' : pageName

  const loginStore = useLoginStore()
  const permissions = loginStore.promissions

  return !!permissions.find((item: string) => {
    return item === `system:${name}:${hanldName}`
  })
}
