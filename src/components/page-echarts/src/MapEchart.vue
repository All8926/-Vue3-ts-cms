<template>
  <div class='pie_echart'>
    <BaseEchart :options="option"></BaseEchart>
  </div>
</template>

<script setup lang='ts'>
import { computed, type PropType } from 'vue'
import BaseEchart from '@/base-ui/echart';
import type { IPieData } from '../types/index'
import { convertData } from '../utils/convert-data'

const props = defineProps({

  mapData: {
    type: Array as PropType<IPieData[]>,
    required: true
  }
})

const a = computed(() => {
//  return props.mapData
 return convertData(props.mapData)
})
console.log(a);


const option = computed(() => {
  return {
    title: {
      text: '全国销量统计',

      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params:any){
        return params.name + ':' + params.value[2]
      }
    },

    visualMap: {
      min: 0,
      max: 60000,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],     
      calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    geo: {
      map: 'china',
      roam: 'scale',
      emphasis: {
        areaColor: '#f4cccc',
        borderColor: 'rgb(9,54,95)',
        itemStyle: {
          areaColor: '#f4cccc'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'scatter',
        coordinateSystem: 'geo',
        // map: 'china',
        symbolSize: 12,

        // roam: false,
        // label: {
        //   show: true,
        // },
        emphasis: {
          itemStyle:{
            borderColor:'#fff',
            borderWidth:1
          }
          // label: {
          //   show: true
          // }
        },
        data: convertData(props.mapData)
      },
      {
        type: 'map',
        map: 'china',
        // coordinateSystem:'geo',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
        // roam: false,
        // label: {
        //   show: true,
        // },
        // emphasis: {
        //   label: {
        //     show: true
        //   }
        // },
        // data: convertData(props.mapData)
      },

    ]
  };

})


</script>

<style scoped></style>
