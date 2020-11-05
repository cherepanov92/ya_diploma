const search_form_block = document.querySelector('.search-form');
const search_input = search_form_block.querySelector('.search-form__input');
const search_error = search_form_block.querySelector('.search-form__error');
const search_submit = search_form_block.querySelector('.search-form__submit');

const content = document.querySelector('.root__content');
const content_preloader = content.querySelector('.content__preloader')
const content_bad_request = content.querySelector('.content__bad_request')
const content_result = content.querySelector('.content__result-container')

export default class SearchNews {
  constructor(news_list, news_api) {
    search_form_block.addEventListener('submit', this._search.bind(this));
    this.news_api = news_api;
    this.news_list = news_list;
  }

  _search(event) {
    event.preventDefault();
    if (this._input_validate()) {
      localStorage.clear();
      content_result.style = 'display: none;';
      content_bad_request.style = 'display: none;';
      content_preloader.style = 'display: block;';
      this.news_list.clear();

      search_input.disabled = true;
      search_submit.disabled = true;
      search_error.textContent = ''
      this.news_api.getNews(search_input.value)
      .then(result => {
        this._check_data(result.articles);
        this._storage_update_data(search_input.value, result);
      })
      .catch(error => {
        search_error.textContent = `Ошибка при запросе: ${error}`;
      })
      .finally(() => {
        content_preloader.style = 'display: none;';
        search_input.disabled = false;
        search_submit.disabled = false;
      });
    } else {
      search_input.disabled = false;
      search_submit.disabled = false;
    }
  }

  _check_data(data) {
    if (data.length) {
      content_bad_request.style = 'display: none;';
      content_result.style = 'display: block;';
      this.news_list.render(data);
    } else {
      localStorage.clear();
      content_bad_request.style = 'display: block;';
      content_result.style = 'display: none;';
    }
  }

  _storage_update_data(query, result) {
    const result_str = JSON.stringify(result.articles);
    localStorage.clear();
    localStorage.setItem('articles', result_str);
    localStorage.setItem('query', query);
  }

  _input_validate() {
    if (search_input.value === '') {
      search_error.textContent = "* Это поле не может быть пустым";
      return false;
    } else if (search_input.value.length < 3) {
      search_error.textContent = "* Минимальное кол-во символов 3";
      return false;
    } else {
      return true;
    }
  }
}
