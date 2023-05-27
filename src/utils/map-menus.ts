import { allRoutes } from './../router/allRoutes';
export default function mapMenuToRoutes(menus:any[]){
  console.log(allRoutes);
  const routes:any[] = []

const _recurseGetRoute = (menus:any[]) => {
  for (const menu of menus) {
    if(menu.type === 2){
     const route = allRoutes.find(item => item.path === menu.url)
     routes.push(route)
    }else{
      _recurseGetRoute(menu.children)
    }
  }

}
_recurseGetRoute(menus)
return routes
}