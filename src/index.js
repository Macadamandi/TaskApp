import redirect from './modules/tasks/tasktab';
import { initTasks } from './tasks';

window.addEventListener('load', () => {
   redirect(initTasks);
});
