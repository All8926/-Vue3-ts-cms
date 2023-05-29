<template>
  <div class='base_form'>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row >
      <template v-for="item in formItem" :key="item.label">

        <el-col :span="8" v-bind="colLayout">
          <el-form-item :label="item.label" :style="formItemStyle">
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
import { ref, reactive, type PropType, watch } from 'vue'
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
    default:'100px'
  },
  formItemStyle:{
    type:Object,
    default:() => ({
      padding:'10px 0px'
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

const formData = ref({...props.modelValue})
const emit = defineEmits(['update:modelValue'])
watch(formData,(newValue) => {
  // console.log(newValue);
  emit('update:modelValue',newValue)

},{
  deep:true
})
console.log(props);

</script>

<style scoped></style>
