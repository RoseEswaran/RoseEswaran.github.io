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

function initMap() {
            // The location of the wedding venue (for example)
            var weddingVenue = { lat: 40.712776, lng: -74.005974 };
            // The map, centered at wedding venue
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: weddingVenue
            });
            // The marker, positioned at wedding venue
            var marker = new google.maps.Marker({
                position: weddingVenue,
                map: map
            });
 }
