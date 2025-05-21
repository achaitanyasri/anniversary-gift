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
