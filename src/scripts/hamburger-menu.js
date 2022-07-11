const openButton = document.querySelector('.btn-burger');
const closeButton = document.querySelector('.burger-menu__close');
const hamburgerMenu = document.querySelector('.hello__burger-menu');

openButton.addEventListener('click', e => {
  hamburgerMenu.style.transform = "translateX(0%)";
})

closeButton.addEventListener('click', e => {
  hamburgerMenu.style.transform = "translateX(100%)";
})

