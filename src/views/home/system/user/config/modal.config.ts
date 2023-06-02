import { type IForm } from "@/base-ui/form/index"
export const modalConfig: IForm = {
  formItem:[
    {
      type:'input',
      label:'用户名',
      field:'name',
      placeholder:'请输入用户名'
    },
    {
      type:'input',
      label:'真实姓名',
      field:'realname',
      placeholder:'请输入真实姓名'
    },
    {
      type:'password',
      label:'用户密码',
      field:'password',
      placeholder:'请输入密码',
      isHide:false
    },
    {
      field:'cellphone',
      type: "input",
      label: "电话号码",
      placeholder:'请输入手机号码'
    },
    {
      field:'departmentId',
      type: "select",
      label: "选择部门",
      selectOptions: []
    },
    {
      field:'roleId',
      type: "select",
      label: "选择角色",
      selectOptions: []
    },
  ],
  colLayout:{
    span:24
  },
  labelWidth:'80px'
}