
export const contentTableConfig = {
  propList:  [
    { prop: 'name', label: '商品名称', minWidth: '100px' },
    { prop: 'newPrice', label: '最新价格', minWidth: '100px' ,slotName:'price'},
    { prop: 'imgUrl', label: '主图', minWidth: '100px', slotName:'image'},
    { prop: 'status', label: '状态', minWidth: '100px', slotName:'status'},
    { prop: 'createAt', label: '上架时间', minWidth: '100px',slotName:'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '100px',slotName:'updateAt' },
    {label:'操作', minWidth: '90px',slotName:'operate'}
  ],
  isIndex:true,
  isSelection:true,
  headerTitle:'商品列表'
}