import { createNewCard } from './cards.js';
import { createTask } from './view.js';

const BTN_ADD = 'add';

function add() {
   const addButton = document.createElement('button');
   addButton.innerText = 'Add Task';
   addButton.style = `
      width: 125px;
      height: 50px;
      display: block;
      border: 0;
      border-radius: 10px;
      background-color: #dadedf;
   `;
   addButton.classList.add('hover', 'addButton');
   createTask.appendChild(addButton);


   addButton.addEventListener('click', () => {
      createModal(BTN_ADD);
   })
}


function createModal(BTN_CONST) {
   const taskPanel = document.querySelector('.ajax-content'),
      modalAdd = document.createElement('div'),
      modalWrapp = document.createElement('div'),
      divLabel = document.createElement('div'),
      divTopic = document.createElement('div'),
      divComment = document.createElement('div'),
      inputLabel = document.createElement('input'),
      inputTopic = document.createElement('input'),
      inputComment = document.createElement('textarea'),
      labelLabel = document.createElement('label'),
      labelTopic = document.createElement('label'),
      labelComment = document.createElement('label');

   modalWrapp.style = `
         background-color: rgba(0,0,0,0.3);
         position: absolute;
         width: 100%;
         height: 100%;
      `;

   taskPanel.style = `
         position: relative;
      `;
   modalAdd.style = `
         width: 89%;
         height: 77%;;
         background-color: #ffffff;
         left: 50%;
         top: 50%;
         transform: translate(-50%, -50%);
         position: absolute;
         padding: 20px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
      `;

   inputLabel.style = `
         width: 100%;
         height: 40px;
         padding: 10px;
         background-color: #e0e2e3;
         border: none;
      `;

   inputTopic.style = `
         width: 100%;
         height: 40px;
         padding: 10px;
         background-color: #e0e2e3;
         border: none;
      `;

   inputComment.style = `
         width: 100%;
         height: 40px;
         padding: 10px;
         height: 90px;
         resize: none;
         background-color: #e0e2e3;
         border: none;
      `;

   divLabel.style = `margin-bottom: 15px; width: 50%;`;
   divTopic.style = `margin-bottom: 15px; width: 50%;`;
   divComment.style = `margin-bottom: 15px; width: 50%;`;

   inputLabel.id = 'tag';
   labelLabel.setAttribute('for', 'tag');

   inputTopic.id = 'topic';
   labelTopic.setAttribute('for', 'topic');

   inputComment.id = 'comment';
   labelComment.setAttribute('for', 'comment');

   labelLabel.textContent = 'Tag';
   labelTopic.textContent = 'Topic';
   labelComment.textContent = 'Comment';

   divLabel.appendChild(labelLabel);
   divLabel.appendChild(inputLabel);

   divTopic.appendChild(labelTopic);
   divTopic.appendChild(inputTopic);

   divComment.appendChild(labelComment);
   divComment.appendChild(inputComment);

   modalAdd.classList.add('dataModal');
   modalAdd.appendChild(divLabel);
   modalAdd.appendChild(divTopic);
   modalAdd.appendChild(divComment);

   switch (BTN_CONST) {
      case 'add':
         const addButtonToLocalStorage = document.createElement('button');
         addButtonToLocalStorage.innerText = 'Add';
         addButtonToLocalStorage.style = `
            width: 125px;
            height: 50px;
            display: block;
            border: 0;
            border-radius: 10px;
            background-color: #dadedf;
         `;
         addButtonToLocalStorage.classList.add('hover');

         modalAdd.appendChild(addButtonToLocalStorage);
         modalWrapp.appendChild(modalAdd);
         taskPanel.appendChild(modalWrapp);
         addToLocalStorage(inputLabel, inputTopic, inputComment, modalWrapp, addButtonToLocalStorage);
         break;
      case 'change':
         modalWrapp.appendChild(modalAdd);
         taskPanel.appendChild(modalWrapp);
         break;
   }

   modalWrapp.addEventListener('click', () => {
      modalWrapp.remove();
   });

   modalAdd.addEventListener('click', (e) => {
      e.stopPropagation();
   });

   switch (BTN_CONST) {
      case 'add':
         return [inputLabel, inputTopic, inputComment, modalWrapp];
      case 'change':
         return [inputLabel, inputTopic, inputComment, modalAdd, modalWrapp];
   }
}

function addToLocalStorage(inputLabel, inputTopic, inputComment, modalWrapp, addButtonToLocalStorage) {
   addButtonToLocalStorage.addEventListener('click', () => {
      createNewTask(inputLabel.value, inputTopic.value, inputComment.value, modalWrapp);
   });
}

function createNewTask(tag, topic, comment, modalWrapp) {
   if (tag != '' && topic != '' && comment != '') {
      createNewCard(tag, topic, comment);
      modalWrapp.remove();
   }
   else {
      console.log('Fields cannot be empty');
   }
}

export { add, createModal };