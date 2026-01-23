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
        smooth: 2, // Smoothness level (0-3, higher = smoother)
        effects: true, // Enable data-speed and data-lag effects
        smoothTouch: 0.1, // Smooth scrolling on touch devices
        normalizeScroll: false, // Changed to false to avoid conflicts with horizontal scroller
        ignoreMobileResize: true, // Prevent issues on mobile resize
      });

      console.log("✅ GSAP ScrollSmoother initialized");

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
