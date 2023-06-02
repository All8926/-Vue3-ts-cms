<template>
  <div class='user'>
    <PageSearch :searchFormConfig="searchFormConfig" @resetEmit="handleReset"  @searchEmit="handeleSearch"></PageSearch>
    <PageContent :contentTableConfig="contentTableConfig" pageName="user" ref="pageContentRef" @newBtnClick="handleNewData" @editBtnClick="handleEditData">
      <template #status="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">{{ scope.row.enable ? '正常' : "异常" }}</el-tag>
      </template>
    </PageContent>
    <PageModal pageName="user" :modalConfig="modalConfig" ref="pageModalRef" :defaultData="defaultData"></PageModal>
  </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
import {useLoginStore} from '@/stores/login/login'
import { searchFormConfig } from './config/search.config'
import {contentTableConfig} from './config/content.config'
import PageSearch from '@/components/page-search/index';
import PageContent from '@/components/page-content/index'
import {usePageSearch} from '@/hooks/usePageSearch'
import {usePageModal} from '@/hooks/usePageModal'
import PageModal from '@/components/page-modal/index';
import {modalConfig} from './config/modal.config'

const {pageContentRef, handleReset, handeleSearch} = usePageSearch()

const newCallbake = () => {

}
const editCallback = () => {
 const formItem =  modalConfig.formItem.find(item => item.field === 'password')

 formItem!.isHide = true
}

// 动态添加部门和角色列表
const loginStore = useLoginStore()
const departmentItem = modalConfig.formItem.find(item => item.field === 'departmentId')
departmentItem!.selectOptions = loginStore.departmentList.map(item => {
  return {title:item.name, value:item.id}
})


const roleIdItem = modalConfig.formItem.find(item => item.field === 'roleId')
roleIdItem!.selectOptions = loginStore.roleList.map(item => {
  return {title:item.name, value:item.id}
})

const {pageModalRef,defaultData,handleNewData, handleEditData} = usePageModal(newCallbake, editCallback)



</script>

<style scoped></style>
