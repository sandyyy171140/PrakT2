<template>
  <div class="container">
    <div class="sidebar">
      <Navbar />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
  background-color: #0b130b; /* hitam dengan sedikit hijau gelap */
  color: #9cff00; /* hijau neon untuk teks default */
}

.sidebar {
  width: 250px;
  border-right: 2px solid #4caf50; /* border hijau yang agak terang */
  background-color: #121a12; /* warna background sidebar yang gelap */
  padding: 20px 10px;
  box-sizing: border-box;
}

.content {
  flex: 1;
  padding: 30px;
  background-color: #151f15; /* background konten yang sedikit lebih terang */
  color: #c6f37e; /* warna teks konten agak soft hijau */
  overflow-y: auto;
}
</style>
