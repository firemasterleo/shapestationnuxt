import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Restore scroll position on back/forward navigation
      return savedPosition;
    } else {
      // Instantly reset scroll to top for new pages (without causing a flicker)
      return { top: 0, left: 0 };
    }
  }
};