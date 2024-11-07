import { viewTasks, createTask, view } from './modules/tasks/view';
import { add } from './modules/tasks/add';
import { removeCard } from './modules/tasks/remove';
import { cards } from './modules/tasks/cards';
import { filter } from './modules/tasks/filter';
import change from './modules/tasks/change';

export function initTasks () {
   view();
   add();
   cards();
   removeCard();
   change();
   filter();
}