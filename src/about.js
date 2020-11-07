import './about.css';
import Swiper from 'swiper';

import { GitApi } from './js/api';
import GitCard from './js/git-card';
import GitCardList from './js/git-card-list';

const git_swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  fadeEffect: {
      crossFade: 'true'
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

setTimeout(() => {git_swiper.update();}, 1000);

const git_api = new GitApi();
const git_card = new GitCard();
const git_card_list = new GitCardList(git_card);

git_api.getCommits()
.then(result => {
  return git_card_list.render(result);
})
.catch(err => {
  console.log(`Ошибка: ${err}`);
})
