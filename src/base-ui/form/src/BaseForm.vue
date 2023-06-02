<template>
  <div class='base_form'>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row >
      <template v-for="item in formItem" :key="item.label">

        <el-col  v-bind="colLayout">
          <el-form-item :label="item.label" :style="formItemStyle" v-if="!item.isHide">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input v-model="formData[`${item.field}`]" :placeholder="item.placeholder" :show-password="item.type === 'password'" v-bind="item.options" />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select v-model="formData[`${item.field}`]"  :placeholder="item.placeholder" v-bind="item.options">
                <el-option v-for="option in item.selectOptions " :key="option.value" :label="option.title" :value="option.value" >
                  {{ option.title }}
                </el-option>
              </el-select>


            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker v-model="formData[`${item.field}`]" v-bind="item.options" />
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>

  </div>
</template>

<script setup lang='ts'>
import { ref, computed, watchEffect,type PropType, watch } from 'vue'
import type { IFormItem, } from '../types/index'

const props = defineProps({
  modelValue:{
    type:Object,
    required:true
  },
  formItem: {
    type: Array as PropType<IFormItem[]>,
    default:() => []
  },

  labelWidth:{
    type:String,
  },
  formItemStyle:{
    type:Object,
    default:() => ({
      padding:'0px 0px'
    })
  },
  colLayout:{
    type:Object,
    default:() => ({
      xl:4,
      lg:6,
      md:8,
      sm:12,
      xs:24
    })
  }
})

// const formData = ref()
// const initFormData = computed(() => {
//  return Object.assign({}, props.modelValue)
// })

// watch(initFormData, (newValue) => {
//  Object.assign(formData.value, newValue)
// }, { immediate: true })

const formData = ref({ ...props.modelValue });

watchEffect(() => {
  Object.assign(formData.value, props.modelValue);
});




const emit = defineEmits(['update:modelValue'])

watch(formData,(newValue) => {
  emit('update:modelValue',newValue)

},{
  deep:true
})

</script>

<style scoped>
.el-form{
  padding: 0 20px;
}</style>
