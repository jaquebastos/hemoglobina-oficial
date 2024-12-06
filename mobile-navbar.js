// Seleciona os elementos
const menuMobile = document.querySelector('.menu-mobile');
const navbarMobile = document.querySelector('.navbar-mobile');

// Adiciona o evento de clique para abrir/fechar o menu
menuMobile.addEventListener('click', () => {
  navbarMobile.classList.toggle('active');
});
