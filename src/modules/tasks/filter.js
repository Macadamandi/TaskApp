import { filterDataTask } from './view.js';

function filter() {
      const selectFilter = document.createElement('select'),
            labelForSelect = document.createElement('span'),
            optionData = document.createElement('option'),
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

      labelForSelect.innerText = 'Sort by:';
      optionData.innerText = 'Data';
      optionTag.innerText = 'Tag';

      selectFilter.appendChild(optionData);
      selectFilter.appendChild(optionTag);

      selectFilter.classList.add('hover');

      filterDataTask.appendChild(selectFilter);
      selectFilter.insertAdjacentElement('beforebegin', labelForSelect);
}

function filterByData() {
      
}

export { filter };