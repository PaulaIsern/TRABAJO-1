document.querySelectorAll('.hover-link').forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const header = document.querySelector('.custom-header');
        const bgImage = item.getAttribute('data-bg');
        header.style.backgroundImage = `url(${bgImage})`;
    });

    item.addEventListener('mouseleave', () => {
        const header = document.querySelector('.custom-header');
        header.style.backgroundImage = 'none'; // Vuelve al estado inicial
    });
});




// MENU
// $(document).ready(function () {
//     // Cierra el menú al hacer clic en un enlace
//     $('.navbar-nav a').on('click', function () {
//         $('.navbar-collapse').collapse('hide');
//     });
// });


// MENU


// document.addEventListener("DOMContentLoaded", function() {
//     const button = document.getElementById("hamburger-button");
//     const menu = document.getElementById("navbarNav");

//     button.addEventListener("click", function() {
//         menu.classList.toggle("oppenned");
//     });
// });




// menu

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




// AINMACION DE LOS NUMEROS

const counters = document.querySelectorAll('.counter');
const speed = 100; // Velocidad de la animación

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  // IntersectionObserver para que la animación comience al hacer scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(counter); // Detiene la observación cuando comienza la animación
      }
    });
  });

  observer.observe(counter);
});

  

// FOOTER 

