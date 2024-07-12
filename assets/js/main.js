let currentIndex = 0;
let carouselInterval;

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  items.forEach(item => {
    item.style.transform = `translateX(${offset}%)`;
  });

  resetCarouselInterval(); // Reset the interval whenever the carousel is manually moved
}

function autoMoveCarousel() {
  moveCarousel(1);
}

function resetCarouselInterval() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(autoMoveCarousel, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  moveCarousel(0); // Initialize the carousel position
  carouselInterval = setInterval(autoMoveCarousel, 5000); // Move the carousel every 5 seconds
});