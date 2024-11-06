import { cards } from "./cards";
import { createModal } from "./add";

const BTN_CHANGE = 'change';

function change(viewTasks) {
   viewTasks.addEventListener('click', (e) => {
      if (e.target.classList.contains('change')) {
         const cardId = e.target.getAttribute('data-id');
         const changeButton = document.createElement('button');
         const addButton = document.querySelector('.addButton');
         let changeObj = document;
         let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];
         let [inputLabel, inputTopic, inputComment, modalAdd, modalWrapp] = createModal(BTN_CHANGE, e);

         changeObj = cardsObj.filter(obj => cardId == obj.id);
         inputLabel.value = changeObj[0].label;
         inputTopic.value = changeObj[0].topic;
         inputComment.value = changeObj[0].comment;

         changeButton.innerText = 'Change';
         changeButton.style = `
            width: 125px;
            height: 50px;
            display: block;
            border: 0;
            border-radius: 10px;
            background-color: #dadedf;
         `;

         changeButton.classList.add('hover');

         modalAdd.appendChild(changeButton);

         changeButton.addEventListener('click', ()=> {
            if (inputLabel.value != '' && inputTopic.value != '' && inputComment.value != '') {
               cardsObj = cardsObj.map(card => {
                  if (card.id == cardId) {
                     return {
                        label: inputLabel.value,
                        topic: inputTopic.value,
                        comment: inputComment.value,
                        id: card.id
                     }
                  }
                  else return card;
               });
               localStorage.setItem('cards', JSON.stringify(cardsObj));
               modalWrapp.style.display = 'none';
               viewTasks.innerHTML = '';
               cards(viewTasks);
               addButton.style.display = 'block';
            } else {
               console.log('Please, fill inputs');
            }
         });
      }
   });
}

export default change;