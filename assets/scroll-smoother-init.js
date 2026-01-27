// GSAP ScrollSmoother Initialization for Ultra-Smooth Scrolling

(function () {
  "use strict";

  function initScrollSmoother() {
    if (
      typeof gsap !== "undefined" &&
      typeof ScrollTrigger !== "undefined" &&
      typeof ScrollSmoother !== "undefined"
    ) {
      // Register plugins
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      // Create ScrollSmoother instance
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5, // Reduced slightly for better responsiveness (1.5 is the sweet spot)
        effects: true, // Enable data-speed and data-lag effects
        smoothTouch: 0.1, // Smooth scrolling on touch devices
        normalizeScroll: { allowNestedScroll: true }, // Optimized normalization to prevent "stuck" feeling
        ignoreMobileResize: true, // Prevent issues on mobile resize
      });

      console.log("✅ GSAP ScrollSmoother initialized (Optimized)");

      // Expose smoother globally for debugging
      window.smoother = smoother;
    } else {
      // Retry if GSAP libraries not loaded yet
      setTimeout(initScrollSmoother, 100);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollSmoother);
  } else {
    initScrollSmoother();
  }
})();
