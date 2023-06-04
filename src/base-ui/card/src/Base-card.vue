<template>
  <div class='base_card'>
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <div class="card_body">
        <slot></slot>
      </div>

    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

</script>

<style scoped lang="less">
.base_card {
  margin: 10px 5px;

  ::v-deep .el-card__header {
    padding: 10px;
  }
}

.card-header {

  font-size: 14px;
}
</style>
