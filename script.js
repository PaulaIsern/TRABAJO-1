// HOVER 
const hoverLinks = document.querySelectorAll('.hover-link');

// Cambiar el color del fondo 
hoverLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        const newImg= link.getAttribute('data-bg');
        document.body.style.backgroundImage = 'url(' + newImg + ')';
    });

    link.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = '#1a1a1a';
    });
});

// MENU
$(document).ready(function () {
    // Cierra el menú al hacer clic en un enlace
    $('.navbar-nav a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});

