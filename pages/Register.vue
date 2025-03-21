<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <input v-model="username" placeholder="Username" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
      </form>
    </div>
  </template>


<script setup>
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';
import { useRoute, navigateTo } from '#app';

const userStore = useUserStore();
const username = ref('');
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const route = useRoute(); // ✅ Capture current route

// If the user is already logged in, redirect them
if (userStore.isAuthenticated) {
  const redirectPath = route.query.redirect || '/profile'; // Go to intended page or profile
  navigateTo(redirectPath);
}


const handleRegister = async () => {
  const { error } = await userStore.register(username.value, email.value, password.value);

  if (!error.value) {
    // ✅ Redirect back to checkout if coming from there, otherwise go to profile
    const redirectPath = route.query.redirect || '/profile';
    navigateTo(redirectPath);
  } else {
    errorMsg.value = 'Registration failed';
  }
};
</script>


<style scoped>
div {
  color: white;
}
button {
  margin: 5px;
}
</style>