<template>
  <div class='dashboard' ref="dashboardRef" >
    <el-row >
      <el-col :span="7">
        <BaseCard title="分类商品数量(饼图)"></BaseCard>
      </el-col>
      <el-col :span="10">
        <BaseCard title="不同城市商品销量"></BaseCard>
      </el-col>
      <el-col :span="7">
        <BaseCard title="分类商品数量(玫瑰图)"></BaseCard>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="12">
        <BaseCard title="分类商品的销量"></BaseCard>
      </el-col>
      <el-col :span="12">
        <BaseCard title="分类商品的收藏"></BaseCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import {useDashboardStore} from '@/stores/home/analysis/dashboard'
import BaseCard from '@/base-ui/card/index'
const dashboardStore = useDashboardStore()
dashboardStore.getDashboardData()

const dashboardRef = ref<HTMLElement>()



</script>

<style scoped>
.el-row{
  background-color: #eeeeee;
}</style>
