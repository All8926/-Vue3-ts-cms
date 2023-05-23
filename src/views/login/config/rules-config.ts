import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

export const accountRules = reactive<InstanceType<typeof FormRules>>({
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { pattern:/^[a-z0-9]{4,8}$/, message: '账号长度为4-8位的字母或数字', trigger: 'blur' },
  ],
  password: [
  { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern:/^[a-z0-9]{4,8}$/, message: '密码长度为4-8位的字母或数字', trigger: 'blur' },
  ]
})

export const emailRules = reactive<InstanceType<typeof FormRules>>({
  num: [
    { required: true, message: '请输入邮箱号', trigger: 'blur' },
    { pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入正确的电子邮件', trigger: 'blur' },
  ],
  code: [
  { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern:/^\d+$/, message: '验证码应为纯数字', trigger: 'blur' },
  ]
})



