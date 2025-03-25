<template>
    <div class="sectioncontainer">
      <div class="section">
        <div class="image">
                    <img :src="imageStore.heroImage" loading="eager" decoding="async" />

                    </div>
  
      </div>
    </div>
  </template>
  

<script script setup>

import { useImageStore } from '../stores/imageStore';

const imageStore = useImageStore();

</script>

<style lang="scss" scoped>
    @use "@/assets/sass/variables" as *; // Import variables

.sectioncontainer {
  // background-color: rgb(70, 96, 181); /* Solid black background */
  width: 100%;
  // height: 100vh; /* Large enough to allow scrolling */
display: flex;


  .section {
    background-color: rgb(231, 229, 227); /* Solid black background */
    width: 80rem;
    height: 100vh; /* Full viewport height */
    margin-inline: auto;

    

  }
}



@media (max-width: 800px) {
  .sectioncontainer {
    .section {
      width: 100vw;
      height:85vh;
      // border: solid green;
      overflow: hidden;
      .image {
    width: 100%;
    height: 80vh;
    // border: solid red;
    overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                // border: solid blue;
                transform: translateX(150px);
            }
        }
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