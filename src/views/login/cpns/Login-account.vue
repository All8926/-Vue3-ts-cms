<template>
  <div class='login-accout'>
    <el-form ref="ruleFormRef" :model="account" :rules="accountRules" label-width="120px" class="demo-account">
      <el-form-item label="账号" prop="name" label-width="60">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" label-width="60">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { accountRules } from '../config/rules-config'
import localCache from '@/utils/localCache'
import {useLoginStore} from '@/stores/login/login'
import { ElFrom } from 'element-plus'

const loginStore = useLoginStore()
const ruleFormRef = ref<InstanceType<typeof ElFrom>>()
const account = reactive({
  name: localCache.getCache('cms_name') ?? '',
  password: localCache.getCache('cms_password') ?? ''
})

const loginAction = (isKeepPassword: boolean) => {
  ruleFormRef.value.validate((valid: boolean) => {
    if (valid) {
      // 记住密码选项
      if (isKeepPassword) {
        localCache.setCache('cms_name', account.name)
        localCache.setCache('cms_password', account.password)
      } else {
        localCache.deleteCache('cms_name')
        localCache.deleteCache('cms_password')
      }
      loginStore.accountLoginAction({...account})

    }

  })

}
defineExpose({ loginAction })
</script>

<style scoped></style>
