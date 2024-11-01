import { viewTasks, createTask, view } from './modules/view';
import redirect from './modules/routing/tasks';
import add from './modules/add';
import {removeCard} from './modules/remove';
import {cards} from './modules/cards'

window.addEventListener('load', () => {
   cards(viewTasks);
   view();
   redirect(viewTasks);
   add(createTask, viewTasks);
   removeCard(viewTasks);
}); 