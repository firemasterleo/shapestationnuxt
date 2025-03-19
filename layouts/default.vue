<template>
    <div>
      <!-- Side Panel -->
      <div class="sidepanel" :class="{ 'is-expanded': isMenuOpen }">
        <SidePanel />
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
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
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
  <style lang="scss">
  
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
      width: 100vw;
      height: 0dvh;
      border-radius: 0.6rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      overflow-y: hidden;
      position: fixed;
      z-index: 24;
      visibility: hidden;
      background-color: #101010;
      transition: all 0.8s cubic-bezier(0.95, 0.05, 0.2, 1);
  
      &.is-expanded {
        transition: all 0.7s cubic-bezier(0.95, 0.05, 0.05, 1);
        height: 100dvh;
        visibility: visible;
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
        transition: opacity 0.5s ease-in;
      }
    }
  }
  </style>
  