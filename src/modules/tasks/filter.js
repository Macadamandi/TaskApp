import { filterDataTask, viewTasks } from './view.js';
import { Cards } from './cards.js';
import { querySearch } from './search.js';

function filter() {
      const selectFilter = document.createElement('select'),
            labelForSelect = document.createElement('span'),
            optionDataOld = document.createElement('option'),
            optionDataNew = document.createElement('option'),
            optionTagAz = document.createElement('option'),
            optionTagZa = document.createElement('option');

      selectFilter.style = `
            margin-left: 20px;
            width: 100px;
            height: 30px;
            outline: none;
            border: 1px solid #dadedf;
            border-radius: 5px;
      `;

      labelForSelect.style = `
            margin-left: 20px;
      `;

      optionDataOld.value = 'date-old';
      optionDataNew.value = 'date-new';
      optionTagAz.value = 'tag-az';
      optionTagZa.value = 'tag-za';

      labelForSelect.innerText = 'Sort by:';
      optionDataOld.innerText = 'Date old';
      optionDataNew.innerText = 'Date new';
      optionTagAz.innerText = 'Tag a-z';
      optionTagZa.innerText = 'Tag z-a';

      selectFilter.appendChild(optionDataNew);
      selectFilter.appendChild(optionDataOld);
      selectFilter.appendChild(optionTagAz);
      selectFilter.appendChild(optionTagZa);

      selectFilter.classList.add('hover', 'selectButton');

      filterDataTask.appendChild(selectFilter);
      selectFilter.insertAdjacentElement('beforebegin', labelForSelect);

      localStorage.removeItem('search-cards');
      localStorage.removeItem('search-status');
      localStorage.removeItem('search-query');

      const selectButton = document.querySelector('.selectButton');
      localStorage.setItem('filter', selectButton.value);
      filterByAttr(localStorage.getItem('filter'));
}

function filterByOption() {
      const selectButton = document.querySelector('.selectButton');
      selectButton.addEventListener('change', (e) => {
            const cardsObj = JSON.parse(localStorage.getItem('cards')) || [];
            const filter = e.target.value;
            localStorage.setItem('filter', e.target.value);
            if (cardsObj.length != 0) {
                  filterByAttr(filter);
            } else {
                  console.log('LocalStorage is empty');
            }
      });
}

function searchByNewStatusCard(cardsObj) {
      querySearch();
      cardsObj = JSON.parse(localStorage.getItem('search-cards'));
      localStorage.removeItem('card-status');
      return cardsObj;
}

function filterByAttr(filter) {
      let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];

      if (localStorage.getItem('search-status') === 'true' && (localStorage.getItem('card-status') === 'add' || localStorage.getItem('card-status') === 'remove' || localStorage.getItem('card-status') === 'change')) {
            cardsObj = searchByNewStatusCard(cardsObj)
      } else if (localStorage.getItem('search-status') === 'true') {
            cardsObj = JSON.parse(localStorage.getItem('search-cards'));
      }

      if (filter == 'date-old') {
            cardsObj = cardsObj.sort((a, b) => a.data - b.data);
      }

      if (filter == 'date-new') {
            cardsObj = cardsObj.sort((a, b) => b.data - a.data);
      }

      if (filter === 'tag-az') {
            cardsObj = cardsObj.sort((a, b) => a.label.toLowerCase().localeCompare(b.label.toLowerCase()));
      }

      if (filter === 'tag-za') {
            cardsObj = cardsObj.sort((a, b) => b.label.toLowerCase().localeCompare(a.label.toLowerCase()));
      }

      cardsObj = cardsObj.map(card => new Cards(card.label, card.topic, card.comment, card.id, card.data, card.color));

      viewTasks.innerHTML = '';
      cardsObj.forEach(card => card.createCard());
      filterByOption();
}



export { filter, filterByOption, filterByAttr };