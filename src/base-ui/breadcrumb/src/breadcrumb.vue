<template>

  <div class='breadcrumb'>
    <el-breadcrumb separator=">">
      <template v-for="item in props.breadcrumbs" :key="item.name">
        <el-breadcrumb-item >{{item.name}}</el-breadcrumb-item>
      </template>

  </el-breadcrumb>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive, type PropType} from 'vue'
import type {IBreadcrumb} from '../types/index'
const props = defineProps({
  breadcrumbs:{
    type:Array as PropType<IBreadcrumb[]>,
    default:() => ([])
  }
})
</script>

<style scoped>

</style>
