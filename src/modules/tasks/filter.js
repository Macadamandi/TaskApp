import { filterDataTask, viewTasks } from './view.js';
import { Cards } from './cards.js';

function filter() {
      const selectFilter = document.createElement('select'),
            labelForSelect = document.createElement('span'),
            optionDataOld = document.createElement('option'),
            optionDataNew = document.createElement('option'),
            optionTag = document.createElement('option');

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
      optionTag.value = 'tag';

      labelForSelect.innerText = 'Sort by:';
      optionDataOld.innerText = 'Date old';
      optionDataNew.innerText = 'Date new';
      optionTag.innerText = 'Tag';

      selectFilter.appendChild(optionTag);
      selectFilter.appendChild(optionDataOld);
      selectFilter.appendChild(optionDataNew);

      selectFilter.classList.add('hover', 'selectButton');

      filterDataTask.appendChild(selectFilter);
      selectFilter.insertAdjacentElement('beforebegin', labelForSelect);

      filterByOption();
}

function filterByOption() {
      const selectButton = document.querySelector('.selectButton');
      //const selectOptions = selectButton.querySelectorAll('option');
      
      selectButton.addEventListener('change', (e) => {
            const filter = e.target.value;
            switch(filter) {
                  case 'date-old':
                        filterByData(filter);
                        break;
                  case 'date-new':
                        filterByData(filter);
                        break;
                  case 'tag':
                        filterByTag();
                        break;
            }
      });
}

function filterByData(filter) {
      let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];
      
      if (filter == 'date-old') {
            cardsObj = cardsObj.sort((a, b) => a.data - b.data);
            cardsObj = cardsObj.map(card => new Cards(card.label, card.topic, card.comment, card.id, card.data, card.color));
      }

      if (filter == 'date-new') {
            cardsObj = cardsObj.sort((a, b) => b.data - a.data);
            cardsObj = cardsObj.map(card => new Cards(card.label, card.topic, card.comment, card.id, card.data, card.color));
      }

      viewTasks.innerHTML = '';
      cardsObj.forEach(card => card.createCard());
}

function filterByTag(filter) {

}

export { filter };