// Carousel functionality for ads at the bottom
let currentAdSlide = 0;

function showAdSlide(index) {
  const adSlides = document.querySelectorAll(".ad-carousel-item");
  adSlides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });

  // Update dots
  const adDots = document.querySelectorAll(".ad-dot");
  adDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentAdSlide = index;
}

function nextAdSlide() {
  const adSlides = document.querySelectorAll(".ad-carousel-item");
  currentAdSlide = (currentAdSlide + 1) % adSlides.length;
  showAdSlide(currentAdSlide);
}

function currentAdSlideFunc(index) {
  showAdSlide(index - 1);
}

// Initialize ad carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const adSlides = document.querySelectorAll(".ad-carousel-item");

  if (adSlides.length > 0) {
    showAdSlide(0);

    // Auto-advance every 5 seconds
    setInterval(nextAdSlide, 5000);
  }

  // Add click handlers for ad dots
  const adDots = document.querySelectorAll(".ad-dot");
  adDots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentAdSlideFunc(index + 1));
  });
});
