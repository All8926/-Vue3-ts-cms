<template>

  <div class='nav-header'>

    <el-icon size="30" @click="CollapseClick">
      <Expand v-if="isFold"></Expand>
      <Fold v-else></Fold>
    </el-icon>
    <div class="breadcrumh">
      面包屑
    </div>
    <user-info></user-info>
  </div>

</template>

<script setup lang='ts'>
// import { emit } from 'process';
import {ref, reactive} from 'vue'
import {useLoginStore} from '@/stores/login/login'
import UserInfo from './User-info.vue';
const isFold = ref(false)
// import {useLoginStore} from '@/stores/logn/login'
const loginStore = useLoginStore()
const emit = defineEmits(['collapse'])
const CollapseClick = () => {
  isFold.value = !isFold.value
 return emit('collapse', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header{
  display: flex;
  height:100%;
  // line-height: 50px;
  align-items: center;
.breadcrumh{
  flex: 1;
}
  .el-icon{
    // vertical-align:middle  ;
    // margin-bottom: 5px;
  }
}
</style>
