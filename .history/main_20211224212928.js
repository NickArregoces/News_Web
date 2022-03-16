// boton
document.querySelector('.menu-btn').addEventListener('click', () => {// seleccionar un documento clase btn
    document.querySelector('.nav-menu').classList.toggle('show'); // claslist añadir o quitar la clase show
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});// tiempo