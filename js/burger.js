export function burger() {
  const menuElement = document.querySelector('.menu');
  const burgerMenu = document.querySelector('.humburger-menu');
  const menuLinks = document.querySelectorAll('.menu-list__link');

  const toggleMenu = () => {
    menuElement.classList.toggle('menu-active');
    burgerMenu.classList.toggle('humburger-menu-active');
  };

  burgerMenu.addEventListener('click', toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}