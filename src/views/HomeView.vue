<template>
  <div class="home">
   <LoginForm />
  </div>
</template>

<script lang="ts">
import LoginForm from '@/components/LoginForm.vue'; // @ is an alias to /src

export default {
  components: {
    LoginForm
  },
}
</script>
