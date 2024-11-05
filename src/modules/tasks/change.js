import { cards } from "./cards";
import { createModal } from "./add";

const BTN_CHANGE = 'change';

function change(viewTasks) {
   viewTasks.addEventListener('click', (e) => {
      if (e.target.classList.contains('change')) {
         const cardId = e.target.getAttribute('data-id');
         const changeButton = document.createElement('button');
         let changeObj;
         let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];
         let [inputLabel, inputTopic, inputComment, modalAdd] = createModal(BTN_CHANGE, e);

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
               cardsObj.map(card => {
                  if (card.id == cardId) {
                     card.label = inputLabel.value;
                     card.topic = inputTopic.value;
                     card.comment = inputComment.value;
                  }
               });
            } else {
               console.log('Please, fill inputs');
            }
         });
      }
   });
}

export default change;