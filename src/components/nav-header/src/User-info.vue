<template>
  <div class='user_info'>

    <el-dropdown>
      <span>
        {{ loginStore.userinfo.name }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import {useRouter} from 'vue-router'
import { useLoginStore } from '@/stores/login/login'
import localCache from '@/utils/localCache'
const loginStore = useLoginStore()
const router = useRouter()

const logOut = () => {
  localCache.deleteCache('cms_token')
  router.push('/login')
}

</script>

<style scoped lang="less">
.user_info {

  // flex: 1;
  .el-tooltip__trigger {
    outline: none;

  }


}
</style>
