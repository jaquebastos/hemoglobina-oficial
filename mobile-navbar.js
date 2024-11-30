const menuButton = document.querySelector('.menu-mobile');
const mobileMenu = document.querySelector('.navbar-mobile');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});