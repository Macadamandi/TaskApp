import { initTasks } from "../../tasks";

// Функция, которая загружает контент в `mainContent` после перезагрузки
function redirect() {
   const tasks = document.querySelector('.tasks');

   tasks.addEventListener('click', () => {
      // Устанавливаем флаг для вызова initTasks после перезагрузки
      localStorage.setItem('runInitTasks', 'true');
      location.reload(); // Перезагружаем страницу
   });
}

export default redirect;
