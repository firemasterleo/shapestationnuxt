<template>
  <div class="info-header">
    <div class="text">
      <p>New: Feature Pieces</p>
      <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>

    </div>

  </div>
    <div>
        <Header />

      <!-- Side Panel -->
      <div class="sidepanel" :class="{ 'is-expanded': isMenuOpen }">
        <SidePanel2 />
      </div>
  
      <!-- Overlay (closes menu when clicked) -->
      <div
        class="sidepanel-overlay"
        :class="{ 'is-expanded': isMenuOpen }"
        @click="closeMenu"
      ></div>
  
      <!-- Page Transition -->
      <NuxtPage />
    </div>

    <Footer/>
 

  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';


  import { useToggle } from "~/composables/useToggle";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);
  
  // Use global toggle composable
  const { isMenuOpen, toggleMenu, closeMenu } = useToggle();
  
  // GSAP Cleanup to prevent memory leaks
  const cleanupAnimations = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf("*");
    gsap.globalTimeline.clear();
  };
  
  onMounted(() => {
    console.log("Default layout mounted");
  });
  
  onBeforeUnmount(() => {
    cleanupAnimations();
  });
  </script>
  <style lang="scss" scoped>
  @use "@/assets/sass/variables" as *; // Import variables

  .info-header {
    background-color: $bg-secondary;
    height: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  
    .text {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      
      p {
        color: $text-muted;
        font-size: 16px;
        font-weight: 300;

      }
      svg {
        fill: $text-muted;
        rotate: 180deg;

      }
    }

  }
  
  .fade-enter-active,
  .fade-leave-active {
    opacity: 1;
    transition: all 300ms ease-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .sidepanel {
    display: none;
  }
  
  @media (max-width: 800px) {

    .sidepanel {

// opacity: 0;
// visibility: hidden;
// border: solid red;
width: 21rem;
height: 100vh;
transform: translatex(-100%);
// padding-top: 6rem;
// padding-left: 1.5rem;
// border-radius: 0.6rem;
display: flex;
flex-direction: column;
gap: 1.2rem;
overflow-y: hidden;
// z-index: 0;
position: fixed;
// top: 3rem;
z-index: 24;
opacity: 0;

// visibility: hidden;
// border: solid red;


&.is-expanded {
  // transition: all 0.35s; 
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1) ; 
  opacity: 1;
transform: translatex(0%);
}

    }
    .sidepanel-overlay {
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.658);
      position: fixed;
      bottom: 0;
      z-index: 10;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease-out, visibility 0s linear 0.5s;
  
      &.is-expanded {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.3s ease-in;
      }
    }
  }


  </style>
  