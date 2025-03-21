<template> 
    <div class="prompt">
      <h2>Login or Register to Continue</h2>
      <p>You need an account to proceed with your purchase.</p>
      <NuxtLink to="/login">
        <button>Login</button>
      </NuxtLink>
      <NuxtLink to="/register">
        <button>Register</button>
      </NuxtLink>
    </div>
  </template>
  
  <style scoped>
  .prompt {
    color: white;
  }
  button {
    margin: 5px;
  }
  </style>

<script setup>
import { useRoute } from '#app';

const route = useRoute();
navigateTo(`/login?redirect=${encodeURIComponent(route.query.redirect || '/profile')}`);


console.log('Redirect Query:', route.query.redirect); // ✅ Debugging to check if redirect is passed
</script>