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


const navbarToggle = document.querySelector('.navbar-toggler');
const contentToHide = document.getElementById('contentToHide');

navbarToggle.addEventListener('click', () => {
    if (navbarToggle.getAttribute('aria-expanded') === 'true') {
        contentToHide.style.display = 'none';
    } else {
        contentToHide.style.display = 'block';
    }
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!navbarToggle.contains(target) && !document.getElementById('navbarToggleExternalContent').contains(target)) {
        contentToHide.style.display = 'block';
    }
});


// AINMACION DE LOS NUMEROS

const counters = document.querySelectorAll('.counter');
const speed = 100;

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

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(counter); 
      }
    });
  });

  observer.observe(counter);
});

  

// FOOTER 
 
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));

  addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          event.preventDefault(); 
          cartModal.show(); 
      });
  });
});

  
// GRACIAS
document.getElementById("saveButton").addEventListener("click", function () {
  const thankYouMessage = document.getElementById("thankYouMessage");
  thankYouMessage.classList.remove("d-none"); // Muestra el mensaje
});