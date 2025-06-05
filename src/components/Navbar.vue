<template>
  <div>
    <h2>Pertemuan 2 dan 3</h2>
    <hr />
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/declarative">Declarative Rendering</router-link></li>
      <li><router-link to="/atribut">Attribute Bindings</router-link></li>
      <li><router-link to="/form">Form Bindings</router-link></li>
      <li><router-link to="/conditional">Conditional Rendering</router-link></li>
      <li><router-link to="/list">List Rendering</router-link></li>
      <li><router-link to="/computed">Computed Property</router-link></li>
      <li><router-link to="/lifecycle">Lifecycle dan Template Refs</router-link></li>
      <li><router-link to="/watchers">Watchers</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
u.navbar {
  background-color: #121a12; /* hitam agak hijau gelap */
  color: #9cff00; /* hijau neon terang */
  padding: 20px;
  border-radius: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  color: #9cff00;
  margin-bottom: 10px;
}

hr {
  border: 1px solid #4caf50;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 12px;
}

router-link {
  text-decoration: none;
  color: #9cff00;
  font-weight: 600;
  transition: color 0.3s ease;
}

router-link:hover {
  color: #00ff00;
  text-shadow: 0 0 8px #00ff00;
}
</style>
