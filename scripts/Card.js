//
// Класс добавления новой карочки в index.html
//
export default class Card {
  constructor(cardData, cardTemplate, openImagePopup) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardTemplate = cardTemplate;
    this._openImagePopup = openImagePopup;
  }
//
// получение разметки template
//
_getTemplate() {
  const cardElement = document
    .querySelector(this._cardTemplate)
    .content
    .querySelector('.card')
    .cloneNode(true);
  // возврат разметки card
  return cardElement;
}
//
//
//
generateCard() {
  this._element = this._getTemplate();
  this._userElementCardImage = this._element.querySelector('.card__image');
  this._eventActiveLike = this._element.querySelector('.card__heart-button');
  this._eventDeleteButton = this._element.querySelector('.card__delete');
  this._userElementCardImage.alt = 'Картинка ' + this._name;
  this._userElementCardImage.src = this._link;
  this._element.querySelector('.card__text').textContent = this._name;
  this._eventOpenImg = this._element.querySelector('.card__open-image');
  this._setEventListeners();
  //
  return this._element;
}
//
// Функция удаления карочки из index.html
//
_deleteCard () {
  this._element.remove();
  this._element = null;
}
//
// Функция заменяет картинку сердечка при нажатии на него
//
_makeLike() {
  this._eventActiveLike.classList.toggle('card__heart-button-active');
}
//
// Устанавливаем слушатели на карточку
// 
  _setEventListeners() {
    // открытие попапа просмотра изображения кликом по изображению
    this._userElementCardImage.addEventListener('click', () => {
      this._openImagePopup(this._name, this._link);
    })
    // слушатель кнопки удаления карточки
    this._eventDeleteButton.addEventListener('click', () => {
      this._deleteCard();
    })
    // слушатель кнопки лайк
    this._eventActiveLike.addEventListener('click', () => {
        this._makeLike();
    })
  }
}
