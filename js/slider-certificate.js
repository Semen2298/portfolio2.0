document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.certificate');
    const paginations = document.querySelectorAll('.certificate__pagination');
    let currentSlide = 0;
    const totalSlides = slides.length;
    const slideInterval = 3000; 
  
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      paginations.forEach(pagination => pagination.classList.remove('active'));
  
      slides[index].classList.add('active');
      paginations[index].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
    paginations.forEach((pagination, index) => {
      pagination.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
  
    setInterval(nextSlide, slideInterval);
  });
  