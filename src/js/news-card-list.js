class NewsCardList {
  constructor(news_card) {
    this.news_card = news_card;
    this.news_card_container = document.querySelector('.content__result-cards');
    this.news_card_btn = document.querySelector('.content__button-more');
    this.card_counter = 0;
    this.card_raw_range = 3;
  }

  render(cards) {
    for (let i = this.card_counter; i < Math.min(this.card_counter + this.card_raw_range, cards.length); i++) {
      const article = cards[i];
      const format_news_date = new Date(Date.parse(article.publishedAt)).toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});

      this._addCard(
        article.urlToImage,
        article.url,
        format_news_date,
        article.description,
        article.title,
        article.source.name
        );


      }
      this.card_counter = this.card_counter + this.card_raw_range;
    this._check(cards);
  }

  clear() {
    while (this.news_card_container.firstChild) this.news_card_container.removeChild(this.news_card_container.firstChild);
    this.card_counter = 0;
  }

  _addCard(image_url, news_url, date, description, title, source) {
    const card = this.news_card.create(image_url, news_url, date, description, title, source);
    this.news_card_container.appendChild(card);
  }

  _check(cards) {
    if (this.card_counter < cards.length) {
      this.news_card_btn.style = 'display: block;';
      this.news_card_btn.onclick = () => this.render(cards);
    } else {
      this.news_card_btn.style = 'display: none;';
    }
  }
}

export default NewsCardList
