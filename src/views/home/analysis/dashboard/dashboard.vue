<template>
  <div class='dashboard' ref="dashboardRef">
    <el-row>
      <el-col :span="7">
        <BaseCard title="分类商品数量(饼图)">
          <PieEchart :pie-data="categoryGoodsCount"></PieEchart>
        </BaseCard>
      </el-col>
      <el-col :span="10">
        <BaseCard title="不同城市商品销量">
          <MapEchart :map-data="addressGoodsSale"></MapEchart>
        </BaseCard>
      </el-col>
      <el-col :span="7">
        <BaseCard title="分类商品数量(玫瑰图)">
          <RoseEchart :pie-data="categoryGoodsCount"></RoseEchart>
        </BaseCard>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <BaseCard title="分类商品的销量">
          <LineEchart v-bind="categoryGoodsSale"></LineEchart>
        </BaseCard>
      </el-col>
      <el-col :span="12">
        <BaseCard title="分类商品的收藏">
          <BarEchart v-bind="categoryGoodsFavor"></BarEchart>
        </BaseCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
import { useDashboardStore } from '@/stores/home/analysis/dashboard'
import BaseCard from '@/base-ui/card/index'
import { PieEchart, RoseEchart, LineEchart, BarEchart,MapEchart } from '@/components/page-echarts/index'
const dashboardStore = useDashboardStore()
dashboardStore.getDashboardData()

// 获取分类商品的个数
const categoryGoodsCount = computed(() => {
  return dashboardStore.categoryGoodsCount.map(item => {
    return { name: item.name, value: item.goodsCount }
  })
})
// 获取分类商品的销量
const categoryGoodsSale = computed(() => {
  const xLabel: string[] = []
  const value: any[] = []
  for (const item of dashboardStore.categoryGoodsSale) {
    xLabel.push(item.name)
    value.push(item.goodsCount)
  }
  return {
    xLabel,
    value
  }
})
// 获取分类商品的收藏
const categoryGoodsFavor = computed(() => {
  const xLabel: string[] = []
  const value: any[] = []
  for (const item of dashboardStore.categoryGoodsFavor) {
    xLabel.push(item.name)
    value.push(item.goodsFavor)
  }
  return {
    xLabel,
    value
  }
})

// 获取不同城市的销量
const addressGoodsSale = computed(() => {
  return dashboardStore.addressGoodsSale.map(item => {
    return { name: item.address, value: item.count }
  })
})





</script>

<style scoped>
.el-row {
  background-color: #eeeeee;
}
</style>
