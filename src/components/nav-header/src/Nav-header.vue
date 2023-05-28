<template>
  <div class='nav-header'>

    <el-icon size="30" @click="CollapseClick">
      <Expand v-if="isFold"></Expand>
      <Fold v-else></Fold>
    </el-icon>
    <div class="breadcrumh">
      <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    </div>
    <user-info></user-info>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'

import UserInfo from './User-info.vue';
import breadcrumb from '@/base-ui/breadcrumb';

import { useRoute } from 'vue-router'
import { useLoginStore } from '@/stores/login/login'
import { pathMapBreadcrumbs } from '@/utils/map-menus'


const route = useRoute()
const isFold = ref(false)
const loginStore = useLoginStore()

const emit = defineEmits(['collapse'])
const CollapseClick = () => {
  isFold.value = !isFold.value
  return emit('collapse', isFold.value)
}


const breadcrumbs = computed(() => {

  const routePath = route.path
  return pathMapBreadcrumbs(loginStore.userMneus, routePath)
})
console.log(breadcrumbs);


</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  height: 100%;
  // line-height: 50px;
  align-items: center;

  .breadcrumh {
    flex: 1;
    margin-left: 10px;
  }
}
</style>
