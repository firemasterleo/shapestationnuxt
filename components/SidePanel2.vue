<template>

  <div class="content">
      <div class="sidebarcontainer">
      <div class="sidebarsection">
          <div class="sidebar">
            <div class="logo">
              <h1>From Africa with Love</h1>
            </div>
          <!-- Menu Section -->
          <div class="menu">
            <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" active-class="active">
              <div class="home" @click="handleItemClick">
                <p :class="{ 'is-expanded': isMenuOpen }">{{ item.label }}</p>
              </div>
            </NuxtLink>
          </div>
                 
          </div>
      </div>
      </div>
  </div>
</template>

<script setup>
import { useToggle } from '~/composables/useToggle';

const { isMenuOpen, closeMenu } = useToggle();

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Categories', path: '/Work' },
  { label: 'Best Sellers', path: '/Services' },
  { label: 'About Us', path: '/About' },
  { label: 'Naija Culture', path: '/Resources' },
  { label: 'Contact us', path: '/BlogPage' }
];

// Close sidebar when a menu item is clicked
const handleItemClick = () => {
  closeMenu();
};
</script>


<style lang="scss" scoped>
    @use "@/assets/sass/variables" as *; // Import variables



.content {
  // border: solid green ;
  // overflow: hidden;
  
  .sidebarcontainer {
      // border: solid red;
      background-color: $primarycolorwhite; /* Solid black background */
      width: 100%;
      height: 40rem;
      padding-inline: 1rem;
      outline: none; /* Remove the default outline */
      box-shadow: 0 0 0 0.1px ;   //remove outline and use box shadow for thinnest line 
      


  .sidebarsection {
      // height: 50rem;
      width: 100%;
      // border: solid red;
      
      .sidebar {
        display: flex;
        flex-direction: column;
        gap: 2rem;
          // padding-top: 1.5rem;
          // border: solid blue;
          .logo {
            padding-left:1rem ;
            // letter-spacing: 6px;
                font-size: 12px;
                position: relative; /* Ensure proper layering */
                background: transparent;
                // border: solid;
                height: 3.2rem;
                display: flex;
                align-items: center;

                h1 {
                    color: $primarycolorblack;
                    position: relative; /* Ensure it stays in front */
          /* Make it behave like a button */
                }
          }
          .menu {
              // border: solid;
              display: flex;
              flex-direction: column;
              border-bottom: solid 1px rgba(255, 255, 255, 0.162);
              padding-bottom: 0.5rem;
              // gap: 1rem;
              div {
                  // border: solid;
                  padding-top: 0.5rem;
                  border-radius: 0.5rem;
                  padding-bottom: 0.5rem;
                  display: flex;
                  gap: 0.5rem;
                  align-items: center;
                  cursor: pointer;
                  padding-inline: 0.5rem;


                  p {
                -webkit-tap-highlight-color: transparent;

                      font-size: 20px;
                      font-weight: 500;
                      color: $primarycolorblack;
                    }
                    p:active {
                      
                      color: $primarycolorblack;
                  }

              }

              // .active {
              //     border-radius: 0.5rem;
              //     background-color: $primarycolorblack;

              //     p {
              //         color: $bgcolordeepwhite;
              //     }

              // }
              
          }
          }
          }
          }

        


}


@media (max-width: 800px) {
  .content {

      .sidebarcontainer {
          // width: fit-content;
          height: 100vh;
      }
  }

} 




</style>


