<template>

  <div class="content">
      <div class="sidebarcontainer">
      <div class="sidebarsection">
          <div class="sidebar">
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
  { label: 'Wall Art', path: '/Work' },
  { label: 'Sculptures & Carvings', path: '/Services' },
  { label: 'Home decor Accents', path: '/About' },
  { label: 'Textile & Fiber Art', path: '/Resources' },
  { label: 'Furnitures & Furniture Art', path: '/Resources' },
  { label: 'Lighting & Lamps', path: '/Resources' },
  { label: 'Cultural & Traditional Artifacts', path: '/Resources' },
  { label: 'Account', path: '/Resources' },
  { label: 'Help', path: '/Resources' },
  // { label: 'Contact us', path: '/BlogPage' }
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
      width: 23rem;
      height: 40rem;
      // padding-inline: 1rem;
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
              padding-top: 2rem;
              // gap: 1rem;
              div {
                  // border: solid ;
                  padding-top: 0.5rem;
                  // border-radius: 0.5rem;
                  padding-bottom: 0.5rem;
                  display: flex;
                  gap: 0.5rem;
                  align-items: center;
                  cursor: pointer;
                  height: 3.5rem;
                  border-bottom: solid 1px black ;
                  
                  
                  p {
                    -webkit-tap-highlight-color: transparent;
                    
                    padding-left: 1.5rem;
                      font-size: 16px;
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


