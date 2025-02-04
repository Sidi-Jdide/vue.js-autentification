<template>
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {{ currentUser.name }}!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['currentUser'])
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/login');
      }
    }
  };
  </script>