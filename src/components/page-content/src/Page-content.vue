<template>
  <div class='pageContent'>
    <BaseTable :listData="dataList" :listCount="dataCount" @selectionChange="selectionChange" v-model:page="pageInfo"
      v-bind="contentTableConfig">
      <template #headerOperate >
        <div class="headerBtn">
          <el-button type="primary" size="small" @click="newBtnClick" v-if="isCreate"><el-icon>
              <Plus />
            </el-icon>新增</el-button>
          <el-button size="small" @click="renovateBtn"><el-icon>
              <Refresh />
            </el-icon>刷新</el-button>
        </div>
      </template>



      <template #createAt="scope">
        <span>{{ formatUtcString(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatUtcString(scope.row.updateAt) }}</span>
      </template>
      <template #operate="scope">
        <div class="operateBtn">
          <el-button text type="primary" size="small" @click="editBtnClick(scope.row)" v-if="isUpdate">
            <el-icon>
              <EditPen />
            </el-icon>
            编辑</el-button>
          <el-button text type="danger" size="small" @click="deleteClick(scope.row)" v-if="isDelete">
            <el-icon>
              <Delete />
            </el-icon>删除</el-button>
        </div>
      </template>

      <template v-for="item in slotList" :key="item.slotName" #[item.slotName]="scope">
        <slot :name="item.slotName" :row="scope.row">
        </slot>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch, computed } from 'vue'
import BaseTable from '@/base-ui/table/index'
import { useSystemStore } from '@/stores/home/system/system'
import {useLoginStore} from '@/stores/login/login'
import { formatUtcString } from '@/utils/date-format'
import {usePermission} from '@/hooks/usePermission'

const systemStore = useSystemStore()
const loginStore = useLoginStore()

const pageInfo = ref({ pageSize: 10, currentPage: 1 })

const props = defineProps({
  contentTableConfig: {
    type: Object,
    require: true
  },
  pageName: {
    type: String,
    require: true,
    default: ''
  }
})

const emit = defineEmits(['newBtnClick','editBtnClick'])

const excludeSlotList = ['createAt','updateAt','operate',undefined]
// 获取插槽列表，把公共的插槽过滤掉
const slotList = props.contentTableConfig?.propList.filter((item:any) => {
  return (!excludeSlotList.includes(item.slotName))
})

// 获取增删改查的权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')



const getPageData = (siftInfo: any = {}) => {
  if(!isQuery) return
  systemStore.requestPageList({
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...siftInfo
    }
  })
}

watch(pageInfo, () => {
  getPageData()
}, {
  deep: true
})
getPageData()



const dataList = computed(() => {
  return systemStore.pageListData(`${props.pageName}List`)
})

const dataCount = computed(() => {
  return systemStore.pageListCount(`${props.pageName}Count`)
})


const selectionChange = (value: any[]) => {
  console.log(value);

}

// 删除
const deleteClick = (value:any) => {
  systemStore.deletePageData({pageName:props.pageName, id:value.id})
}
// 编辑
const editBtnClick = (value:any) => {
  emit('editBtnClick',value)
}
// 新增
const newBtnClick = () => {
  emit('newBtnClick')
}
// 刷新
const renovateBtn = () => {
  systemStore.requestPageList({pageName:props.pageName})
  loginStore.getInitialData()
}
defineExpose({ getPageData })
</script>

<style scoped></style>
