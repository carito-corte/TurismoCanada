const cards = document.querySelector('.cards');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const slidesToShow = 3; // mostramos 3 tarjetas
const totalSlides = slides.length;

function showSlides() {
  const slideWidth = slides[0].offsetWidth + 20; // ancho + margen
  const maxIndex = Math.ceil(totalSlides - slidesToShow);

  // Si estamos en la última posición, limitamos el desplazamiento
  if (currentIndex > maxIndex) currentIndex = maxIndex;
  if (currentIndex < 0) currentIndex = 0;

  const offset = -(slideWidth * currentIndex);
  cards.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
  const maxIndex = Math.ceil(totalSlides - slidesToShow);
  if (currentIndex < maxIndex) {
    currentIndex++;
    showSlides();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlides();
  }
});

// Pase automático cada 6s
setInterval(() => {
  const maxIndex = Math.ceil(totalSlides - slidesToShow);
  currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
  showSlides();
}, 6000);

// Recalcular si cambia el tamaño de la ventana
window.addEventListener('resize', showSlides);
