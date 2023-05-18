export function smoothScroll() {
  const linkHeader = document.querySelectorAll('.menu-list__link');
  const mainScroll = document.querySelector('.main__scroll');
  const contactsScroll = document.querySelector('.main__button');
  const linksAll = [...linkHeader, mainScroll, contactsScroll];

  linksAll.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const target = e.target;
      const ID = target.getAttribute('href').substr(1);
      const section = document.getElementById(ID);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}