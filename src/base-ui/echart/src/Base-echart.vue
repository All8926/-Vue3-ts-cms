<template>
  <div class='base_echart' ref="baseEchartRef" :style="echartStyle">

  </div>
</template>

<script setup lang='ts'>
import { ref, watchEffect, onMounted, type PropType } from 'vue'
import type { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart';

const baseEchartRef = ref<HTMLElement>()

const props = defineProps({
  echartStyle: {
    type: Object,
    default: () => ({
      width: '100%',
      height: '360px'
    })
  },
  options: {
    type: Object ,
    required: true
  }
})

onMounted(() => {
  const {setOptions} =  useEchart(baseEchartRef.value!);
   watchEffect(() => {
    setOptions( props.options)
   })
})
</script>

<style scoped></style>
