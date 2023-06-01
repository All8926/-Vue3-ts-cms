<template>
  <div class='goods'>
    <PageContent :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">

        <el-image  style="width: 80px; height: 80px" :src="scope.row.imgUrl" :zoom-rate="1.2" fit="cover" :preview-teleported='true'
          :preview-src-list="[scope.row.imgUrl]" />
      </template>
      <template #price="scope">
        <span>{{ scope.row.newPrice }}</span>
      </template>
      <template #status="scope">
        <el-tag :type="scope.row.status ? 'success' : 'danger'">{{ scope.row.status ? '已上架' : "已下架" }}</el-tag>
      </template>
    </PageContent>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import PageContent from '@/components/page-content/index'
import { contentTableConfig } from './src/content.config'
</script>

<style scoped>
.el-image-viewer__wrapper{
  z-index: 0;
}</style>
