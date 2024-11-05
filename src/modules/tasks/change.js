import { cards } from "./cards";
import { createModal } from "./add";

const BTN_CHANGE = 'change';

function change(viewTasks) {
   viewTasks.addEventListener('click', (e) => {
      if (e.target.classList.contains('change')) {
         const cardId = e.target.getAttribute('data-id');
         let changeObj;
         let cardsObj = JSON.parse(localStorage.getItem('cards')) || [];
         let [inputLabel, inputTopic, inputComment, modalWrapp] = createModal(BTN_CHANGE, e);
         changeObj = cardsObj.filter(obj => cardId == obj.id);
         inputLabel.value = changeObj[0].label;
         inputTopic.value = changeObj[0].topic;
         inputComment.value = changeObj[0].comment;
      }
   });
}

export default change;