<template>
  <div class='user'>
    <PageSearch :searchFormConfig="searchFormConfig" @resetEmit="handleReset"  @searchEmit="handeleSearch"></PageSearch>
    <PageContent :contentTableConfig="contentTableConfig" pageName="user" ref="pageContentRef"></PageContent>
  </div>
</template>

<script setup lang='ts'>

import { searchFormConfig } from './config/search.config'
import {contentTableConfig} from './config/content.config'
import PageSearch from '@/components/page-search/index';
import PageContent from '@/components/page-content/index'
import {usePageSearch} from '@/hooks/usePageSearch'

const {pageContentRef, handleReset, handeleSearch} = usePageSearch()
</script>

<style scoped></style>
