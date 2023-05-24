<template>
  <div class='login-panei'>
    <p>后台管理系统</p>
    <el-tabs type="border-card"  class="demo-tabs" v-model="currentTab" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><i-ep-userFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>

        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="email">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><i-ep-Message /></el-icon>
            <span>邮箱登录</span>
          </span>
        </template>
        <login-email ></login-email>
      </el-tab-pane>
    </el-tabs>
    <el-checkbox v-model="isKeepPassword" label="记住密码" size="large" />
    <el-link type="primary">忘记密码</el-link>
    <el-button type="primary" class="loginBtn" @click="handleLoginClick">登录</el-button>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import LoginAccount from './Login-account.vue';
import LoginEmail from './Login-email.vue'

const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const currentTab  = ref('account')
const handleLoginClick = () => {

  // 登录方式
  if(currentTab.value === 'account'){
    accountRef.value?.loginAction(isKeepPassword.value)
  }else{
    ElMessage.warning('暂不支持邮箱登录')

  }

}
</script>

<style scoped lang="less">
.login-panei {
  width: 350px;
  height: 200px;
  margin-bottom: 200px;

  p {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }

  .demo-tabs {
    // height: 100%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);
  }
  .el-link{
    margin-left: 210px;
    margin-bottom: 2px;
  }
  .loginBtn{
    width: 100%;
  }
}
</style>
