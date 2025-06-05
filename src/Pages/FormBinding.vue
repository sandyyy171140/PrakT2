<template>
  <div>
    <h1>Form Binding</h1>
    <input v-model="name" placeholder="Masukkan nama" />
    <p>Nama: {{ name }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
</script>