<template>
  <div class="content">
    <div class="sidebarcontainer">
      <div class="sidebarsection">
        <!-- Sidebar -->
        <div class="sidebar" :class="{ 'is-expanded': isMenuOpen }">
          
          <!-- Contact Section -->
          <div class="contact">
            <p :class="{ 'is-expanded': isMenuOpen }">Let's talk</p>
            <div class="svg" :class="{ 'is-expanded': isMenuOpen }">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="24" height="24">
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
              </svg>
            </div>
          </div>

          <!-- Menu Section -->
          <div class="menu">
            <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" active-class="active">
              <div class="home" @click="handleItemClick">
                <p :class="{ 'is-expanded': isMenuOpen }">{{ item.label }}</p>
              </div>
            </NuxtLink>
          </div>

          <!-- Socials Section -->
          <div class="socials">
            <p :class="{ 'is-expanded': isMenuOpen }">Instagram</p>
            <div>
              <p :class="{ 'is-expanded': isMenuOpen }">LinkedIn</p>
            </div>
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
        // border: solid green;
        background-color: #101010;
        width: 100%;
        height: 100dvh;
        // padding-inline: 1rem;
        outline: none; /* Remove the default outline */
        box-shadow: 0 0 0 0.1px ;   //remove outline and use box shadow for thinnest line 
        
  
  
    .sidebarsection {
        // height: 50rem;
        width: 100%;
        height: 100dvh;
        // border: solid red;
        
        .sidebar {
          padding-top: 9rem;
          // border: solid blue;
          height: 100%;
          padding-inline: 0.6rem;
          padding-bottom: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform: translateY(-15%);
          transition: all 1s ease-in-out;
          
          &.is-expanded {
            transform: translateY(0%);
            transition: all 0.8s ease-in-out;
  
                                                  
                          } 

          .contact {
            display: flex;
            align-items: bottom;
            gap: 0.2rem;
            position: absolute;
            // border: solid blue;
            overflow: hidden;

            p {

              color: $primarycolorwhite;
              font-size: 18px;
              transform: translateY(-100%);
              transition: all 0.8s ease-in-out;
              
              &.is-expanded {
                transform: translateY(0%);
            transition: all 0.8s ease-in-out;
  
                                                  
                          } 
            }

            .svg {
              transition: all 0.8s ease-in-out;
              transform: translateY(-100%);

  
              svg {
                fill: $primarycolorwhite;
                rotate: 135deg;
                width: 22px;
                height: 22px;
                // border: solid red;
                position: relative;
                top: 0.15rem;
            
                
                
              }
              &.is-expanded {
                transform: translateY(0%);

            transition: all 0.8s ease-in-out;
  
                                                  
                          } 

            }
            
          }
            .menu {
                // border: solid;
                display: flex;
                flex-direction: column;
                padding-bottom: 0.5rem;
                margin-top: 4.5rem;
                // gap: 1rem;
                .home {
                    // border: solid;
                    // padding-top: 0.5rem;
                    // border-radius: 0.5rem;
                    padding-bottom: 0.7rem;
                    display: flex;
                    // gap: 0.5rem;
                    align-items: center;
                    cursor: pointer;
                    // padding-inline: 0.5rem;
                  -webkit-tap-highlight-color: transparent;
                  overflow: hidden;

  
  
                    p {
                  -webkit-tap-highlight-color: transparent;
                  // border: solid red;
                  height: fit-content;
                  height: 3.6rem;
                  display: flex;
                  align-items: center;
                  transform: translateY(-100%);
  
                        font-size: 55px;
                        font-weight: 300;
                        color: $textcolorwhite;
                        letter-spacing: -3px;
                        transition: transform 0.8s cubic-bezier(0.95, 0.05, 0.2, 1);
 
                      }
                      
                    }
                    .active {
                  -webkit-tap-highlight-color: transparent;
                    border-radius: 0.5rem;
                    
                    p {
                      color: #888888;
                    }
  
                }


                    
                
            }
            .menu :nth-child(1) {

              p{

                &.is-expanded {
                    transform: translateY(0%);

                      transition: transform 0.95s cubic-bezier(0.95, 0.05, 0.2, 1);
                                            
                    }   
              }
            }
            .menu :nth-child(2) {

              p{

                &.is-expanded {
                    transform: translateY(0%);

                      transition: transform 0.95s cubic-bezier(0.95, 0.05, 0.2, 1);
                                            
                    }   
              }
            }
            .menu :nth-child(3) {

              p{

                &.is-expanded {
                    transform: translateY(0%);

                      transition: transform 1s cubic-bezier(0.95, 0.05, 0.2, 1);
                                            
                    }   
              }
            }
            .menu :nth-child(4) {

              p{

                &.is-expanded {
                    transform: translateY(0%);

                      transition: transform 1.05s cubic-bezier(0.95, 0.05, 0.2, 1);
                                            
                    }   
              }
            }
            .menu :nth-child(5) {

              p{

                &.is-expanded {
                    transform: translateY(0%);

                      transition: transform 1.1s cubic-bezier(0.95, 0.05, 0.2, 1);
                                            
                    }   
              }
            }

            .socials {
              overflow: hidden;
              // border: solid red;
              p {
                color: $primarycolorwhite;
                font-size: 18px;
                font-weight: 400;

                transform: translateY(-100%);
              transition: all 0.3s ease-in;
              
              &.is-expanded {
                transform: translateY(0%);
            transition: all 0.8s ease-in;
  
                                                  
                          } 
              }

              div {
                overflow: hidden;
                // border: solid blue;
                p {

                transform: translateY(-100%);
              transition: all 0.4s ease-in;
              
              &.is-expanded {
                transform: translateY(0%);
            transition: all 0.8s ease-in;
  
                                                  
                          } 
              }
              }
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
  
