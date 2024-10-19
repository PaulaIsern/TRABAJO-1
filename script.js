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


//IMAGENES TRANSICION//


// Mostrar las imágenes al hacer scroll
function mostrarImagenesAlHacerScroll() {
    const seccionInformacion = document.getElementById('informacion');
    const posicionSeccion = seccionInformacion.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;

    // Verifica si la sección es visible en la pantalla
    if (posicionSeccion < alturaPantalla) {
        const imagenes = seccionInformacion.querySelectorAll('img');
        imagenes.forEach(imagen => {
            imagen.classList.add('img-visible'); // Añadir clase para mostrar la imagen
        });

        // Dejar de escuchar el scroll una vez que las imágenes se muestran
        window.removeEventListener('scroll', mostrarImagenesAlHacerScroll);
    }
}

// Escuchar el evento de scroll
window.addEventListener('scroll', mostrarImagenesAlHacerScroll);

