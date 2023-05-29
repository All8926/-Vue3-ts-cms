import { type IForm } from "@/base-ui/form/index"
export const searchFormConfig: IForm = {
  formItem: [
    {
      field:'name',
      type: "input",
      label: "姓名"
    },
    {
      field:'password',
      type: "password",
      label: "密码"
    },
    {
      field:'sport',
      type: "select",
      label: "运动",
      selectOptions: [
        {
          title: "跑步",
          value: "aaa"
        },
        {
          title: "打球",
          value: "bbb"
        }
      ]
    },
    {
      field:'createTime',
      type: "datepicker",
      label: "选择时间",
      options: {
        type: "daterange",
        startPlaceholder: "开始",
        endPlaceholder: "结束"
      }
    }
  ],
  labelWidth: "70px"
}
