
<template>
    <!-- v-if="showOverlay"  -->
      <div class="overlay">
        <div class="top" ref="top">
          
        </div>

      <div class="overlay-text">
        <div class="design">
          <h3>
            Curate.
          </h3>
        </div>
        <div class="meets">
          <h3>
            Elevate.
          </h3>
        </div>
        <div class="perf">
          <h3>
            Evolve.
          </h3>
        </div>
      </div>
    </div>
      
  </template>
  
  <style lang="scss" scoped>

@use "@/assets/sass/variables" as *; // Import variables
  
  
  
  
  .overlay {
    position: fixed;
    width: 100%;
    height: 100dvh;
    display: flex;
    overflow: hidden;
    
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    z-index: 9999;
    opacity: 1;
    transition: opacity 0.5s ease-out;
    // border: solid red;
    // background-color: white;
  
    .top {
      border :none;
      position:absolute;
      z-index: 4;
      top:0;
      left: 0;
      height: 100dvh;
      width: 100vw;
      background-color: $primarycolorwhite; /* Solid black background */
      // background-color: rgba(255, 255, 255, 0.057);
  
  
      
    }

  
    .overlay-text {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 5;
      
      gap:4px;
      // border: solid red;
      height: 2.5rem;
      overflow: hidden;
      gap: 0.5rem;
      color: $textcolorblack;
  
      .design {
        font-size: 16px;
        // border: solid red;
      }
      .meets {
        font-size: 16px;
        opacity: 0.2;

        
        // border: solid red;
      }
      .perf {
        font-size: 16px;
        opacity: 0.2;

        
        // border: solid red;
      }
  
    }
  
  
  }
  
  
  
  </style>
  
  <script setup>
  import {onMounted, ref} from 'vue';
  import gsap from "gsap";
  
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  
  
  gsap.registerPlugin(ScrollTrigger);
  
  
  
  
  let vomAnimation; // Store animation reference
  
  //use transition lifecyclehook to clean up animation
  
  
  // router.beforeEach((to, from, next) => {
  //   showOverlay.value = true; // Show transition screen
  
  
  const top = ref(null);
  
  onMounted(() => {
    
    vomAnimation = gsap.timeline({ defaults: { duration: 1.2 },  })
    .to(".design", {  opacity: 1 },) // O exits slightly before V finishes
    .to(".meets", {  opacity: 1 }, 0.3) // O exits slightly before V finishes
    .to(".perf", {  opacity: 1 }, 0.7) // M exits slightly before O finishes
    .to(".overlay-text", {  opacity: 0 }, 1.2) // M exits slightly before O finishes
    
    let topAnimation = gsap.timeline();
    topAnimation.fromTo(
  top.value, 
  { y: "0%" },  // Starting position
  { y: "100%", duration: 1.2, ease: "cubic-beizer(0.45, 0, 0.55, 1)" },  // Ending position
  1.8 // Delay before animation starts
);

  });

  
  
  </script>
  