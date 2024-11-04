import { viewTasks, createTask, view } from './modules/tasks/view';
import add from './modules/tasks/add';
import { removeCard } from './modules/tasks/remove';
import { cards } from './modules/tasks/cards';
import { filter } from './modules/tasks/filter';

export function initTasks () {
   view();
   add(createTask, viewTasks);
   cards(viewTasks);
   removeCard(viewTasks);
   filter(viewTasks);
}