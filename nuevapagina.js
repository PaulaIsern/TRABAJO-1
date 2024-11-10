

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


function toggleSearchBar() {
    const searchInput = document.getElementById("searchInput");
    searchInput.classList.toggle("d-none");
    searchInput.focus();
}

// CARRUSSEL NUEVO PRIMERO

    AOS.init({
        duration: 1000,  
        easing: 'ease',  
        once: true,      
    });


    //  BOTON GUARDAR CON MENSAJE
document.getElementById("saveButton").addEventListener("click", function () {
  const thankYouMessage = document.getElementById("thankYouMessage");
  thankYouMessage.classList.remove("d-none"); 
});