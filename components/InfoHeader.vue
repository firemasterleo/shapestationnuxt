

<template>
    <div class="presection">
      <div class="section1">
        <div class="info">
          <div class="text">
            <p>New: Featured Pieces</p>
            <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
      
          </div>
      
        </div>
      </div>
    </div>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useToggle } from '@/composables/useToggle'
  import { useUserStore } from '@/stores/userStore';

  import { useCartStore } from '@/stores/cartStore';
  import { navigateTo } from '#app';
  
  // Use the composable for managing toggle state
  const { isMenuOpen, toggleMenu, closeMenu } = useToggle();
  const userStore = useUserStore();
  const cartStore = useCartStore();

  const showMenu = ref(false);
  // Function to close the menu when clicking a menu item
  const handleItemClick = () => {
    closeMenu(); // Ensures the menu closes on click
  };

  const handleUserClick = () => {
  if (!userStore.isAuthenticated) {
    navigateTo('/login');
  } else {
    showMenu.value = !showMenu.value; // Toggle user menu
  }
};


  </script>
  




<style lang="scss" scoped>
  @use "@/assets/sass/variables" as *; // Import variables

.presection {
    // background-color: rgb(45, 45, 49);
    // border: yellow solid;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;


    .section1 {
        // margin-inline: auto;
        // border: solid green;
        width: 80rem;
        height: 100%;
        // padding-inline: 1rem;
        overflow: hidden;
        display: flex;
        position: relative;
        background-color: $bg-secondary; /* Solid black background */





    }
}

@media (max-width: 800px) {
    .presection {
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid $line-grey;
        .section1 {
            width: 100%;
            .info {
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

        }
    }
}

</style>

