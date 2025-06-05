<script setup>
import { ref, computed } from 'vue'

let id = 0

const newTask = ref('')
const hideCompleted = ref(false)
const tasks = ref([
  { id: id++, text: 'Belajar CSS', done: true },
  { id: id++, text: 'Belajar JavaScript', done: true },
  { id: id++, text: 'Belajar Vue 3', done: false }
])

const filteredTasks = computed(() => {
  return hideCompleted.value
    ? tasks.value.filter((t) => !t.done)
    : tasks.value
})

// Computed property untuk style dinamis tiap task
function taskStyle(task) {
  return {
    color: task.done ? 'gray' : 'black',
    fontWeight: task.done ? 'normal' : 'bold',
  }
}

function addTask() {
  tasks.value.push({ id: id++, text: newTask.value, done: false })
  newTask.value = ''
}

function removeTask(task) {
  tasks.value = tasks.value.filter((t) => t !== task)
}
</script>

<template>
  <form @submit.prevent="addTask">
    <input v-model="newTask" required placeholder="Tambah tugas baru" />
    <button>Tambah</button>
  </form>

  <ul>
    <li v-for="task in filteredTasks" :key="task.id">
      <input type="checkbox" v-model="task.done" />
      <span :style="taskStyle(task)">{{ task.text }}</span>
      <button @click="removeTask(task)">X</button>
    </li>
  </ul>

  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Tampilkan Semua' : 'Sembunyikan Selesai' }}
  </button>
</template>
<style scoped>
form {
  margin-bottom: 1rem;
}

input[type="text"] {
  padding: 0.4rem;
  font-size: 1rem;
  width: 250px;
}

button {
  margin-left: 0.5rem;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
}

li input[type="checkbox"] {
  margin-right: 0.8rem;
  width: 18px;
  height: 18px;
}

li button {
  margin-left: auto;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0 8px;
  font-weight: bold;
}

li button:hover {
  background-color: #c0392b;
}
</style>
