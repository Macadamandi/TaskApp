import { cards, createData } from "./cards";
import { createModal } from "./add";
import { viewTasks } from './view.js';

const BTN_CHANGE = 'change';

function change() {
   viewTasks.addEventListener('click', (e) => {
      if (e.target.classList.contains('change')) {
         const cardId = e.target.getAttribute('data-id');
         const changeButton = document.createElement('button');
         let changeObj = document;
         let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];
         let [inputLabel, inputTopic, inputComment, modalAdd, modalWrapp] = createModal(BTN_CHANGE, e);

         changeObj = cardsObj.find(obj => cardId == obj.id);

         if (changeObj) {
            inputLabel.value = changeObj.label;
            inputTopic.value = changeObj.topic;
            inputComment.value = changeObj.comment;
         }

         changeButton.innerText = 'Change';
         changeButton.style = `
            width: 50%;
            height: 50px;
            margin-top: 15px;
            display: block;
            border: 0;
            border-radius: 10px;
            background-color: #dadedf;
         `;

         changeButton.classList.add('hover');

         modalAdd.appendChild(changeButton);

         changeButton.addEventListener('click', ()=> {
            if (inputLabel.value && inputTopic.value && inputComment.value) {
               cardsObj = cardsObj.map(card => {
                  if (card.id == cardId) {
                     return {
                        label: inputLabel.value,
                        topic: inputTopic.value,
                        comment: inputComment.value,
                        id: card.id,
                        data: createData(),
                        color: card.color
                     }
                  }
                  else return card;
               });
               localStorage.setItem('cards', JSON.stringify(cardsObj));
               modalWrapp.remove();
               localStorage.setItem('card-status', 'change');
               cards();
            } else {
               console.log('Please, fill inputs');
            }
         });
      }
   });
}

export default change;