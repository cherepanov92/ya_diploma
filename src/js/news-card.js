export default class NewsCard {
  create(image_url, news_url, date, description, title, source) {
    const temp = (document.querySelector('#result-card-template').content);
    const news_temp = temp.cloneNode(true);
    const news_image = news_temp.querySelector('.result-card__image');
    const news_date = news_temp.querySelector('.result-card__date');
    const news_title = news_temp.querySelector('.result-card__title');
    const news_description = news_temp.querySelector('.result-card__subtitle');
    const news_source = news_temp.querySelector('.result-card__source');

    news_image.src = image_url ? image_url : '../src/images/not_image.jpg';
    news_date.textContent = date;
    news_description.textContent = description;
    news_title.textContent = title;
    news_source.textContent = source;
    news_source.href = news_url;

    return news_temp;
  }
}
