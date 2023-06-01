<template>
  <div class='base_table'>
    <div class="header">
      <div class="header_title">
        {{ headerTitle }}
      </div>
      <div class="header_operate">
        <slot name="headerOperate"></slot>
      </div>
    </div>
    <el-table :data="listData" border style="width: 100%" size="small" @selectionChange="handleSelectionChange" v-bind="childrenProps">
      <el-table-column type="selection" width="50" align="center " v-if="isIndex" />
      <el-table-column align="center " type="index" label="序号" v-if="isSelection" />
      <template v-for=" item in propList" :key="item.id">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template></el-table-column>
      </template>

    </el-table>

    <div class="footer">
      <slot name="footer">
        <div class="pagination" v-if = "showPagination">
          <el-pagination
          :page-sizes="[10, 20, 30]"
          v-model:page-size="page!.pageSize"
          v-model:current-page="page!.currentPage"
          small="small"
          background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="pageSizeChange"
          @current-change="pageCurrentChange"
          />
        </div>

      </slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, type PropType } from 'vue';
const props = defineProps({
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array as PropType<any[]>,

  },
  page:{
    type:Object,
    defalut:() => ({
      pageSize:10,
      currentPage:1
    })
  },
  listCount:{
    type:Number,
    default:0
  },
  isSelection: {
    type: Boolean,
    default: false
  },
  isIndex: {
    type: Boolean,
    default: false
  },
  headerTitle: {
    type: String
  },
  childrenProps:{
    type:Object,
  },
  showPagination:{
    type:Boolean,
    default:true
  }
})

const emit = defineEmits(['selectionChange','update:page'])
const handleSelectionChange = (value: any[]) => {
  emit('selectionChange', value)

}

const pageSizeChange = () => {
  emit('update:page',{...props.page})
}
const pageCurrentChange = () => {

  emit('update:page',{...props.page})
}

</script>

<style scoped lang="less">
.base_table {
  border-top: 20px solid #eeeeee;
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .footer {
    position: relative;
    padding: 15px 0;

    .pagination {
      position: absolute;
      transform: translate(50%, 0);
    }
  }
}
</style>
