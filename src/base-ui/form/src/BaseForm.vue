<template>
  <div class='base_form'>
    <el-form :label-width="props.labelWidth">
      <el-row >
      <template v-for="item in props.formItem" :key="item.label">

        <el-col :span="8" v-bind="props.colLayout">
          <el-form-item :label="item.label" :style="props.formItemStyle">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input :placeholder="item.placeholder" :show-password="item.type === 'password'" v-bind="item.options" />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select  :placeholder="item.placeholder" v-bind="item.options">
                <el-option v-for="option in item.selectOptions " :key="option.value" :label="option.title" :value="option.value" >
                  {{ option.title }}
                </el-option>
              </el-select>


            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker v-bind="item.options" />
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
    </el-form>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, type PropType } from 'vue'
import type { IFormItem, } from '../types/index'

const props = defineProps({
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
      padding:'10px 20px'
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
console.log(props);

</script>

<style scoped></style>
