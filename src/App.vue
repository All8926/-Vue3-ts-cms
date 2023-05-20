<template>
  <!-- <RouterView /> -->

  <el-button type="warning" plain>Warning</el-button>
  <el-button type="danger" plain icon="el-icon-plus" ><el-icon><i-ep-circle-check-filled /></el-icon>ddd</el-button>

  <el-radio-group v-model="radio1" class="ml-4">
    <el-radio label="1" size="large">Option 1</el-radio>
    <el-radio label="2" size="large">Option 2</el-radio>
  </el-radio-group>
  <el-link type="primary">link链接</el-link>
  <el-switch v-model="value1" />

  <el-input v-model="input"></el-input>
  <i-ep-aim />

  <router-view></router-view>
  <!-- <el-icon><Plus /></el-icon>
  <el-icon><Star /></el-icon> -->
  <i-ep-Plus />
  <i-ep-Star />
  <!-- <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container> -->
  <!-- <el-calendar v-model="value" /> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(true)
// const value2 = ref('')
// const value = ref(new Date())
const radio1 = ref('1')

const input = ref('')
console.log(import.meta.env.VITE_BASE_NAME);
</script>

<style scoped></style >
