// 
// const hoverLinks = document.querySelectorAll('.hover-link');

// hoverLinks.forEach(link => {
//     link.addEventListener('mouseover', () => {
//         const newImg= link.getAttribute('data-bg');
//         document.body.style.backgroundImage = 'url(' + newImg + ')';
//     });

//     link.addEventListener('mouseout', () => {
//         document.body.style.backgroundColor = '#1a1a1a';
//     });
// });
//


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
$(document).ready(function () {
    // Cierra el menú al hacer clic en un enlace
    $('.navbar-nav a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});

