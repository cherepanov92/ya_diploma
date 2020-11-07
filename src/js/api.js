export class NewsApi {
  constructor() {
    this.api_key = '6e607a3e610445eca6d52269ae8706d9';
    this.base_url = `https://nomoreparties.co/news/v2/everything?apiKey=${this.api_key}`;

    // с прошедней недели
    let week_ms = 1000*60*60*24*7;
    this.last_week = new Date(new Date().getTime() - week_ms).toISOString();

    // до текущего дня
    this.today = new Date().toISOString();
    this.pageSize = 100;
  }

  getNews(query) {
    const request = `${this.base_url}&q=${query}&from=${this.last_week}&to=${this.today}&pageSize=${this.pageSize}&language=ru`;
    return fetch(request)
    .then(result => {
      if (result.ok) {
        return result.json();
      }
      return Promise.reject(`статус ответа - ${result.status}`);
    });
  }
}

export class GitApi {
  constructor() {
    this.base_url = 'https://api.github.com/repos/cherepanov92/ya_diploma/commits';
  }

  getCommits() {
    return fetch(this.base_url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`статус ответа - ${res.status}`);
    });
  }
}
