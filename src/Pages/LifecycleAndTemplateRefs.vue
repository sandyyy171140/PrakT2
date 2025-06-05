<template>
  <div>
    <h1>Lifecycle dan Template Refs</h1>
    <input ref="inputRef" placeholder="Fokus otomatis" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const inputRef = ref(null)
onMounted(() => {
  inputRef.value.focus()
})
</script>