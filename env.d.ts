/// <reference types="vite/client" />
// 声明文件、
declare module "*.jpg"
declare module "*.png"
declare module "*.gif"
declare module "element-plus";
declare module "*.vue"

declare const process

declare const ElMessage
declare const ElLoading
declare global {
  const ElMessage:typeof import('element-plus')['ElMessage']
  const ElLoading:typeof import('element-plus')['ElLoading']
}