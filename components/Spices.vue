<template>
    <div class="sectioncontainer">
      <div class="section">
        <div>
    <h1>Our Products</h1>
    <div v-if="status === 'pending'">Loading...</div>
    <div v-if="error">Error loading products: {{ error }}</div>
    
    <ul v-if="products?.data?.length">
      <li v-for="product in products.data" :key="product.id">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description[0]?.children[0]?.text || "No Description" }}</p>
      <p>Price: ${{ product.price }}</p>
      <NuxtLink :to="`/product/${product.id}`">
          
          <img v-if="product.image?.url"
          :src="`http://localhost:1337${product.image.url}`"
          alt="Product Image">
        </NuxtLink>
          
      <!-- Add to Cart Button -->
        <button @click="cartStore.addToCart(product)">
          Add to Cart
        </button>
      </li>
    </ul>
  </div>
  
      </div>
    </div>
  </template>
  

  <script setup>
  import { useCartStore } from '@/stores/cartStore';
  const cartStore = useCartStore();

  const { data: products, status, error } = useFetch("http://localhost:1337/api/products?populate=*");
  
  // Debugging to see actual API response
  watchEffect(() => {
    console.log("Fetched Products:", products.value);
  });
  </script>

<style lang="scss" scoped>
    @use "@/assets/sass/variables" as *; // Import variables

.sectioncontainer {
  background-color: rgb(70, 96, 181); /* Solid black background */
  width: 100%;
  height: 100vh; /* Large enough to allow scrolling */
display: flex;


  .section {
  background-color: rgb(208, 193, 134); /* Solid black background */
    width: 80rem;
    height: 100vh; /* Full viewport height */
    margin-inline: auto;

  }
}



@media (max-width: 800px) {
  .sectioncontainer {
    .section {
      width: 100vw;
      height: 100vh;
    }
  }
}
@media (max-width: 1200px) and (min-width: 800px) {
  .sectioncontainer {
    .section {

    }
  }
}
</style>