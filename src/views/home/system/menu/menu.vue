<template>

  <div class=''>
    <PageContent :contentTableConfig="contentTableConfig" page-name="menu"></PageContent>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import PageContent from '@/components/page-content/index'
import { contentTableConfig} from './src/content.config'
</script>

<style scoped>

</style>
