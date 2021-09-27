const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

const MobileMenu = () => {
  menu.classList.toggle('is-active');
  navLinks.classList.toggle('active');
}

menu.addEventListener('click', MobileMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
  if(window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active');
    navLinks.classList.remove('active');
  }
}

navLinks.addEventListener('click', hideMobileMenu);