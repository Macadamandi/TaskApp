import { filterDataTask, viewTasks } from './view.js';
import { Cards } from './cards.js';

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

      filterByOption();

      const selectButton = document.querySelector('.selectButton');
      filterByAttr(selectButton.value);
      localStorage.setItem('filter', selectButton.value);

      localStorage.removeItem('searchCards');
      localStorage.removeItem('search');
}

function filterByOption() {
      const selectButton = document.querySelector('.selectButton');
      filterByAttr(localStorage.getItem('filter'));
      selectButton.addEventListener('change', (e) => {
            const filter = e.target.value;
            localStorage.setItem('filter', e.target.value);
            const cardsObj = JSON.parse(localStorage.getItem('cards')) || [];
            console.log(filter);

            if (cardsObj.length != 0) {
                  filterByAttr(filter);
            } else {
                  console.log('LocalStorage is empty');
            }
      });
}

function filterByAttr(filter) {
      let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];

      if(localStorage.getItem('search') === 'true') {
            cardsObj = JSON.parse(localStorage.getItem('searchCards'));
      }


      if (filter == 'date-old') {
            cardsObj = cardsObj.sort((a, b) => a.data - b.data);
      }

      if (filter == 'date-new') {
            cardsObj = cardsObj.sort((a, b) => b.data - a.data);
      }

      if(filter === 'tag-az') {
            cardsObj = cardsObj.sort((a,b) => a.label.toLowerCase().localeCompare(b.label.toLowerCase()));
      }

      if(filter === 'tag-za') {
            cardsObj = cardsObj.sort((a,b) => b.label.toLowerCase().localeCompare(a.label.toLowerCase()));
      }

      cardsObj = cardsObj.map(card => new Cards(card.label, card.topic, card.comment, card.id, card.data, card.color));

      viewTasks.innerHTML = '';
      cardsObj.forEach(card => card.createCard());
}



export { filter, filterByOption, filterByAttr};