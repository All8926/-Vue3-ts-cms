<template>

  <div class='nav-header'>

    <el-icon size="30" @click="CollapseClick">
      <Expand v-if="isFold"></Expand>
      <Fold v-else></Fold>
    </el-icon>
  </div>

</template>

<script setup lang='ts'>
// import { emit } from 'process';
import {ref, reactive} from 'vue'
const isFold = ref(false)

const emit = defineEmits(['collapse'])
const CollapseClick = () => {
  isFold.value = !isFold.value
 return emit('collapse', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header{
  line-height: 50px;
  .el-icon{
    vertical-align:middle  ;
    margin-bottom: 5px;
  }
}
</style>
