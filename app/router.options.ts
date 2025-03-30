import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition); // Keep scroll position when using browser back/forward
        } else {
          resolve({ top: 0, left: 0, behavior: "instant" }); // Scroll to top on new navigation
        }
      }, 300); // Small delay to prevent flicker
    });
  },
};