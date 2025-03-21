<template>
    <div class="presection">
      <div class="section1">
        <div class="desktop-header">
          <!-- Logo -->
          <NuxtLink to="/" class="logo" @click="handleItemClick">
            <h1>NaijaHaven</h1>
          </NuxtLink>
  
          <!-- Navigation Bar -->
          <nav class="nav-bar" v-if="!isMobile">
            <ul class="nav-links">
              <div class="nav-item">
                <NuxtLink to="/work"><p>Work</p></NuxtLink>
              </div>
              <div class="nav-item">
                <NuxtLink to="/about"><p>About</p></NuxtLink>
              </div>
              <div class="nav-item">
                <NuxtLink to="/services"><p>Services</p></NuxtLink>
              </div>
              <div class="nav-item">
                <NuxtLink to="/contact"><p>Contact</p></NuxtLink>
              </div>
              <div class="nav-item">
                <NuxtLink to="/blog"><p>Blog</p></NuxtLink>
              </div>
            </ul>
          </nav>

        </div>
        <div class="mobile-header">
          <!-- Logo -->

          <div class="left">

  
          <!-- Hamburger Menu -->
          <div class="hamburger" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <NuxtLink to="/" class="logo" @click="handleItemClick">
      <h1>NaijaHaven</h1>
    </NuxtLink>
          </div>
  
      
        <NuxtLink class="cart" to="/cart" >
      
              <div class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M104,216a16,16,0,1,1-16-16A16,16,0,0,1,104,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,192,200ZM239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM221.47,80H61.64l22.81,82.14A8,8,0,0,0,92.16,168H191a8,8,0,0,0,7.71-5.86Z"></path></svg>
                <h1>
                      {{ cartStore.totalItems }}
      
                    </h1>
              </div>
 
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useToggle } from '@/composables/useToggle'
  import { useCartStore } from '@/stores/cartStore';
  
  // Use the composable for managing toggle state
  const { isMenuOpen, toggleMenu, closeMenu } = useToggle();
  
  // Function to close the menu when clicking a menu item
  const handleItemClick = () => {
    closeMenu(); // Ensures the menu closes on click
  };

const cartStore = useCartStore();

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



        .desktop-header {
            

            // border: solid red;
            // width: 62rem;
            width: 100%;
            background-color: $primarycolorblack; /* Solid black background */

            // backdrop-filter: blur(20px);
            height: 3.2rem;
            // border-radius: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
            -webkit-tap-highlight-color: transparent;
            position: relative;
            
            .logo {
                // borderight: solid 2px #7cae65;
                // border: solid red;
                padding-right: 1rem;
                // letter-spacing: 6px;
                // font-size: 10px;
                // position: relative; /* Ensure proper layering */
                // background: transparent;
                top: 1.2rem;
                position: fixed;
                z-index: 25;
                mix-blend-mode: difference;
                color: $textcolorwhite;
                
                
                
                h1 {
                    // z-index: 200;
                    // position: relative; /* Ensure it stays in front */
                    // z-index: 2; /* Ensures it stays in front */
                    cursor: pointer; /* Make it behave like a button */
                    font-size: 18px;
                    // font-variant-caps: all-small-caps; /* To make uppercase match lowercase in height */
                    line-height: 1.2; /* Adjust as needed */
                    font-weight: 400;
                    
                    
                }
                h1:active {
                    transform: scale(1.1);
                }
            }

            .nav-bar {
                // border: solid red;
                // width: 100%;
                display: flex;
                justify-content: right;

                .nav-links {
                    display: flex;
                    gap: 3rem;
                    // width: 30rem;
                    min-width: fit-content;
                    overflow: hidden;
                    position: fixed;
                    z-index: 25;
                    mix-blend-mode: difference;
                    color: $textcolorwhite;
            top: 1.2rem;

                    .nav-item {
                        flex-shrink: 0;
                        position: relative;
                        // border : solid black;
                        // padding-inline: 0.2rem;
                        
                        
                        
                        
                        p {
                            -webkit-tap-highlight-color: transparent;
                            font-size: 14px;
                            font-weight: 600;
                            letter-spacing: 1px;
                            font-family: "Poppins", serif;
                            cursor: pointer;
                            color: $textcolorwhite;
                            // border-bottom: solid 1.5px;
                        }
                        p:active {
                            transform: scale(1.1);
                        }
                    }
                }
            }          
        }
        .mobile-header {
          display: none;
        }
    }
}

@media (max-width: 800px) {
    .presection {
        .section1 {
            width: 100%;
            .desktop-header {
              display: none;
            }
            .mobile-header {
                width: 100%;
                // border: solid red;
                display: flex;
                justify-content: space-between;
                height: 3.2rem;


                .left {
                  // border: solid blue;
                  width: fit-content;
                  .logo {
                // borderight: solid 2px #7cae65;
                // border: solid red;
                padding-right: 1rem;
                // letter-spacing: 6px;
                // font-size: 10px;
                // position: relative; /* Ensure proper layering */
                // background: transparent;
                top: 1.2rem;
                left: 3rem;
                position: fixed;
                z-index: 25;
                mix-blend-mode: difference;
                color: $textcolorwhite;
                
                
                
                h1 {
                    // z-index: 200;
                    // position: relative; /* Ensure it stays in front */
                    // z-index: 2; /* Ensures it stays in front */
                    cursor: pointer; /* Make it behave like a button */
                    font-size: 18px;
                    // font-variant-caps: all-small-caps; /* To make uppercase match lowercase in height */
                    line-height: 1.2; /* Adjust as needed */
                    font-weight: 400;
                    
                    
                }
                h1:active {
                    transform: scale(1.1);
                }
            }

                  .hamburger {
                -webkit-tap-highlight-color: transparent;
                
                // border: solid red;
                position: relative;
                z-index: 25;
      
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
                justify-content: center;
                background-color: none;
                align-items: flex-end;
                cursor: pointer;
      
                width: 2.5rem;
                padding-right:0.5rem ;
      
                height: 3rem;
                position: fixed;
                top: 0.3rem;
             
                mix-blend-mode: difference;
                color: $textcolorwhite;
      
      
        
                .bar {
                    width: 19px;
                    height: 2px;
                    // background-color: rgba(255, 255, 255, 0.413);
                    background-color: rgb(255, 255, 255);
      
      
                    transition: transform 0.3s, opacity 0.3s;
                    
                  }
                &.is-active {
                    
                    
                    .bar:nth-child(1) {
                        // background-color: rgba(255, 255, 255, 0.413);
      
                        transform: translateY(6px) rotate(45deg);
                      }
                    .bar:nth-child(2) {
                        // background-color: rgba(255, 255, 255, 0.413);
      
                        opacity: 0; }
                    .bar:nth-child(3) {
                        // background-color: rgba(255, 255, 255, 0.413);
      
                        transform: translateY(-6px) rotate(-45deg);
                    }
      
                }
        }
                }

                  .cart {
                    position: fixed;
                z-index: 25;
                mix-blend-mode: difference;
                right: 0.5rem;
                
                    
                    
                    .svg {
                      display: flex;
                      // border: solid green;
                      width:3.5rem;
                      overflow: hidden;
                      position: relative;
                      svg {
                        fill: $textcolorwhite;
                        width: 50px;
                        height: 50px;
                        
                      }
                      h1 {
                        
                        color: $textcolorwhite;
                        font-size: 14px;
                        position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -55%);

                      }

                    }
                  
                }

            }
        }
    }
}
</style>

