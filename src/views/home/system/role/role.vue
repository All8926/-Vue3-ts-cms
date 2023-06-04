<template>
  <div class='role'>
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent :contentTableConfig="contentTableConfig" page-name="role" @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"></PageContent>
    <PageModal pageName="role" :modalConfig="modalConfig" ref="pageModalRef" :defaultData="defaultData" :otherData="otherData">
      <div class="menu_tree">
        <el-tree
        ref="treeRef"
        :data="menus"
        :props="{ children: 'children', label: 'name' }"
        node-key="id"
        show-checkbox
        @check="handleCheckChange" />
      </div>
    </PageModal>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive,computed , nextTick} from 'vue'
import PageContent from '@/components/page-content/index'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search/index';
import PageModal from '@/components/page-modal/index';
import { searchFormConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/usePageModal'
import {getMenuLeafkeys} from '@/utils/map-menus'
import { ElTree } from 'element-plus'
import { useLoginStore } from '@/stores/login/login';
const loginStore = useLoginStore()

const treeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item:any) => {
  const menukeys = getMenuLeafkeys(item.menuList)
  console.log(menukeys);
  nextTick(() => {
    treeRef.value.setCheckedKeys(menukeys,false)
  })


}
const { pageModalRef, defaultData, handleNewData, handleEditData } = usePageModal(undefined,editCallback)

const menus = computed(() => {
  return loginStore.entireMenu
})

// 获取tree里选中的key
const otherData = ref({})
const handleCheckChange = (data1:any, data2:any) => {
const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
otherData.value = {menuList}


}
</script>

<style scoped></style>
