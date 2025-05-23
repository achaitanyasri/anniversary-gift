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
  const music = document.getElementById('anniversaryMusic'); // safer to use ID if possible
  let slideIndex = 0;
  let slideshowInterval;

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === slideIndex) {
        slide.classList.add('active');
      }
    });
    slideIndex = (slideIndex + 1) % slides.length;
  }

  // Start button event
  startBtn.addEventListener("click", function () {
    overlay.style.display = "none";     // Hide the start overlay
    music.play().catch(err => {
      console.log("Audio play blocked:", err);
    });                                 // Start the music
    showSlide();                        // Show the first slide immediately
    slideshowInterval = setInterval(showSlide, 3000); // Start slideshow
  });
});
