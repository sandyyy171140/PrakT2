<template>
  <section class="page">
    <h1>Atribut Binding</h1>

    <!-- Bind attribute title -->
    <p :title="tooltip">Arahkan kursor ke teks ini 👆</p>

    <!-- Bind class dinamis -->
    <p :class="textClass">
      Teks ini berganti warna setiap kali tombol diklik.
    </p>
    <button @click="toggleColor">Toggle Warna</button>

    <!-- Bind properti boolean -->
    <input
      type="checkbox"
      id="agree"
      :checked="isChecked"
      @change="isChecked = !isChecked"
    />
    <label for="agree">Saya setuju</label>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

/* src & alt */
const logoUrl = 'https://vuejs.org/images/logo.png'
const logoAlt = 'Logo Vue.js'

/* title attribute */
const tooltip = 'Ini di-set melalui v-bind:title'

/* class binding */
const isBlue = ref(true)
const textClass = computed(() => (isBlue.value ? 'blue' : 'red'))
function toggleColor() {
  isBlue.value = !isBlue.value
}

/* boolean binding */
const isChecked = ref(false)
</script>

<style scoped>
.page {
  max-width: 600px;
}
.blue {
  color: blue;
}
.red {
  color: red;
}
button {
  margin: 8px 0;
}
</style>
