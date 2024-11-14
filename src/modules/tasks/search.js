import { Cards } from './cards.js';
import { filterByAttr } from './filter.js';

function search() {
   const menuSearch = document.querySelector('.menu__search'),
      inputSearch = menuSearch.querySelector('.menu__search-input'),
      buttonSearch = menuSearch.querySelector('.menu__search-button');

   buttonSearch.addEventListener('click', () => {
      const req = inputSearch.value;
      let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];

      if (req) {
         if (cardsObj.length != 0) {
            cardsObj = cardsObj.filter((card) => {
               if (req && (card.label.toLowerCase().includes(inputSearch.value.toLowerCase()) || card.topic.toLowerCase().includes(inputSearch.value.toLowerCase()))) {
                  return true;
               } else {
                  return false;
               }
            });
            if (cardsObj.length != 0) {
               //restoredCards = cardsObj.map(card => new Cards(card.label, card.topic, card.comment, card.id, card.data, card.color));
               localStorage.setItem('search', 'true');
               localStorage.setItem('searchCards', JSON.stringify(cardsObj));
               filterByAttr(localStorage.getItem('filter'));
               //viewTasks.innerHTML = '';
               //restoredCards.forEach(card => card.createCard());
            } else {
               console.log('Result not found');
            }
         } else {
            console.log('LocalStorage is empty');
         }

      } else {
         localStorage.removeItem('search');
         filterByAttr(localStorage.getItem('filter'));
         console.log('Please, enter keywords');
      }

   });
}


export { search };