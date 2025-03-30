import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition); // Keep position when using browser back/forward
        } else {
          resolve({ top: 0, left: 0, behavior: "instant" }); // Start new page at top
        }
      }, 0); // Small delay to avoid flicker
    });
  },
};