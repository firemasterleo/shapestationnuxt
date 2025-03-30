import { nextTick } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  nuxtApp.hook('page:finish', async () => {
    await nextTick(); // Wait for transition to finish

    setTimeout(() => {
      const historyState = window.history.state;
      
      if (historyState && historyState.scroll) {
        // If it's a back navigation, restore previous scroll position
        window.scrollTo(historyState.scroll.x || 0, historyState.scroll.y || 0);
      } else {
        // If it's a new page, reset to top
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }, 300); // Small delay to prevent snapping
  });
});