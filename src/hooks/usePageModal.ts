import { ref } from "vue"
import PageModal from "@/components/page-modal/index"


interface UsePageModalReturn {
  pageModalRef: ReturnType<typeof ref>
  defaultData: any
  handleNewData: () => void
  handleEditData: (value: any) => void
}

type fn = () => void

// 弹出对话框
export function usePageModal(newCb?:fn, editCb?:fn): UsePageModalReturn {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultData = ref({})
  // 新建
  const handleNewData = () => {
    defaultData.value = {  }
    pageModalRef.value!.dialogVisible = true
    newCb && newCb()
  }
  // 编辑
  const handleEditData = (value: any) => {

    pageModalRef.value!.dialogVisible = true

    defaultData.value = { ...value }
    editCb && editCb()
  }

  return { pageModalRef, defaultData, handleNewData, handleEditData }
}
