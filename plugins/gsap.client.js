import { useNuxtApp } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return; // Prevents running on the server

  import('gsap').then((gsap) => {
    import('gsap/ScrollTrigger').then((ScrollTrigger) => {
      gsap.registerPlugin(ScrollTrigger);
      nuxtApp.provide('gsap', gsap);
      nuxtApp.provide('ScrollTrigger', ScrollTrigger);
    });
  });
});