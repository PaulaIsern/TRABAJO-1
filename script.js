// Selección del contenedor donde se mostrará el contenido dinámico
const contenido = document.getElementById('contenido');

// Función para cambiar el contenido dinámicamente
function cambiarContenido(titulo, texto) {
    contenido.innerHTML = `
        <h1 class="display-4">${titulo}</h1>
        <p class="lead">${texto}</p>
    `;
}

// Eventos de hover para cada enlace del menú
document.getElementById('historia').addEventListener('mouseover', () => {
    cambiarContenido('Nuestra Historia', 'Conoce nuestros orígenes y los valores que nos inspiran.');
});

document.getElementById('patagonia').addEventListener('mouseover', () => {
    cambiarContenido('x Patagonia', 'Una colaboración especial con Patagonia para salvar el planeta.');
});

document.getElementById('mar').addEventListener('mouseover', () => {
    cambiarContenido('Salvemos el Mar', 'Únete a nuestra misión para proteger los océanos.');
});

document.getElementById('colabora').addEventListener('mouseover', () => {
    cambiarContenido('Colabora', 'Descubre cómo puedes participar y hacer la diferencia.');
});

// Opción para restaurar el contenido inicial al salir del hover
const enlaces = document.querySelectorAll('.nav-link');
enlaces.forEach(enlace => {
    enlace.addEventListener('mouseout', () => {
        cambiarContenido('Bienvenido a DEIÀ', 'Selecciona una opción del menú para más información.');
    });
});
