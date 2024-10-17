// Seleccionar todos los enlaces con la clase 'hover-link'
const hoverLinks = document.querySelectorAll('.hover-link');

// Cambiar el color del fondo al hacer hover
hoverLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        const newBgColor = link.getAttribute('data-bg');
        document.body.style.backgroundColor = newBgColor;
    });

    link.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = '#1a1a1a';
    });
});
