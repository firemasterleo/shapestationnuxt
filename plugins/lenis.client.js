import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 1.2, // Adjust smoothness
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return {
    provide: {
      lenis,
    },
  };
});
