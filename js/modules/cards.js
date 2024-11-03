class Cards {
   constructor(label, topic, comment, id) {
      this.label = label;
      this.topic = topic;
      this.comment = comment;
      this.id = id || generateUniqueId();
   }

   createCard(viewTasks) {
      const cardWrap = document.createElement('div'),
         cardLabel = document.createElement('span'),
         cardTopic = document.createElement('h3'),
         cardComment = document.createElement('p'),
         cardData = document.createElement('span'),
         dotsWrap = document.createElement('div'),
         dots =  document.createElement('span'),
         menu = document.createElement('div'),
         menuDelete = document.createElement('div'),
         menuChange = document.createElement('div');

      const currentDate = new Date();

      const day = String(currentDate.getDate()).padStart(2, '0'); // День с ведущим нулем
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяц (начинается с 0, добавляем 1)
      const year = currentDate.getFullYear(); // Год
      const hours = String(currentDate.getHours()).padStart(2, '0'); // Часы с ведущим нулем
      const minutes = String(currentDate.getMinutes()).padStart(2, '0'); // Минуты с ведущим нулем

      const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;

      cardWrap.style = `
         flex: 0 0 calc(25% - 20px);
         box-sizing: border-box;
         padding: 10px;
         box-shadow: 1px 1px 5px #b9b9b9;
         display: flex;
         flex-direction: column;
         border-radius: 5px;
         background-color: #ffffff;
         margin: 10px;
         position: relative;
      `;

      cardLabel.textContent = this.label;
      cardTopic.textContent = this.topic;
      cardComment.textContent = this.comment;
      cardData.textContent = formattedDate;

      cardLabel.style = `
         margin-bottom: 20px;
         align-self: start;
         padding: 3px 6px;
         background-color: #37B1B2;
         border-radius: 10px;
      `;
      cardTopic.style = `
         margin-bottom: 10px;
         height: 60px;
      `;
      cardComment.style = `
         margin-bottom: 40px;
         height: 80px;
      `;

      dotsWrap.style = `
         position: absolute;
         right: 4px;
         top: 6px;
         display: flex;
         flex-direction: column;
         align-items: end;
      `;

      dots.style = `
         background-image: url('../../img/icons/icon-menu.png');
         width: 24px;
         height: 24px;   
         display: inline-block;
      `;

      menu.style = `
         width: 50px;
         background-color: rgb(101, 101, 101);
         padding: 7px;
         color: rgb(255, 255, 255);
         font-size: 11px;
      `;

      menu.classList.add('hide');

      menuDelete.style = `
         margin-bottom: 7px;
      `;

      menuDelete.textContent = 'Delete';
      menuChange.textContent = 'Change';
      
      menuDelete.classList.add('hover', 'remove');
      menuChange.classList.add('hover');

      menuDelete.setAttribute('data-id', `${this.id}`);

      dotsWrap.appendChild(dots);
      menu.appendChild(menuDelete);

      dotsWrap.appendChild(menu);

      dots.classList.add('hover');

      cardWrap.appendChild(dotsWrap);
      cardWrap.appendChild(cardLabel);
      cardWrap.appendChild(cardTopic);
      cardWrap.appendChild(cardComment);
      cardWrap.appendChild(cardData);

      viewTasks.appendChild(cardWrap);

      dots.addEventListener('click', () => {
         if (menu.classList.contains('hide')) {
            menu.classList.remove('hide');
            menu.classList.add('show');
         } else {
            menu.classList.remove('show');
            menu.classList.add('hide');
         }
      });

      document.addEventListener('click', (e) => {
         if(!menu.contains(e.target) && !dots.contains(e.target)) {
            menu.classList.remove('show');
            menu.classList.add('hide');
         }
      });
   }
}

function generateUniqueId() {
   return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function cards(viewTasks) {
   const cards = JSON.parse(localStorage.getItem('cards')) || [];
   console.log(cards);

   const restoredCards = cards.map(data => new Cards(data.label, data.topic, data.comment, data.id));

   restoredCards.forEach(card => card.createCard(viewTasks));
}

function createNewCard(tag, topic, comment, viewTasks) {
   const card = new Cards(tag, topic, comment);

   const cardsObj = JSON.parse(localStorage.getItem('cards')) || [];

   cardsObj.push(card);

   localStorage.setItem('cards', JSON.stringify(cardsObj));

   viewTasks.innerHTML = '';
   cards(viewTasks);
}


export { cards, createNewCard, Cards };