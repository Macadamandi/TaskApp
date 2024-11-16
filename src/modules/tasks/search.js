import { Cards } from './cards.js';
import { filterByAttr } from './filter.js';


function querySearch() {
   let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];
   cardsObj = cardsObj.filter((card) => {
      if ((card.label.toLowerCase().includes(localStorage.getItem('search-query').toLowerCase()) || card.topic.toLowerCase().includes(localStorage.getItem('search-query').toLowerCase()))) {
         return true;
      } else {
         return false;
      }
   });
   localStorage.setItem('search-cards', JSON.stringify(cardsObj));
}

function search() {
   const menuSearch = document.querySelector('.menu__search'),
      buttonSearch = menuSearch.querySelector('.menu__search-button');

   buttonSearch.addEventListener('click', () => {
      const inputSearch = menuSearch.querySelector('.menu__search-input');
      localStorage.removeItem('search-cards');
      const req = inputSearch.value;

      let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];

      if (req !== '' && cardsObj.length != 0) {
         cardsObj = cardsObj.filter((card) => {
            if ((card.label.toLowerCase().includes(req.toLowerCase()) || card.topic.toLowerCase().includes(req.toLowerCase()))) {
               return true;
            } else {
               return false;
            }
         });
         if (cardsObj.length > 0) {
            localStorage.setItem('search-status', 'true')
            localStorage.setItem('search-query', req);
            localStorage.setItem('search-cards', JSON.stringify(cardsObj));
            filterByAttr(localStorage.getItem('filter'));
         } else {
            console.log('Result not found');
         }
      } else if (cardsObj.length == 0) {
         console.log('LocalStorage is empty');
      } else if (req == '') {
         localStorage.removeItem('search-cards');
         localStorage.removeItem('search-status');
         localStorage.removeItem('search-query');
         inputSearch.value = '';
         filterByAttr(localStorage.getItem('filter'));
         console.log('Please, enter keywords');
      }

   });
}


export { search, querySearch };