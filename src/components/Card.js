//
// Класс добавления новой карочки в index.html
//
export default class Card {
  constructor({ cardData, cardTemplate, userId, cardClick, cardDelete, setLike, removeLike }) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardId = cardData._id;
    this._likes =  cardData.likes;
    this._cardOwnerId = cardData.owner._id;
    this._cardTemplate = cardTemplate;
    this._userId = userId;
    this._cardClick = cardClick;
    this._cardDelete = cardDelete;
    this._setLike = setLike;
    this._removeLike = removeLike;
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
  this._deleteButton(); // проверяем, принадлежит ли картояка текущему юзеру и если да, то показываем кнопку удаления карточки
  this._setEventListeners();
  this._isSetLike();
  this._likesCount = this._element.querySelector('.card__heart-counter');
  this._likesCount.textContent = this._likes.length;
  //
  return this._element;
}
//
// Функция удаления карочки из index.html
//
deleteCard() {
  this._element.remove();
  this._element = null;
}
//

_deleteButton() {
  if (this._userId !== this._cardOwnerId) {
    this._eventDeleteButton.remove();
  }
}
//
// Функция заменяет картинку сердечка при нажатии на него и проверяет установку лайка карточке
//
_isSetLike() {
  if (this._likes.some((user) => { // проверяем элементы массива по условию переданной функции
    return this._userId === user._id;
  })) {
    this._eventActiveLike.classList.add('card__heart-button-active');
  }
}
//
// Установить/снять лайк
// 
makeLike(item) {
  this._eventActiveLike.classList.toggle('card__heart-button-active');
  this._likes = item.likes;
  this._likesCount.textContent = this._likes.length; 
}
//
// Устанавливаем слушатели на карточку
// 
  _setEventListeners() {
    // открытие попапа просмотра изображения кликом по изображению
    this._userElementCardImage.addEventListener('click', () => {
      this._cardClick(this._name, this._link);
    })


    // слушатель кнопки удаления карточки
    this._eventDeleteButton.addEventListener('click', () => {
      //this._deleteCard();
      this._cardDelete(this._cardId);
    })
    // слушатель кнопки лайк
    this._eventActiveLike.addEventListener('click', () => {
        //this._makeLike();
        if (this._eventActiveLike.classList.contains('card__heart-button-active')) {
          this._removeLike(this._cardId);
        } else {
          this._setLike(this._cardId);
        }
    })
  }
}
