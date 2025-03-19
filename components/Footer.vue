<template>
    <div class="footer-container">
      <div class="footer">
        <div class="top-container">
          <div class="left-container">
            <div class="menu">
              <NuxtLink to="/">
                <p>Home</p>
              </NuxtLink>
              <NuxtLink to="/work">
                <p>Work</p>
              </NuxtLink>
              <NuxtLink to="/about">
                <p>About</p>
              </NuxtLink>
              <NuxtLink to="/services">
                <p>Services</p>
              </NuxtLink>
              <NuxtLink to="/blog-page">
                <p>Resource</p>
              </NuxtLink>
            </div>
          </div>
          <div class="right-container">
            <div class="socials">
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>New business: <span>hello@shapestationdesigns.com</span></p>
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
                        <h1 class="s">S</h1>
                        <h1 class="h">h</h1>
                        <h1 class="a">a</h1>
                        <h1 class="p">p</h1>
                        <h1 class="e">e</h1>
                        <h1  class="s2">s</h1>
                        <h1 class="t">t</h1>
                        <h1  class="a2">a</h1>
                        <h1  class="t2">t</h1>
                        <h1 class="i">i</h1>
                        <h1 class="o">o</h1>
                        <h1 class="n">n</h1>
                    </div>

                </div>
        </div>
      </div>
    </div>
  </template>
  
  
<script setup>
import { ref, onMounted} from 'vue';



import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger"; // Ensure this import is correct

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const footer = ref(null);
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
  if (!footer.value) return; // Ensure the element exists

  let shapeAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: footer.value, // Bind Vue ref instead of class selector
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1, // Smooth animation with scroll
      markers: true, // Debugging (remove when done)
    },
    defaults: { duration: 1, ease: "power2.out" },
  });

  shapeAnimation
    .fromTo(".s", { y: -170 }, { y: 0 })
    .fromTo(".h", { y: -170 }, { y: 0 }, 0.1)
    .fromTo(".a", { y: -170 }, { y: 0 }, 0.14)
    .fromTo(".p", { y: -170 }, { y: 0 }, 0.14)
    .fromTo(".e", { y: -170 }, { y: 0 }, 0.18)
    .fromTo(".s2", { y: -170 }, { y: 0 }, 0.2)
    .fromTo(".t", { y: -170 }, { y: 0 }, 0.22)
    .fromTo(".a2", { y: -170 }, { y: 0 }, 0.24)
    .fromTo(".t2", { y: -170 }, { y: 0 }, 0.26)
    .fromTo(".i", { y: -170 }, { y: 0 }, 0.3)
    .fromTo(".o", { y: -170 }, { y: 0 }, 0.32)
    .fromTo(".n", { y: -170 }, { y: 0 }, 0.38);
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
   // border: solid blue;
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
       color: $textcolorwhite;
       // border: solid green;
       padding-inline: 0.5rem;
       // padding-bottom: 1rem;
       .top {
           // border: solid white;
           form {
               display: flex;
               flex-direction: column;
               p {
                   color: $textcolorwhite;
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

               color: $textcolorwhite;
               text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.1);
               // border: solid red;


           }

           }

       }


   }

}
@media (max-width: 800px) {
   
   .footer-container {
      background-color: $textcolorblack;
      width: 100%;
      height: fit-content;
  
      margin-inline: auto;
      // padding-top: 4rem;
   //    border: solid yellow;
      overflow: hidden;
      
      
      
      .footer {
          // padding-inline: 0.5rem;
          // margin-top: 20rem;
       //    border: solid red;
          padding-top: 6rem;
          height: 92vh;
           // height: 65rem;
   padding-inline: 1rem;

  
          
          width: 100%;
          background-color: $primarycolorblack; /* Solid black background */
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
          color: $textcolorwhite;
          // border: solid green;
          padding-inline: 0.5rem;
          .top {
              // border: solid white;
              form {
                  display: flex;
                  flex-direction: column;
                  p {
                      color: $textcolorwhite;
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
                  font-size: 13vw;
                  // font-size: 180px;
                  line-height: 1;
                  padding-bottom: 1.5rem;
  
                  color: $textcolorwhite;
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



