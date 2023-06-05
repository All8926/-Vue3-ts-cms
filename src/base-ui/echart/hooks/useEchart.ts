import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts'
import chinaMapData from '../data/china.json'
const chinaData:any = chinaMapData
echarts.registerMap('china', chinaData)

export default function(el:HTMLElement, ){
  const myChart = echarts.init(el);
  const setOptions = (options:EChartsOption) => {
    myChart.setOption(options)
  }


  // 图标根据浏览器大小自适应
  window.addEventListener('resize', () => {
    myChart.resize()
  })
  const updateSize = () => {
    myChart.resize()
  }

  return {
    setOptions,
    updateSize
  }
}