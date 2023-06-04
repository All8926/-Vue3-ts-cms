<template>

  <div class=''>
    <el-dialog v-model="dialogVisible" width="400px" title="新建用户" :destroy-on-close="true" center>
      <BaseForm v-bind="modalConfig" v-model="formData"></BaseForm>
      <slot></slot>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmClick ">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>

  </div>

</template>

<script setup lang='ts'>
import {ref, watch} from 'vue'
import BaseForm from '@/base-ui/form/index'
import {useSystemStore} from '@/stores/home/system/system'
const systemStore = useSystemStore()
const dialogVisible = ref(false)
const props = defineProps({
  modalConfig:{
    type:Object,
    required:true
  },
  defaultData:{
    type:Object,
    default:() => ({

    })
  },
  otherData:{
    type:Object,
    default:() => ({

    })
  },
  pageName:{
    type:String,
    required:true
  }
})

const formData = ref<any>({})

watch(() => props.defaultData, (newValue:any) => {
  for (const item of props.modalConfig.formItem) {
    formData.value[`${item.field}`] = newValue[`${item.field}`]
  }
})
// 对话框确认操作
const handleConfirmClick = () => {
  dialogVisible.value = false
  if(Object.keys(props.defaultData).length){
    // 编辑
    systemStore.editPageData({
      pageName:props.pageName,
      queryInfo:{...formData.value, ...props.otherData},
      id:props.defaultData.id
    })

  }else{
    // 新建
    systemStore.createPageData({
      pageName:props.pageName,
      queryInfo: {...formData.value, ...props.otherData}
    })
  }
}

defineExpose({dialogVisible})
</script>

<style scoped>

</style>
