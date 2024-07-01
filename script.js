const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Preload all images for smoother transitions
const images = document.querySelectorAll('.image');
images.forEach(image => {
  const img = new Image();
  img.src = image.src;
});

function showSlides(n) {
  if (n > slides.length - 1) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  }

  slides.forEach(slide => slide.classList.remove("currentSlide"));
  slides[currentSlide].classList.add("currentSlide");
}

function plusSlides(n) {
  showSlides(currentSlide + n);
}

showSlides(currentSlide); // Start with the first slide
