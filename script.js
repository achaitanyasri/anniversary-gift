let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === slideIndex) {
      slide.classList.add('active');
    }
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlide, 3000);
showSlide();

// Scroll animation for timeline content
const timelineContents = document.querySelectorAll('.timeline-content');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  timelineContents.forEach(content => {
    const top = content.getBoundingClientRect().top;
    if (top < triggerBottom) {
      content.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById('start-overlay');
  const startBtn = document.getElementById('start-btn');
  const slides = document.querySelectorAll('.slide');
  const music = document.querySelector('audio');
  let currentSlide = 0;

  function startSlideshow() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  let slideshowInterval;

  startBtn.addEventListener("click", function () {
    overlay.style.display = "none"; // Hide the overlay
    music.play(); // Start music
    slideshowInterval = setInterval(startSlideshow, 3000); // Start slideshow
  });
});
