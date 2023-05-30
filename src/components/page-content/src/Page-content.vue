<template>

  <div class='pageContent'>
    <BaseTable :listData="dataList" @selectionChange="selectionChange"  v-bind="contentTableConfig">
      <template #headerOperate>
        <div class="headerBtn">
          <el-button type="primary" size="small"><el-icon><Plus /></el-icon>新增</el-button>
          <el-button size="small"><el-icon><Refresh /></el-icon>刷新</el-button>
        </div>
      </template>


      <template #status="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">{{scope.row.enable ? '正常' :"异常"}}</el-tag>
      </template>
      <template #createAt="scope">
        <span>{{ formatUtcString(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatUtcString(scope.row.updateAt) }}</span>
      </template>
      <template #operate>
        <div class="operateBtn">
          <el-button text type="primary" size="small">
            <el-icon><EditPen /></el-icon>
            编辑</el-button>
          <el-button text type="danger" size="small">
            <el-icon><Delete /></el-icon>删除</el-button>
        </div>
      </template>
    </BaseTable>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive,computed} from 'vue'
import BaseTable from '@/base-ui/table/index'
import { useSystemStore } from '@/stores/home/system/system'
import {formatUtcString} from '@/utils/date-format'

const systemStore = useSystemStore()



const props = defineProps({
  contentTableConfig:{
    type:Object,
    require:true
  },
  pageName:{
    type:String,
    require:true,
    default:''
  }
})
systemStore.requestPageList({
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const dataList = computed(() => {
  return systemStore.pageListData(`${props.pageName}List`)
})
console.log(systemStore.pageListData(`${props.pageName}List`));
console.log(props.contentTableConfig);

// const userCount = computed(() => {
//   return systemStore.pageListData(`${props.pageName}List`)
// })

const selectionChange = (value:any[]) => {
  console.log(value);

}
</script>

<style scoped>

</style>
