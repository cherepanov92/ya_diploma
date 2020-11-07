export default class GitCardList {
  constructor(git_card) {
    this.carousel = document.querySelector('.swiper-wrapper');
    this.git_card = git_card;
  }

  render(commits) {
    const git_record_range = 20;
    for (let i = 0; i < git_record_range; i++) {
      if (commits[i].commit != null) {
        const new_git_card = this.git_card.create(commits[i].commit.committer.date, commits[i].author.avatar_url, commits[i].commit.committer.name, commits[i].commit.committer.email, commits[i].commit.message);
        this.carousel.appendChild(new_git_card);
      }
    }
  }
}
