<template>
  <div>
    <h1>List Rendering</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
const items = ['Vue', 'React', 'Angular']
</script>