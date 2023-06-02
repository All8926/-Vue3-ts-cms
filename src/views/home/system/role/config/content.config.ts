
export const contentTableConfig = {
  propList:  [

    { prop: 'name', label: '角色名', minWidth: '100px' },
    { prop: 'intro', label: '权限介绍', minWidth: '100px', },
    { prop: 'createAt', label: '注册时间', minWidth: '100px',slotName:'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '100px',slotName:'updateAt' },
    {label:'操作', minWidth: '90px',slotName:'operate'}
  ],
  isIndex:true,
  isSelection:true,
  headerTitle:'角色列表'
}