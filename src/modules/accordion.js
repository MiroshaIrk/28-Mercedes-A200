const accordion = () => {
  const lists = document.querySelectorAll('.feature-sub');
  const btnList = document.querySelectorAll('.feature__link');

  btnList.forEach((btnItem, index) => {
    btnItem.addEventListener('click', (e) => {

      if (e.currentTarget.classList.contains('feature__link_active')) {
        e.currentTarget.classList.remove('feature__link_active')
        lists[index].classList.add('hidden');
        return;
      }

      btnList.forEach((btnItem) => btnItem.classList.remove('feature__link_active'));

      btnItem.classList.add('feature__link_active');

      lists.forEach((listItem) => listItem.classList.add('hidden'));
      lists[index].classList.remove('hidden');
    });
  });

}

export default accordion;
