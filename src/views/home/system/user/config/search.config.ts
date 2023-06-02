import { type IForm } from "@/base-ui/form/index"
export const searchFormConfig: IForm = {
  formItem: [
    {
      field:'name',
      type: "input",
      label: "用户名",
      placeholder:'请输入用户名'
    },
    {
      field:'realname',
      type: "input",
      label: "姓名",
      placeholder:'请输入真实姓名'
    },
    {
      field:'cellphone',
      type: "input",
      label: "电话号码",
      placeholder:'请输入手机号码'
    },
    {
      field:'enable',
      type: "select",
      label: "用户状态",
      selectOptions: [ 
        {
          title: "启用",
          value: 1
        },
        {
          title: "禁用",
          value: 0
        }
      ]
    },
    {
      field:'createAt',
      type: "datepicker",
      label: "创建时间",
      options: {
        type: "daterange",
        startPlaceholder: "开始",
        endPlaceholder: "结束"
      }
    }
  ],
  labelWidth: "80px"
}
