<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <h1>Conditional Rendering</h1>
  <button @click="toggle">Tekan</button>
  <h1 v-if="awesome">Kamu</h1>
  <h1 v-else>Jelekkkk!!!!!!!</h1>
</template>
