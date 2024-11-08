import { Cards } from './cards.js';
import { viewTasks } from './view.js';

function search() {
   const menuSearch = document.querySelector('.menu__search'),
      inputSearch = menuSearch.querySelector('.menu__search-input'),
      buttonSearch = menuSearch.querySelector('.menu__search-button');

   buttonSearch.addEventListener('click', () => {
      let cardsObj = [], restoredCards = [];
      const req = inputSearch.value;

      if(req) {
         cardsObj = JSON.parse(localStorage.getItem('cards')) || [];
         cardsObj = cardsObj.filter((card) => {
            if (req && (card.label.toLowerCase().includes(inputSearch.value.toLowerCase()) || card.topic.toLowerCase().includes(inputSearch.value.toLowerCase()))) {
               return true;
            } else {
               return false;
            }
         });

         if(cardsObj.length != 0) {
            console.log(cardsObj);
            restoredCards = cardsObj.map(card => new Cards(card.label, card.topic, card.comment, card.id, card.data, card.color));
            viewTasks.innerHTML = '';
            restoredCards.forEach(card => card.createCard());
         } else {
            console.log('Date not found');
         }

      } else {
         console.log('Please, enter keywords');
      }

   });
}


export { search };