import './analytics.css';
import Analytic from './js/news-analytics';
const analytic = new Analytic;

// результаты
const articles = JSON.parse(localStorage.getItem('articles'));
// Объекты дат
const graph_days = document.querySelectorAll('.graph__data_name');
// Объекты графиков
const graph_values = document.querySelectorAll('.graph__data_value');

// заполняем тайтл текстом запроса
const analytic_title = document.querySelector('.stat__result');
analytic_title.textContent = `«${localStorage.getItem('query')}»`;

// заполняем кол-во результатов за неделю
const analytic_week_col = document.querySelector('.week_col');
analytic_week_col.textContent = localStorage.getItem('total');

// заполняем кол-во упоминаний в загаловках
const analytic_title_col = document.querySelector('.title_col');
analytic_title_col.textContent = analytic.findWordRecordsInArray(localStorage.getItem('query'), articles).length;

// Заполняем значение месяца
const mounth = document.querySelector('.graph__mounth');
// mounth.textContent = new Date().toLocaleString('ru-RU', { month: 'long'});
mounth.textContent = analytic.getMounthName();

// Отрисовываем дни графика
const last_week_days = analytic.getLastWeekDays();
graph_days.forEach((item, i) => {
  item.textContent = last_week_days[i];
});

// Отрисовываем шкалы графика
// Получаем даты новостей
const news_dates = analytic.getNewsDates(articles);
// Проходимся по списку дат и заполяем графики
graph_days.forEach((day, i) => {
  const day_records = news_dates.filter(news => {
    return news === day.innerText
  }).length;
  graph_values[i].textContent = day_records;
  graph_values[i].style.width = `${day_records}%`;
})

