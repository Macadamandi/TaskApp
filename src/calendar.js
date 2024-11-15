import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '@fullcalendar/multimonth';
import interactionPlugin from '@fullcalendar/interaction';

const calendarEl = document.getElementById('calendar');
const calendar = new Calendar(calendarEl, {
  plugins: [ multiMonthPlugin,dayGridPlugin, timeGridPlugin, listPlugin,interactionPlugin ],
  initialView: 'dayGridMonth',
  selectable: true,
  editable: true,
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'multiMonthYear,dayGridMonth,timeGridWeek,dayGridDay'
  },
})

calendar.on('dateClick', function(info) {
  const title = prompt('Введите название события:'); // Запрос названия событияgit git
    if (title) {
      calendar.addEvent({
        title: title,
        start: info.dateStr, // Установка даты события
        allDay: true // Указывает, что событие на весь день
      });
    }
});

calendar.render();