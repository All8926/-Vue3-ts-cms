<template>
  <div class='user'>
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent :contentTableConfig="contentTableConfig" pageName="user"></PageContent>
  </div>
</template>

<script setup lang='ts'>
import { searchFormConfig } from './config/search.config'
import {contentTableConfig} from './config/content.config'
import PageSearch from '@/components/page-search/index';
import PageContent from '@/components/page-content/index'

</script>

<style scoped></style>
