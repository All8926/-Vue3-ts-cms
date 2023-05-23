<template>

  <div class='login'>
    
    <login-panei></login-panei>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import loginPanei from './cpns/Login-panei.vue'
</script>

<style scoped lang="less">
.login{
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url(@/assets/img/login-bg.svg);
  justify-content: center;
  align-items: center;
}
</style>
