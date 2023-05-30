
export const contentTableConfig = {
  propList:  [
    { prop: 'name', label: '用户名', minWidth: '100px' },
    { prop: 'cellphone', label: '手机号', minWidth: '100px' },
    { prop: 'enable', label: '状态', minWidth: '100px',slotName:'status' },
    { prop: 'realname', label: '真实姓名', minWidth: '100px', },
    { prop: 'createAt', label: '注册时间', minWidth: '100px',slotName:'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '100px',slotName:'updateAt' },
    {label:'操作', minWidth: '90px',slotName:'operate'}
  ],
  isIndex:true,
  isSelection:true,
  headerTitle:'用户列表'
}