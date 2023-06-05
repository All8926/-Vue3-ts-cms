<template>

  <div class='pie_echart' >
    <BaseEchart :options="option"></BaseEchart>
  </div>

</template>

<script setup lang='ts'>
import { computed,type PropType} from 'vue'
import type {IPieData} from '../types/index'
import BaseEchart from '@/base-ui/echart';

const props = defineProps({
  pieData:{
    type:  Array as PropType<IPieData[]>,
    required:true
  }
})

const option = computed(() => {
  return {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left:'center'
  },
  series: [
    {
      name: '分类数据',
      type: 'pie',
      radius: '50%',
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
})


</script>

<style scoped>

</style>
