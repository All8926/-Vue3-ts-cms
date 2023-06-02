<template>

  <div class='role'>
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent :contentTableConfig="contentTableConfig" page-name="role" @newBtnClick="handleNewData" @editBtnClick="handleEditData"></PageContent>
    <PageModal pageName="role" :modalConfig="modalConfig" ref="pageModalRef" :defaultData="defaultData"></PageModal>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import PageContent from '@/components/page-content/index'
import {contentTableConfig} from './config/content.config'
import PageSearch from '@/components/page-search/index';
import {searchFormConfig} from './config/search.config'
import {modalConfig} from './config/modal.config'

import {usePageModal} from '@/hooks/usePageModal'
const {pageModalRef,defaultData,handleNewData, handleEditData} = usePageModal()
</script>

<style scoped>

</style>
