<template>

  <div class='role'>
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent :contentTableConfig="contentTableConfig" page-name="role"></PageContent>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import PageContent from '@/components/page-content/index'
import {contentTableConfig} from './config/content.config'
import PageSearch from '@/components/page-search/index';
import {searchFormConfig} from './config/search.config'
</script>

<style scoped>

</style>
