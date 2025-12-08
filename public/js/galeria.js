document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".instalaciones-img");
  const carousel = document.querySelector("#carouselGaleria");
  const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);

  images.forEach((img) => {
    img.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);
      carouselInstance.to(index);
    });
  });
});
