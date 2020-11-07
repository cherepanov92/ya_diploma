import moment from 'moment'
moment.locale('ru');

export default class DataGraph {
  // поиск слов в заголовках результатов
  findWordRecordsInArray(word, array) {
    return array.filter((data) => {
      if (data['title']) {
        return (data['title'].toLowerCase().includes(word.toLowerCase()))
      }
    });
  }

  // Получение текущего месяца
  getMounthName() {
    return moment().format('MMMM');
  }

  // Список дат прошедшей недели
  getLastWeekDays() {
    const week_days = 7;
    const days_list = [];

    for (let i = 0; i < week_days; i++) {
      days_list.unshift(moment().subtract(i, 'days').format('D, ddd'));
    }

    return days_list;
  }

  // Список дат выхода новостей (с фотматом столбцов)
  getNewsDates(news_data) {
    return news_data.map(news => {
      return moment(news.publishedAt).format('D, ddd');
    })
  }
}
