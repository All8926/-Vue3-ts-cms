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
          <el-button>
            <el-icon>
              <Refresh />
            </el-icon>重置
          </el-button>
          <el-button type="primary">
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

const formData = ref({
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
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
