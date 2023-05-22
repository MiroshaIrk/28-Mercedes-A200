import { tabs } from "./tabs.js";
import { modal } from "./modal.js";
import { burger } from "./burger.js";
import { accordion } from "./accordion.js";
import { smoothScroll } from "./smoothScroll.js";
import { sendForm } from "./sendForm.js";

function init() {

  tabs();
  modal();
  burger();
  sendForm();
  accordion();
  smoothScroll();
}

init();