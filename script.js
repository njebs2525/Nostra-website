"use strict";

// Fade sections in as they scroll into view.
const items = document.querySelectorAll(".card, .step, .shot, .special, .group, .rounds");

if ("IntersectionObserver" in window && items.length) {
  document.documentElement.classList.add("js");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
