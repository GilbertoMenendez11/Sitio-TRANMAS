/*Menu Hamburguesa */
function toggleMenu() {
  var menu = document.querySelector('.menu'); /*.querySelector('.menu') busca un elemento que tenga la clase menu. */
  menu.classList.toggle('active');/*es una propiedad que nos da acceso a la lista de clases del elemento seleccionado. active: se usa para mostrar u ocultar un menú. */
} 

var slideIndex = 0;
carousel();

function carousel() {
  var slides = document.getElementsByClassName("carousel-slide"); /*obtiene todos los elementos HTML que tienen la clase carousel-slide. */
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} /*Si slideIndex supera la cantidad total de imágenes (slides.length), se reinicia a 1 para volver al inicio del carrusel. */
  slides[slideIndex-1].style.display = "block"; /*Muestra la imagen actual estableciendo su estilo display a "block". */
  setTimeout(carousel, 4000); // Cambiar imagen cada 2 segundos
}

