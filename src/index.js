
window.addEventListener('load', () => {
   const calendar = document.querySelector('.calendar'),
      tasks = document.querySelector('.tasks'),
      ajaxContent = document.querySelector('.ajax-content');

   console.log(window.location.pathname);


   calendar.addEventListener('click', () => {
      loadContent('/dist/calendar/calendar.html', ajaxContent, '../calendal/calendar.bundje.js');

   })

   tasks.addEventListener('click', () => {
      loadContent('/dist/tasks/tasks.html', ajaxContent, '../tasks/tasks.bundle.js');

   })

});

// Функция загрузки контента и вызова `initTasks`
function loadContent(url, ajaxContent, scriptFile) {
   fetch(url)
      .then(response => response.text())
      .then(html => {
         ajaxContent.innerHTML = html;

         console.log(window.location.pathname);


         const allScripts = document.querySelectorAll(`script[src="${scriptFile}"]`);

         if(allScripts) {
            for (const script of allScripts) {
               script.remove();
            }
         }

         const script = document.createElement('script');
         script.src = `${scriptFile}`;
         script.defer = true;
         script.onload = () => {
            console.log(`${scriptFile} успешно загружен и выполнен`);
         };
         script.onerror = (error) => {
            console.error('Ошибка загрузки скрипта', error);
         };

         document.body.appendChild(script);
      })
      .catch(error => console.error("Error of download page: ", error));
}
