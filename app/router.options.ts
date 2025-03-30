import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          // Restore scroll position on back/forward navigation
          resolve(savedPosition);
        } else {
          // Smooth scroll to top in 0.3s
          resolve({ top: 0, left: 0, behavior: 'smooth' });
        }
      }, 10); // Tiny delay to prevent flicker
    });
  }
};