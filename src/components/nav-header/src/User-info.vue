<template>
  <div class='user_info'>

    <el-dropdown>
      <span>
        {{ loginStore.userinfo.name }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useLoginStore } from '@/stores/login/login'
const loginStore = useLoginStore()

</script>

<style scoped lang="less">
.user_info {

  // flex: 1;
  .el-tooltip__trigger {
    outline: none;

  }


}
</style>
