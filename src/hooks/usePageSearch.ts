import { ref, } from "vue"
import PageContent from "@/components/page-content/index"

interface UsePageSearchReturn {
  pageContentRef: ReturnType<typeof ref>
  handleReset: () => void
  handeleSearch: (formData: any) => void
}

// 按要求搜索数据列表
export function usePageSearch():UsePageSearchReturn {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleReset = () => {
    pageContentRef.value?.getPageData()
  }

  const handeleSearch = (formData: any) => {
    pageContentRef.value?.getPageData(formData)
  }

  return {pageContentRef, handleReset, handeleSearch}
}
