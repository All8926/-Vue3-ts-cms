<template>

  <router-view></router-view>

</template>

<script setup lang="ts">
import { ref } from 'vue'

console.log(import.meta.env.VITE_BASE_NAME);
ElMessage.warning('greg')

</script>

<style scoped></style >
