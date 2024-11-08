import redirect from './modules/tasks/tasktab';
import { initTasks } from "./tasks"; // Импортируем initTasks только один раз

window.addEventListener('load', () => {
   const mainContent = document.querySelector('.ajax-content');

   // Проверка наличия флага в localStorage для вызова `initTasks`
   if (localStorage.getItem('runInitTasks') === 'true') {
      // Загружаем контент и инициализируем задачи
      loadContent('/dist/tasks.html', mainContent);
      localStorage.removeItem('runInitTasks'); // Удаляем флаг после инициализации
   }

   // Инициализируем обработчик кликов для "Tasks"
   redirect();
});

// Функция загрузки контента и вызова `initTasks`
function loadContent(url, mainContent) {
   fetch(url)
      .then(response => response.text())
      .then(html => {
         mainContent.innerHTML = html;
         initTasks(); // Вызываем initTasks после загрузки контента
      })
      .catch(error => console.error("Error of download page: ", error));
}
