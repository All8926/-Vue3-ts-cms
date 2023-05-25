
<template>
  <h2>home</h2>
  <h2>{{ store.count }}</h2>
  <el-input v-model="input" />
  <button @click="addCount">
    +1
  </button>
</template>

<script setup lang="ts" >
import { useHomeStore } from '@/stores/home/home';
import { ref } from 'vue';
const store = useHomeStore()
const input = ref('')

const addCount = () => {
  store.add()
}
</script>
