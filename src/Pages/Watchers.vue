<template>
  <div>
    <h1>Watchers</h1>
    <input v-model="counter" type="number" />
    <p>{{ status }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const counter = ref(0)
const status = ref('')

watch(counter, (newVal) => {
  status.value = newVal > 10 ? 'Lebih dari 10' : '10 atau kurang'
})
</script>