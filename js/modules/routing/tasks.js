import {cards} from "../cards.js";

function redirect(viewTasks) {
   const tasks = document.querySelector('.tasks');

   tasks.addEventListener('click', () => {
      viewTasks.innerHTML = '';
      cards(viewTasks);
   });
}

export default redirect;