<template>
    <div class="footer-container">
      <ul class="contact">
        <li class="getintouch">GET IN TOUCH</li>
        <li class="contact-days">Mon - Fri: 8 am - 8 pm GMT</li>
        <li class="contact-days">Saturdays: 11 am - 4 pm GMT</li>
        <li class="contact-add"><a href="tel:2347060599246">Call Us: <span> +234 70 659 9246</span> </a></li>
        <li class="contact-add"><a href="mailto:assistant@ojuafrica.com">Email Us:<span> assistant@ojuafrica.com</span></a></li>

      </ul>
      <div class="newsletter">
        <div>
          <h2>Become an Insider</h2>
          <p>Stay inspired with exclusive collections and more</p>

        </div>
        <form name="newsletter" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
              <input type="hidden" name="form-name" value="newsletter" />
              <input type="hidden" name="bot-field" />
              <div class="input-container">
                <input type="email" id="email" name="email" placeholder="Enter email address" required />
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" width="24" height="24">
                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                  </svg>
                </button>
              </div>
            </form>
      </div>
      <div class="footer">
        <div class="top-container">
          <div class="left-container">
            <div class="menu">
              <NuxtLink to="/">
                <p>Home</p>
              </NuxtLink>
              <NuxtLink to="/">
                <p>Work</p>
              </NuxtLink>
              <NuxtLink to="/">
                <p>About</p>
              </NuxtLink>
              <NuxtLink to="/">
                <p>Services</p>
              </NuxtLink>
              <NuxtLink to="/">
                <p>Resource</p>
              </NuxtLink>
            </div>
          </div>
          <div class="right-container">
            <div class="socials">
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>New business: <span>hello@ojuafrica.com</span></p>
            </div>
            <div class="terms">
              <p>Terms of use</p>
              <p>&copy; 22-25</p>
            </div>
          </div>
        </div>
        <div class="bottom-container">
          <div class="top">
            <form name="newsletter" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
              <input type="hidden" name="form-name" value="newsletter" />
              <input type="hidden" name="bot-field" />
              <p>Sign up for our newsletter</p>
              <label for="email">(No spam)</label>
              <div class="input-container">
                <input type="email" id="email" name="email" placeholder="Email" required />
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" width="24" height="24">
                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                  </svg>
                </button>
              </div>
            </form>
            <div v-if="isSubmitted" class="thank-you-message">
              <h2>Thank You for Submitting!</h2>
              <p>We appreciate your subscription.</p>
            </div>
          </div>
          <div class="bottom">
                    <div class="shape-footer">
                        <h1 class="s">O</h1>
                        <h1 class="h">j</h1>
                        <h1 class="a">ú</h1>
                        <h1 class="p">A</h1>
                        <h1 class="e">f</h1>
                        <h1  class="s2">r</h1>
                        <h1 class="t">i</h1>
                        <h1  class="a2">c</h1>
                        <h1  class="t2">a</h1>
                        <!-- <h1 class="i">i</h1>
                        <h1 class="o">o</h1>
                        <h1 class="n">n</h1> -->
                    </div>

                </div>
        </div>
      </div>
    </div>
  </template>
  
  
<script setup>
import { ref, onMounted} from 'vue';
import { useNuxtApp } from "#app";



const { $gsap, $ScrollTrigger } = useNuxtApp(); // Access GSAP & ScrollTrigger


const isSubmitted = ref(false); // Track if the form has been submitted


const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent the default form submission
  
  const formData = new FormData(event.target);

  try {
    const response = await fetch("/", {
      method: "POST",
      body: formData,
    });

    // Handle the response (if success, show the thank you message)
    if (response.ok) {
      isSubmitted.value = true; // Show the Thank You message
    } else {
      alert("Sorry, there was an error with your submission. Please try again.");
    }
  } catch (error) {
    alert("Error: " + error);
  }
};
onMounted(() => {
  // Ensure elements exist before running animation
  const shapeFooter = document.querySelector(".shape-footer");
  if (!shapeFooter) return;

  // Register ScrollTrigger
  $gsap.registerPlugin($ScrollTrigger);

  let shapeAnimation = $gsap.timeline({
    scrollTrigger: {
      trigger: shapeFooter, // Use the element reference
      start: "top bottom",
      end: "bottom bottom",
      scrub: false, // Set to true if you want scroll-based animation
      // markers: true, // Enable for debugging
    },
    defaults: { duration: 0.9, ease: "power2.out" }
  });

  // Apply animations to individual letters
  shapeAnimation
    .fromTo(".shape-footer .s", { y: -170 }, { y: 0 })
    .fromTo(".shape-footer .h", { y: -170 }, { y: 0 }, 0.1)
    .fromTo(".shape-footer .a", { y: -170 }, { y: 0 }, 0.14)
    .fromTo(".shape-footer .p", { y: -170 }, { y: 0 }, 0.18)
    .fromTo(".shape-footer .e", { y: -170 }, { y: 0 }, 0.2)
    .fromTo(".shape-footer .s2", { y: -170 }, { y: 0 }, 0.22)
    .fromTo(".shape-footer .t", { y: -170 }, { y: 0 }, 0.24)
    .fromTo(".shape-footer .a2", { y: -170 }, { y: 0 }, 0.26)
    .fromTo(".shape-footer .t2", { y: -170 }, { y: 0 }, 0.28)
    // .fromTo(".shape-footer .i", { y: -170 }, { y: 0 }, 0.3)
    // .fromTo(".shape-footer .o", { y: -170 }, { y: 0 }, 0.32)
    // .fromTo(".shape-footer .n", { y: -170 }, { y: 0 }, 0.38);
});
</script>
<style lang="scss" scoped>
@use "@/assets/sass/variables" as *; // Import variables


.footer-container {
   background-color: #151211;
   width: 100%;
   min-height: 40rem;
   height: fit-content;


   margin-inline: auto;
   // padding-top: 4rem;
  //  border: solid blue;
   overflow: hidden;
   // padding-bottom: 1rem;
   
   
   
   .footer {
       padding-top: 6rem;
       height: 100%;
       width: 100%;
       background-color: $primarycolorblack; /* Solid black background */
       display: flex;
       flex-direction: column;
       justify-content: space-between;
   padding-inline: 2.5rem;
   .contact {

   }


       


   }
   


   .top-container {
       display: flex;
       // height: 16.5rem;
   // border: solid red;
   // padding-inline: 0.5rem;
   height: fit-content;
   // border: solid red;


       .left-container {
           width: 50%;
           height: fit-content;

           .menu {
           -webkit-tap-highlight-color: transparent;
           // border: solid green;

               p {
                   // border: solid red;
                   font-size: 30px;
                   margin-top: -0.5rem;
                   color: $textcolorwhite;
                   
               }
           }



       }
       
       .right-container {
           width: 50%;
           height: 100%;
           font-size: 16px;
           font-weight: 400;
           color: #7e848a;
           color: $textcolorwhite;
           // border: solid red;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           
           .socials {
               display: flex;
               flex-direction: column;
               gap: 0.3rem;

   
           }
       }
   }

   
   
   .bottom-container {
       width: 100%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       margin-inline: auto;
       font-size: 12px;
       // border: solid green;
       padding-inline: 0.5rem;
       // padding-bottom: 1rem;
       .top {
           // border: solid white;
           form {
               display: flex;
               flex-direction: column;
               p {
                color: $text-dark;
                font-size: 16px;

                   
                   
               }
               label {
                   color: $textcolorwhite;
                   font-size: 16px;

               }
               .input-container {
                   // border: solid blue;
                   position: relative;
                   width: 100%;
                   display: flex;
                   align-items: center;
                   height: fit-content;

                   input {
                       // font-size: 20px;
                       background-color: $primarycolorblack;
                       width: 100%;
                       border: none;
                       padding: 10px 45px 10px 15px; /* Left padding normal, Right padding for button */

                       font-size: 16px;
                       outline: none;
                       height: 45px;
                       color: $textcolorwhite;
                       // border: solid green;
                       // position: relative;

                   }
                   button {
                       background-color: $primarycolorblack;
                       border: none;
                       // border: solid red;
                       position: relative;
                       right: 0;
                       top: 0;
                       height: fit-content;
                       height: 100%;


                       svg {
                           fill: $textcolorwhite;
                           // border: solid red;
                       background-color: $primarycolorblack;
                       rotate: 180deg;
                       height: 18px;
                       width: 18px;
                       // border: solid blue;


                       }

                   }
               }
           }
           
       }
       .bottom {
           padding-top: 3rem;
           // padding-bottom: 3rem;
           // border: solid red;
           border-top: solid 1px $textcolorwhite;
           .shape-footer {
               display: flex;
           align-items: center;
           justify-content: center;
           margin-inline: auto;
           overflow: hidden;

           //   border: solid red;

           
           h1 {
               font-size: 13dvw;
               // font-size: 180px;
               // line-height: 1;
               padding-bottom: 1.5rem;

               color: $text-dark;
               text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.1);
               // border: solid red;


           }

           }

       }


   }

}
@media (max-width: 800px) {
   
   .footer-container {
      background-color: $bg-white;
      width: 100%;
      height: fit-content;
  
      margin-inline: auto;
      // padding-top: 4rem;
   //    border: solid yellow;
      overflow: hidden;
      
      
      .contact {
        height: 16rem;
        // border: solid;
        background-color: $bg-offwhite;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        align-items: center;
        justify-content: center;
        color: $text-dark;
        .getintouch {
          font-size: 16px;
        color: $text-dark;
        font-weight: 700;

        }
        .contact-days {
          font-size: 14px;
          color: $text-dark;
        }
        .contact-add {
          display: flex;
          gap: 5px;
          font-size: 14px;
          color: $text-dark;
          a {
            color: $text-dark;
            text-decoration: none;
          }
          span {
            color: $text-accent;
            // text-decoration: none !important;
            // -webkit-text-fill-color: $text-accent; // Ensures override in Safari


          }

        }
        :nth-child(4) {
          margin-top:1.5rem;
        }

      }
      .newsletter {
        height: 13rem;
        background-color: $bg-cream;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        // align-items: center;
        justify-content: center;
        color: $text-dark;
        padding-inline: 1rem;

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            font-size: 14px;
          }

        }

        form {
                  display: flex;
                  flex-direction: column;
                  h2 {
                  font-size: 20px;


                  }
                  p {
                    color: $text-dark;
                    font-size: 14px;
  
                      
                      
                  }
                  label {
                    color: $text-dark;
                    font-size: 16px;
  
                  }
                  .input-container {
                      // border: solid blue;
                      position: relative;
                      width: 100%;
                      display: flex;
                      align-items: center;
                      height: fit-content;
  
                      input {
                          // font-size: 20px;
                          background-color: $bg-white;
                          width: 100%;
                          border: none;
                          padding: 10px 45px 10px 15px; /* Left padding normal, Right padding for button */
  
                          font-size: 16px;
                          outline: none;
                          height: 45px;
                          color: $text-dark;
                          // border: solid green;
                          // position: relative;
  
                      }
                      button {
                          background-color: $bg-white;
                          border: none;
                          // border: solid red;
                          position: absolute;
                          right: 0;
                          top: 0;
                          height: fit-content;
                          height: 100%;
  
  
                          svg {
                              fill: $text-dark;
                              // border: solid red;
                          background-color: $bg-white;
                          rotate: 180deg;
                          height: 18px;
                          width: 18px;
                          // border: solid blue;
                          // position: absolute;
                          // right: 0;
  
  
                          }
  
                      }
                  }
              }

      }
      .footer {
          // padding-inline: 0.5rem;
          // margin-top: 20rem;
       //    border: solid red;
          padding-top: 6rem;
          height: 92vh;
           // height: 65rem;
   padding-inline: 1rem;

  
          
          width: 100%;
          background-color: $bg-white;
          color: $text-dark;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
  
          
  
  
      }
      
   
  
      .top-container {
          display: flex;
          // height: 16.5rem;
      // border: solid red;
      padding-inline: 0.5rem;
      height: fit-content;
   //    border: solid red;
  
  
          .left-container {
              width: 50%;
              height: fit-content;
  
              .menu {
              -webkit-tap-highlight-color: transparent;
              // border: solid green;
  
                  p {
                      // border: solid red;
                      font-size: 30px;
                      margin-top: -0.5rem;
                      color: $text-dark;
                      
                  }
              }
  
  
  
          }
          
          .right-container {
              width: 50%;
              height: 100%;
              font-size: 16px;
              font-weight: 400;
              color: #7e848a;
              color: $text-dark;
              // border: solid red;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              
              .socials {
                  display: flex;
                  flex-direction: column;
                  gap: 0.3rem;


                  p {
                   span {
                       font-size: 12px;
                   }
                  }
  
      
              }
          }
      }
  
      
      
      .bottom-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-inline: auto;
          font-size: 12px;
          color: $text-dark;
          // border: solid green;
          padding-inline: 0.5rem;
          .top {
              // border: solid white;
              form {
                  display: flex;
                  flex-direction: column;
                  p {
                    color: $text-dark;
                    font-size: 16px;
  
                      
                      
                  }
                  label {
                    color: $text-dark;
                    font-size: 16px;
  
                  }
                  .input-container {
                      // border: solid blue;
                      position: relative;
                      width: 100%;
                      display: flex;
                      align-items: center;
                      height: fit-content;
  
                      input {
                          // font-size: 20px;
                          background-color: $bg-white;
                          width: 100%;
                          border: none;
                          padding: 10px 45px 10px 15px; /* Left padding normal, Right padding for button */
  
                          font-size: 16px;
                          outline: none;
                          height: 45px;
                          color: $text-dark;
                          // border: solid green;
                          // position: relative;
  
                      }
                      button {
                          background-color: $bg-white;
                          border: none;
                          // border: solid red;
                          position: relative;
                          right: 0;
                          top: 0;
                          height: fit-content;
                          height: 100%;
  
  
                          svg {
                              fill: $text-dark;
                              // border: solid red;
                          background-color: $bg-white;
                          rotate: 180deg;
                          height: 18px;
                          width: 18px;
                          // border: solid blue;
  
  
                          }
  
                      }
                  }
              }
              
          }
          .bottom {
              padding-top: 3rem;
              // border: solid red;
              border-top: solid 1px $text-dark;
              .shape-footer {
                  display: flex;
              align-items: center;
              justify-content: center;
              margin-inline: auto;
              overflow: hidden;
  
              //   border: solid red;
  
              
              h1 {
                  font-size: 13vw;
                  // font-size: 180px;
                  line-height: 1;
                  padding-bottom: 1.5rem;
  
                  color: $text-dark;
                  text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.1);
                  // border: solid red;
  
  
              }
  
              }
  
          }
  
  
      }
  
  }
}
@media screen and (max-height: 500px) {
   .footer-container {
       .footer {
       height: 46rem;
   }

}
}
</style>



