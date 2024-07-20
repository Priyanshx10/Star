const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds


  document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector("#nav-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    navToggle.addEventListener("change", function() {
      if (navToggle.checked) {
        navLinks.style.display = "flex";
      } else {
        navLinks.style.display = "none";
      }
    });
  });
  
  document.getElementById('toggleButton').addEventListener('click', function() {
    var featuresList = document.getElementById('featuresList');
    if (featuresList.style.display === 'none' || featuresList.style.display === '') {
      featuresList.style.display = 'block';
      this.textContent = 'Închide';
    } else {
      featuresList.style.display = 'none';
      this.textContent = 'Arată';
    }
  });