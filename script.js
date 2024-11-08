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

//add to cart
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los botones "Add to cart"
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));

  // Añade el evento de clic a cada botón
  addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          event.preventDefault(); // Evita el comportamiento por defecto del enlace
          cartModal.show(); // Muestra el modal
      });
  });
});


// Mensaje gracias footer
document.getElementById("saveButton").addEventListener("click", function () {
  const thankYouMessage = document.getElementById("thankYouMessage");
  thankYouMessage.classList.remove("d-none"); // Muestra el mensaje
});