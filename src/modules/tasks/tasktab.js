import { initTasks } from "../../tasks";

let isTaskLoaded = false; // Флаг для отслеживания состояния загрузки Tasks

function redirect(initTasks) {
   const tasks = document.querySelector('.tasks'),
      mainContent = document.querySelector('.ajax-content');
   
   tasks.addEventListener('click', () => {

      if (isTaskLoaded) {
         // Если "Tasks" уже загружен, выходим из функции не перезагружаем содержимое
         return;
      }

      loadContent('/dist/tasks.html', mainContent, initTasks);
   });
}

function loadContent(url, mainContent, initTasks) {
   fetch(url)
      .then(response => response.text())
      .then(html => {
         mainContent.innerHTML = html;
         isTaskLoaded = true; // Устанавливаем флаг загрузки Tasks

         const script = mainContent.querySelector('script');
         
         // Если скрипт найден, загружаем его
         if (script) {
            loadScript(script.src,initTasks);
            script.remove();
         }
      })
      .catch(error => console.error("Error of download page: ", error));
}

function loadScript(src, initTasks) {
   // Проверяем, если скрипт уже загружен
   if (!document.querySelector(`script[src="${src}"]`)) {
      const newScript = document.createElement('script');
      newScript.src = src;
      newScript.defer = true; // Добавляем атрибут defer
      newScript.onload = () => {
         if (typeof initTasks === 'function') {
            initTasks();
         }
         else initTasks();
      };
      document.body.appendChild(newScript);
   }
}

export default redirect;
