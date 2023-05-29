<template>
  <div class='user'>
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

import { searchFormConfig } from './config/search.config'

import PageSearch from '@/components/page-search/src/Page-search.vue';



</script>

<style scoped>
</style>
