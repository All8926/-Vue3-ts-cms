type IformType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field:string,
  type:IformType,
  label:string,
  rules?:any[],
  placeholder?:any,
  selectOptions?:any[],
  options?:any
}

export interface IForm {

  formItem:IFormItem[],
  labelWidth?:string,
  formItemStyle?:any,
  colLayout?:any
}