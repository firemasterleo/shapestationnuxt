
<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <div class="item" v-if="cartStore.cart.length">
      <ul >
        <li v-for="item in cartStore.cart" :key="item.id">
          <h2>{{ item.name }}</h2>
          <img v-if="item.image?.url"
       :src="`http://localhost:1337${item.image.url}`"
       alt="Product Image">
          <p>Price: ${{ item.price }}</p>
          
        <!-- Quantity Controls -->
        <button @click="cartStore.decreaseQuantity(item.id)">-</button>
        <span>{{ item.quantity }}</span>
        <button @click="cartStore.increaseQuantity(item.id)">+</button>
  
        <!-- Remove Item -->
        <button @click="cartStore.removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total: ${{ cartStore.cartTotal }}</p>
      <button @click="handleCheckout">Proceed to Checkout</button>

    </div>
    <p v-else>Your cart is empty</p>

  </div>
</template>
  
  <script setup>
import { useUserStore } from '@/stores/userStore';
import { useCartStore } from '@/stores/cartStore';
import { useRoute, navigateTo } from '#app';

const userStore = useUserStore();
const cartStore = useCartStore();
const route = useRoute();


const handleCheckout = () => {
  if (!userStore.isAuthenticated) {
    console.log("Redirecting to auth-prompt with Checkout as redirect..."); // Debugging
    navigateTo(`/auth-prompt?redirect=${encodeURIComponent('/Checkout')}`);
  } else {
    navigateTo('/Checkout');
  }
};
  </script>


<style lang="scss" scoped>
div {
  color: white;
}
</style>