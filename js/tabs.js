export function tabs() {
  const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]');
  const tabsContentElements = document.querySelectorAll('[data-tabs-field]');

  for (let tab of tabsHandlerElements) {
    tab.addEventListener('click', (e) => {
      tabsHandlerElements.forEach((item) => item.classList.remove('design-list__item_active'));
      tab.classList.add('design-list__item_active');

      tabsContentElements.forEach((item) => {

        if (item.dataset.tabsField === tab.dataset.tabsHandler) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }

      });
    });
  }

}
