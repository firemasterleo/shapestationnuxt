import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          // Restore scroll position when using back/forward
          resolve(savedPosition);
        } else {
          // Scroll to top for new pages (with a small delay)
          resolve({ top: 0, left: 0, behavior: 'instant' });
        }
      }, 300); // Small delay (50ms) to avoid visible jump
    });
  }
};