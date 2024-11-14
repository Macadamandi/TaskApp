import { view } from './modules/tasks/view';
import { add } from './modules/tasks/add';
import { removeCard } from './modules/tasks/remove';
import { cards } from './modules/tasks/cards';
import { search } from './modules/tasks/search';
import change from './modules/tasks/change';
import { filter } from './modules/tasks/filter';


view();
add();
filter();
cards();
removeCard();
change();
search();

