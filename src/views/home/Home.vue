
<template>
    <el-container>
      <el-aside width="200px">
        <navMenu></navMenu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts" >
import { useHomeStore } from '@/stores/home/home';
import navMenu from '@/components/nav-menu/index'
import { ref } from 'vue';
const store = useHomeStore()
const input = ref('')

const addCount = () => {
  store.add()
}
</script>
<style lang="less">
.el-container{
  height: 100%;

  .el-aside{
    &::-webkit-scrollbar  {
    width: 0px;
    height: 4px;
}
    background-color: #021b38;
  }
  .el-main{
    background-color: #eee;
  }
}

</style>
