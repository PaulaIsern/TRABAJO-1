


// Selecciona el botón de la hamburguesa y el contenido a ocultar
const navbarToggle = document.querySelector('.navbar-toggler');
const contentToHide = document.getElementById('contentToHide');

// Al hacer clic en el botón de la hamburguesa
navbarToggle.addEventListener('click', () => {
    // Verifica si el menú está abierto
    if (navbarToggle.getAttribute('aria-expanded') === 'true') {
        // Si está abierto, oculta el contenido
        contentToHide.style.display = 'none';
    } else {
        // Si está cerrado, muestra el contenido
        contentToHide.style.display = 'block';
    }
});

// Opcional: Asegurarse de que el contenido esté visible al cerrar el menú
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!navbarToggle.contains(target) && !document.getElementById('navbarToggleExternalContent').contains(target)) {
        // Cuando se hace clic fuera del menú, muestra el contenido
        contentToHide.style.display = 'block';
    }
});


function toggleSearchBar() {
    const searchInput = document.getElementById("searchInput");
    searchInput.classList.toggle("d-none");
    searchInput.focus();
}

// carrousel nuevo, primero

    AOS.init({
        duration: 1000,  // Duración de la animación
        easing: 'ease',  // Efecto de aceleración de la animación
        once: true,      // La animación solo se activa una vez
    });
