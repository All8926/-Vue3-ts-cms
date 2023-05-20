
<template>
  <h2>{{ store.count }}</h2>
  <el-input v-model="input" />
  <button @click="addCount">
    +1
  </button>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
import { ref } from 'vue';
const store = useCounterStore()
const input = ref('')

const addCount = () => {
  store.add()
}
</script>
