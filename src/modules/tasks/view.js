const viewTasks = document.createElement('div'),
   createTask = document.createElement('div');

function view() {
   const taskPanel = document.querySelector('.ajax-content');

   createTask.style = `
      border-bottom: 1px solid #dddddd;
      width: 100%;
      height: 150px;
      min-height: 150px;
      max-height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   `;

   viewTasks.style = `
      background-color: #dadedf;
      width: 100%;
      flex-grow: 5;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      padding: 15px;
      align-items: stretch;
      overflow-y: scroll;
      max-height: 600px;
   `;

   taskPanel.appendChild(createTask);
   taskPanel.appendChild(viewTasks);
}

export { view, viewTasks, createTask };