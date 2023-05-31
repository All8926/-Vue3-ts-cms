<template>

  <div class='page_search'>
    <BaseForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <div class="header">
          <h2>高级检索</h2>
        </div>

      </template>
      <template #footer>
        <div class="searchBtn">
          <el-button @click="handleResetClick">
            <el-icon>
              <Refresh />
            </el-icon>重置
          </el-button>
          <el-button type="primary" @click="handleQueryClick">
            <el-icon>
              <Search />
            </el-icon>搜索</el-button>
        </div>
      </template>
    </BaseForm>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import BaseForm, { type IForm } from '@/base-ui/form/index'

const props = defineProps({
  searchFormConfig:{
    type:Object,
    required: true
  }
})

const emit = defineEmits(['resetEmit','searchEmit'])

// eslint-disable-next-line vue/no-setup-props-destructure
const formItems = props.searchFormConfig.formItem

const formOriginData:any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}

const formData = ref(formOriginData)

// 重置
const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[key] = formOriginData[key]
  }
  emit('resetEmit')
}
// 搜索
const handleQueryClick = () => {
  emit('searchEmit',formData.value)
}
</script>

<style scoped lang="less">
.header{
  padding: 5px 0 0 20px;
}
.searchBtn{
 text-align: right;
 padding: 0 50px 10px 0;

}
</style>
