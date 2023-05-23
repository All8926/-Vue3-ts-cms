<template>
  <div class='login-accout'>
    <el-form ref="ruleFormRef" :model="account" :rules="accountRules" label-width="120px" class="demo-account" status-icon>
      <el-form-item label="账号" prop="name" label-width="60">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" label-width="60">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import {accountRules} from '../config/rules-config'
import {ElFrom} from 'element-plus'

const ruleFormRef = ref<InstanceType<typeof ElFrom>>()
const account = reactive({
  name: '',
  password: ''
})

const loginAction = () => {
  console.log(231);
  ruleFormRef.value.validate((valid:boolean) => {
    console.log(valid);
   

  })

}
defineExpose({loginAction})
</script>

<style scoped></style>
