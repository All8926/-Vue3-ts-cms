import { allRoutes } from "./../router/allRoutes"
import type { IBreadcrumb } from "@/base-ui/breadcrumb/types/index"
let firstMenu: any = null // 第一个菜单对象

// 获取菜单权限列表
export function mapMenuToRoutes(userMenus: any[]) {
  const routes: any[] = []

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        if (!firstMenu) {
          firstMenu = menu
        }
        const route = allRoutes.find((item) => item.path === menu.url)
        routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}

// 获取面包屑导航的数据
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: any = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}


export function pathMapToMenu(userMenus: any[], currentPath: string, breadcrumbs?: IBreadcrumb[]) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu: any = pathMapToMenu(menu.children ?? [], currentPath)

      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function mapMenusToPermissions(userMenus:any[]){
  const promissions:string[] = []
  const _recurseGetPermission = (menus:any[]) => {
    for (const item of menus) {
      if(item.type === 1 || item.type === 2){
        _recurseGetPermission(item.children ?? [])
      }else if(item.type === 3){
        promissions.push(item.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return promissions
}

// 获取菜单列表叶子节点的key
export function getMenuLeafkeys(menuList:any[]){
  const MenuLeafkeys:any[] = []
  const _recurseLeafkeys = (menus:any[]) => {
    for (const menu of menus) {
      if(menu.children){
        _recurseLeafkeys(menu.children)
      }else{
        MenuLeafkeys.push(menu.id)
      }
    }
  }
  _recurseLeafkeys(menuList)
  return MenuLeafkeys
}


export { firstMenu }
