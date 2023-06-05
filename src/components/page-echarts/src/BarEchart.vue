<template>
  <div class='pie_echart'>
    <BaseEchart :options="option"></BaseEchart>
  </div>
</template>

<script setup lang='ts'>
import {  computed, type PropType } from 'vue'
import BaseEchart from '@/base-ui/echart';
import * as echarts from 'echarts';

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
  xAxis: {
    data: props.xLabel,
    axisLabel: {
      inside: true,
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
      data: props.value
    }
  ]
};

})


</script>

<style scoped></style>
