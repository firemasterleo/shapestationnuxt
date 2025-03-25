
<template>
  <div class="sectioncontainer">
    <div class="section">
      <div class="cart">

        <div class="back">
          <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
          
          back to shop
        </div>
        <div class="checkout">
          <p ><span class="sub">Subtotal</span><sup>$</sup> <span class="total">{{ cartStore.cartTotal }}</span> </p>
          <button @click="handleCheckout">Proceed to Checkout({{ cartStore.totalItems }} items)</button>
    
        </div>
        <div class="item" v-if="cartStore.cart.length">
          <ul >
            <li v-for="item in cartStore.cart" :key="item.id">
              <div class="top">
                <div class="image">
                  <img 
                  v-if="item.image?.url"
                  :src="`${item.image.url}?width=500`"
                  alt="Product Image"
                  >
                  
                </div>
                <div class="details">
                  <h2>{{ item.name }}</h2>
                  <p>{{ item.description[0]?.children[0]?.text || "No Description" }}</p>
                  <p class="price">$<span>{{ item.price }}</span></p>
      
                </div>
                
              </div>
              <div class="bottom">
                <div class="quantitycontrols">
                  <button @click="cartStore.decreaseQuantity(item.id)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="cartStore.increaseQuantity(item.id)">+</button>
   
                </div>
                <button class="delete" @click="cartStore.removeFromCart(item.id)">Delete</button>
                <button class="saveforlater">Save for later</button>

              </div>
              
            <!-- Quantity Controls -->
          </li>
          </ul>

        </div>
        <p v-else>Your cart is empty</p>
    
      </div>

    </div>
  </div>
</template>
  
  <script setup>
import { useUserStore } from '@/stores/userStore';
import { useCartStore } from '@/stores/cartStore';
import { useRoute, navigateTo } from '#app';

const userStore = useUserStore();
const cartStore = useCartStore();
const route = useRoute();


const handleCheckout = () => {
  if (!userStore.isAuthenticated) {
    console.log("Redirecting to auth-prompt with Checkout as redirect..."); // Debugging
    navigateTo(`/auth-prompt?redirect=${encodeURIComponent('/Checkout')}`);
  } else {
    navigateTo('/Checkout');
  }
};
  </script>


<style lang="scss" scoped>
.sectioncontainer {
  background-color: rgb(70, 96, 181); /* Solid black background */
  width: 100%;
  height: 100vh; /* Large enough to allow scrolling */
display: flex;


  .section {
    background-color: rgb(231, 229, 227); /* Solid black background */
    width: 80rem;
    height: 100vh; /* Full viewport height */
    margin-inline: auto;
    

  }
}



@media (max-width: 800px) {
  .sectioncontainer {
    .section {
      width: 100vw;
      height: 100vh;
      // padding-inline: 0.5rem;
      .cart {
        .back {
          background-color: rgb(216, 216, 216); /* Solid black background */
          height: 2.5rem;
          padding-inline: 1rem;
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .checkout {
          padding-inline: 1rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          p {
            display: flex;
            font-size: 20px;
            
            .sub {
              padding-right: 0.5rem;
              font-weight: 500;
            }
            .total {
              font-weight: 600;
              font-size: 20px;
            }
            
            
            
          }
          button {
            width: 100%;
            height: 2.5rem;
            border-radius: 2rem;
            background-color: rgb(191, 167, 34);
            border: none;
            font-size: 17px;

          }


        }
        .item {
          width: 100vw;
          padding-inline: 0.5rem;
          // border: solid red;
          ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            // border: solid red;
            
            li {
              display: flex;
              flex-direction: column;
              padding-inline: 0.5rem;
              padding-block: 0.5rem;
              gap: 1.5rem;
              border-radius: 0.5rem;
    background-color: rgb(216, 216, 216); /* Solid black background */

              border-bottom: 1px solid silver;

              .top {
                display: flex;
                // justify-content: space-between;
                gap: 1.5rem;

                .image {
                  width: 7rem;
                  height: 7rem;
                  flex-shrink: 0; /* Prevents it from shrinking */
                  // border: solid red;
  
                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: scale-down;
                  }
                }
                .details {
                  display: flex;
                  flex-direction: column;
                  // width: 16rem;
                  // border: solid;
                  h2 {
                    font-size: 24px;
                    font-weight: 500;
                  }
                  .price{
                    display: flex;
                    span {
                      font-size: 20px;
                    }


                  }
                }

              }
              .bottom {
                display: flex;
                gap: 1.5rem;
                .quantitycontrols {
                  width: 7rem;
                  display: flex;
                  justify-content: space-between;
                  border: solid 2px rgb(193, 167, 21);
                  height: 2rem;
                  
                  padding-inline: 0.5rem;
                  border-radius: 1rem;
                  align-items: center;

                  button {
                    outline: none;
                    background: none;
                    border: none;
                    font-size: 24px;
                  }
                }
                .delete {
                  padding-inline: 1rem;
                  border-radius: 1rem;
                  font-size: 14px;
                  border: solid 2px grey;


                  
                }
                .saveforlater {
                  padding-inline: 1rem;
                  border-radius: 1rem;
                  font-size: 14px;
                  border: solid 2px grey;
              }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) and (min-width: 800px) {
  .sectioncontainer {
    .section {

    }
  }
}
</style>