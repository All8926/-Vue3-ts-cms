/// <reference types="vite/client" />


// 声明文件
declare module "*.jpg"
declare module "*.png"
declare module "*.gif"
declare module "element-plus";
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare const process

declare const ElMessage
declare const ElLoading
declare global {
  const ElMessage:typeof import('element-plus')['ElMessage']
  const ElLoading:typeof import('element-plus')['ElLoading']
}

// declare module 'pinia-plugin-persist'
declare module 'element-plus/dist/locale/zh-cn.mjs'


