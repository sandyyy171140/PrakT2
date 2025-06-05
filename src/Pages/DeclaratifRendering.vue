<script setup>
import { reactive } from 'vue'

// Data tugas-tugas
const tasks = reactive([
  { id: 1, title: 'Belajar Vue 3', done: false },
  { id: 2, title: 'Mengerjakan proyek', done: true },
  { id: 3, title: 'Istirahat', done: false }
])
</script>

<template>
  <div>
    <h2>Daftar Tugas Hari Ini</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
          {{ task.title }}
        </span>
        <span v-if="task.done" style="color: green; font-weight: bold;">✔️</span>
      </li>
    </ul>
  </div>
</template>
