import { cards } from "./cards";
import { viewTasks } from './view.js';

function removeCard() {
   viewTasks.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
         const cardId = e.target.getAttribute('data-id');
         let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];

         cardsObj = cardsObj.filter(card => card.id !== cardId);
         localStorage.setItem('cards', JSON.stringify(cardsObj));

         cards();
      }
   });
}

export { removeCard };
