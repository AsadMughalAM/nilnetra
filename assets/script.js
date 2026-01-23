gsap.registerPlugin(ScrollTrigger);

// Horizontal scroll animation with smooth effect
const contents = gsap.utils.toArray('#horizontal .content');

gsap.to(contents, {
  xPercent: -100 * (contents.length - 1),
  scrollTrigger: {
    trigger: '#horizontal',
    pin: true,
    scrub: 2,
    end: '+=10000',
    markers: false,
  }
});



