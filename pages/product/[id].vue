<template>
    <div v-if="product" class="product">
      <h1>{{ product.name }}</h1>
      <img v-if="product.image?.data?.attributes?.url" 
           :src="`http://localhost:1337${product.image.data.attributes.url}`" 
           alt="Product Image">
           <p v-if="product.description">
  {{ product.description[0]?.children[0]?.text || "No description available" }}
</p>
      <p>Price: ${{ product.price }}</p>
      <button @click="cartStore.addToCart(product)">Add to Cart</button>
    </div>
    <p v-else>Loading...</p>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { useFetch } from '#app';
  import { useCartStore } from '@/stores/cartStore';
  import { computed } from 'vue';
  
  const cartStore = useCartStore();
  const route = useRoute();
  const productId = route.params.id;
  
  const { data } = useFetch(`http://localhost:1337/api/products?filters[id][$eq]=${productId}&populate=*`);
  const product = computed(() => data.value?.data?.[0] || null);
  </script>


<style lang="scss" scoped>
.product {
    color: white;
    border: solid red;
}
</style>
