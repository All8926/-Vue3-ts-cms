<template>

  <div class='rose_echart' >
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
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '类别数据',
      type: 'pie',
      radius: [10, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: props.pieData
    }
  ]
};

})


</script>

<style scoped>

</style>
