import {type IForm} from '@/base-ui/form/index'
export const searchFormConfig:IForm = {
  formItem:[
    {
      type:'input',
      label:'姓名'
    },
    {
      type:'input',
      label:'电话'
    },
    {
      type:'select',
      label:'电话',
      selectOptions:[
      {
        title:'跑步',
        value:'aaa'
      },
      {
        title:'打球',
        value:'bbb'
      },
      ]
    },
    {
      type:'datepicker',
      label:'选择时间',
      options:{
        type:'daterange',
        startPlaceholder:'开始',
        endPlaceholder:'结束'
      }
    }
  ],
  labelWidth:'80px'
  }