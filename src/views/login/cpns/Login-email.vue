<template>
  <div class='login-email'>
    <el-form ref="ruleFormRef" :model="emailForm" :rules="emailRules" label-width="120px" class="demo-email" status-icon>
      <el-form-item label="邮箱" prop="num" label-width="60">
        <el-input v-model="emailForm.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code" label-width="75">
        <el-col :span="12">
          <el-input v-model="emailForm.code" />
        </el-col>
        <el-col :span="6" :push="3">
          <el-button v-if="!btnContent.disabled" type="primary" round @click="sendCode">{{ btnContent.title }}</el-button>
          <el-button v-else type="primary" round @click="sendCode" disabled>{{ btnContent.num }}</el-button>
        </el-col>


      </el-form-item>

    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, } from 'vue'
import { emailRules } from '../config/rules-config'
import {ElFrom} from 'element-plus'
const emailForm = reactive({
  num: '',
  code: ''
})
const btnContent = reactive({
  disabled: false,
  title: '发送',
  num: 5
})
const ruleFormRef = ref<InstanceType<typeof ElFrom>>()
const sendCode = () => {
  ruleFormRef.value?.validateField('num', (flag: boolean) => {
   if(flag){
    btnContent.disabled = true
    const countdownCode = setInterval(() => {
      btnContent.num--
      console.log(111);
      if (btnContent.num === 0) {
        clearInterval(countdownCode)
        btnContent.disabled = false
        btnContent.num = 5
      }
    }, 1000)
   }
  })


  console.log();

}
</script>

<style scoped>
.el-button {
  width: 60px;
}
</style>
