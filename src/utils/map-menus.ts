import { allRoutes } from "./../router/allRoutes"
import type { IBreadcrumb } from "@/base-ui/breadcrumb/types/index"
let firstMenu: any = null // 第一个菜单对象

export function mapMenuToRoutes(menus: any[]) {
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
  _recurseGetRoute(menus)
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

export { firstMenu }
