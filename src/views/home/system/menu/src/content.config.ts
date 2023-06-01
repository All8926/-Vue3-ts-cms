
export const contentTableConfig = {
  propList:  [
    { prop: 'name', label: '菜单名', minWidth: '100px' },
    { prop: 'type', label: '类型', minWidth: '100px', },
    { prop: 'url', label: '菜单url', minWidth: '100px', },
    { prop: 'icon', label: '菜单icon', minWidth: '100px', },
    { prop: 'permission', label: '按钮权限', minWidth: '100px', },
    { prop: 'createAt', label: '创建时间', minWidth: '100px',slotName:'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '100px',slotName:'updateAt' },
    {label:'操作', minWidth: '90px',slotName:'operate'}
  ],
  isIndex:false,
  isSelection:false,
  showPagination:false,
  headerTitle:'菜单列表',
  childrenProps:{
    rowKey:'id',
    treeProps:{
      children:'children'
    }
  }
}