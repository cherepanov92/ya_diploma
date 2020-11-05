import './index.css';
import { NewsApi } from "./js/api";
import NewsCard from './js/news-card';
import NewsCardList from './js/news-card-list';
import SearchNews from './js/search-news';

const card_list = new NewsCardList(new NewsCard());
const api_news = new NewsApi();
const search_news = new SearchNews(card_list, api_news);

search_news.onload();
