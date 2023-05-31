import { ref, } from "vue"
import PageContent from "@/components/page-content/index"

interface UsePageSearchReturn {
  pageContentRef: ReturnType<typeof ref>
  handleReset: () => void
  handeleSearch: (formData: any) => void
}


export function usePageSearch():UsePageSearchReturn {
  console.log(111);
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleReset = () => {
    pageContentRef.value?.getPageData()
  }

  const handeleSearch = (formData: any) => {
    pageContentRef.value?.getPageData(formData)
  }

  return {pageContentRef, handleReset, handeleSearch}
}
