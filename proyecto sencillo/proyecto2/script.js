// Slider (Carrusel de imágenes)
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function cambiarSlide(direccion) {
    slideIndex += direccion;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    mostrarSlide(slideIndex);
}

// Validación de formulario (ya tiene 'required' en HTML)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por contactarte! Un animalito te lo agradece 🐶🐱');
    this.reset();
});