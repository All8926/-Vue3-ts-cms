<template>

  <div class='user'>
     <BaseForm  v-bind="searchFormConfig"></BaseForm>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import BaseForm,{type IForm} from '@/base-ui/form/index'
import {searchFormConfig} from './config/search.config'


</script>

<style scoped>

</style>
