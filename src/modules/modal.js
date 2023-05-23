const modal = () => {
  const modalBtns = document.querySelectorAll('.more');
  const windowModal = document.querySelector('.modal');
  const body = document.querySelector('body');

  modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener('click', () => {
      windowModal.classList.remove('hidden');
      body.style.overflow = 'hidden';
    });
  });

  windowModal.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
      windowModal.classList.add('hidden');
      body.style.overflow = '';
    }

  });

}

export default modal;