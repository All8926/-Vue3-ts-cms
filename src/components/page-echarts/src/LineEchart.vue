<template>
  <div class='pie_echart'>
    <BaseEchart :options="option"></BaseEchart>
  </div>
</template>

<script setup lang='ts'>
import {  computed, type PropType } from 'vue'
import BaseEchart from '@/base-ui/echart';

const props = defineProps({

  xLabel: {
    type: Array as PropType<string[]>
  },
  value: {
    type: Array as PropType<number[]>
  }
})

const option = computed(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '2%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xLabel
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.value,
        type: 'line',
        areaStyle: {}
      }
    ]
  };

})


</script>

<style scoped></style>
