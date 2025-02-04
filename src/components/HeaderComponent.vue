// src/components/Header.vue
<template>
  <header class="header">
    <div class="logo">Vue.js authentification</div>
    <nav>
      <ul class="nav-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.header {
  background: #bfc1c2 ;
  color: black;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.logo {
  font-size: 20px;
  font-weight: bold;
}
.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-list li {
  margin: 0 10px;
}
.nav-list a {
  color: black;
  text-decoration: none;
}
</style>