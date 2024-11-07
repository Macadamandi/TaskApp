import { Cards } from './cards.js';
import { viewTasks } from './view.js';

function search() {
   const menuSearch = document.querySelector('.menu__search'),
      inputSearch = menuSearch.querySelector('.menu__search-input'),
      buttonSearch = menuSearch.querySelector('.menu__search-button');

   buttonSearch.addEventListener('click', () => {
      let cardsObj = [], restoredCards = [];
      const req = inputSearch.value;

      cardsObj = JSON.parse(localStorage.getItem('cards')) || [];
      cardsObj = cardsObj.filter((card) => {
         if (req && (card.label.toLowerCase().includes(inputSearch.value.toLowerCase()) || card.topic.toLowerCase().includes(inputSearch.value.toLowerCase()))) {
            return true;
         } else {
            return false;
         }
      });

      restoredCards = cardsObj.map(data => new Cards(data.label, data.topic, data.comment, data.id));
      viewTasks.innerHTML = '';
      restoredCards.forEach(card => card.createCard());

   });
}


export { search };