export default class GitCard {
  create(date, avatar_url, name, email, message) {
    const card_template = document.querySelector('#git_card_temp').content.cloneNode(true);

    const card_data = card_template.querySelector('.carousel__date');
    // todo: форматировать дату
    card_data.textContent = date;

    const card_avatar = card_template.querySelector('.carousel__avatar');
    card_avatar.src = avatar_url ? avatar_url : '../src/images/not_image.jpg';;

    const card_name = card_template.querySelector('.carousel__name');
    card_name.textContent = name;

    const card_email = card_template.querySelector('.carousel__email');
    card_email.textContent = email;

    const card_paragraph = card_template.querySelector('.carousel__comment');
    card_paragraph.textContent = message;

    return card_template;
  }
}
