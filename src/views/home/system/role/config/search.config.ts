import { type IForm } from "@/base-ui/form/index"
export const searchFormConfig: IForm = {
  formItem: [
    {
      field:'id',
      type: "input",
      label: "id"
    },
    {
      field:'name',
      type: "input",
      label: "角色名称"
    },


    {
      field:'createTime',
      type: "datepicker",
      label: "创建时间",
      options: {
        type: "daterange",
        startPlaceholder: "开始",
        endPlaceholder: "结束"
      }
    }
  ],
  labelWidth: "100px"
}
