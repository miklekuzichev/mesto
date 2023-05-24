const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupFormEdit = document.querySelector('.popup_form_edit');
const popupFormAdd = document.querySelector('.popup_form_add');
const popupFormOpenImg = document.querySelector('.popup_form_open-img');
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const buttonPopupEditClose = document.querySelector('.popup_form_edit').querySelector('.popup__close');
const buttonPopupAddClose = document.querySelector('.popup_form_add').querySelector('.popup__close');
const buttonPopupOpenImgClose = document.querySelector('.popup_form_open-img').querySelector('.popup__close');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const formEditElement = document.querySelector('.popup_form_edit').querySelector('.popup__form');
const formAddElement = document.querySelector('.popup_form_add').querySelector('.popup__form');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profile');
const buttonPopupAdd = document.querySelector('.profile__add-button');

const imageNameInput = document.querySelector('.popup__input_type_imagename');
const imageLinkInput = document.querySelector('.popup__input_type_imageurl');

const cardTemplate = document.querySelector('#card-template').content;
const cardLoadTemplate = document.querySelector('.cards');
//
// Добавление слушателя событий для кнопки submit попапа редактирования данных профиля
//
formEditElement.addEventListener('submit', handleFormSubmit); 
//
// Добавление слушателя событий для кнопки submit попапа добавления новой карточки
//
formAddElement.addEventListener('submit', imageFormSubmit);
//
// Добавляем карточки при загрузке страницы из массива initialCards и устанавливаем слушатели событий на кнопки открытия картинки, удаления картинки и кнопки лайка
for(let i = 0; i < initialCards.length; i++) {
  addInitCard(initialCards[i].name, initialCards[i].link);
  // к каждой кнопке привязываем обработчик
  EventListeners(i);
}
//
// Функция добавления новой карочки в index.html из массива при загрузке страницы
//
function addInitCard (titleValue, srcValue) {
  const userElement = cardTemplate.querySelector('.card').cloneNode(true);
  userElement.querySelector('.card__image').src = srcValue;
  userElement.querySelector('.card__image').alt = 'Картинка ' + titleValue;
  userElement.querySelector('.card__text').textContent = titleValue;
  cardLoadTemplate.append(userElement);
}
//
// Функция добавления новой карочки в index.html
//
function addNewCard (titleValue, srcValue) {
  const userElement = cardTemplate.querySelector('.card').cloneNode(true);
  userElement.querySelector('.card__image').src = srcValue;
  userElement.querySelector('.card__image').alt = 'Картинка ' + titleValue;
  userElement.querySelector('.card__text').textContent = titleValue;
  cardLoadTemplate.prepend(userElement);
}
//
// Функция удвления карочки из index.html
//
function deleteCard () {
  this.parentElement.remove();
}
//
// Функция заменияет картинку сердечка при нажатии на него
//
function makeLike (a, b, elem) {
  function replaceClass (a, b, elem) {
    elem.classList.remove(a);
    elem.classList.add(b);
  }
  if (elem.classList.contains(a)) {
    replaceClass(a, b, elem);
  } else {
    replaceClass(b, a, elem);
  }
}
//
// Функция открытия попапа картинки
//
function openImagePopup() {
  const linkImg = this.querySelector('.card__image').src;
  const textImg = this.parentElement.querySelector('.card__text').textContent;
  popupFormOpenImg.querySelector('.popup__img').src = linkImg;
  popupFormOpenImg.querySelector('.popup__figcaption').textContent = textImg;
  popupOpened(popupFormOpenImg);
};
//
// Функция установки слушателей событий на кнопки открытия картинки, удаления картинки и кнопки лайка
//
function EventListeners (i = 0) {
  const eventOpenImg = document.querySelectorAll('.card__open-image')[i];
  const eventDeleteButton = document.querySelectorAll('.card__delete')[i];
  const eventActiveLike = document.querySelectorAll('.card__heart-button')[i];
  eventOpenImg.addEventListener('click', openImagePopup); 
  eventDeleteButton.addEventListener('click', deleteCard);
  eventActiveLike.addEventListener('click', function() {
    makeLike('card__heart-button', 'card__heart-button-active', this);
  });
}
//
// Функция открытия попапа
//
function popupOpened (popup_type) {
  popup_type.classList.add('popup_opened');
}
//
// Функция закрытия попапа
//
function popupRemove (popup_type) {
    popup_type.classList.remove('popup_opened');
}
//
// Функция - обработчик «отправки» формы редактирования профиля
//
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popupRemove(popupFormEdit);
}
//
// Функция - обработчик «отправки» формы добавления новой карточки
//
function imageFormSubmit (evt) {
  evt.preventDefault(); 
  addNewCard(imageNameInput.value, imageLinkInput.value);
  popupRemove(popupFormAdd);
  evt.target.reset(); // сбрасывает поля формы после закрытия попапа
  EventListeners(); // к новой карточке привязываем обработчик
}
//
// Добавление слушателя событий для попапа редактирования данных профиля
//
buttonPopupEdit.addEventListener('click', () => {
    popupOpened(popupFormEdit);
    // Предзаполнение формы
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
});
//
// Добавление слушателя событий для попапа добавления новой карточки
//
buttonPopupAdd.addEventListener('click', () => {
    popupOpened(popupFormAdd);
});
//
// Добавление слушателя событий для кнопки закрытия попапа редактирования данных пользователя
//
buttonPopupEditClose.addEventListener('click', () => {
    popupRemove(popupFormEdit);
});
//
// Добавление слушателя событий для кнопки закрытия попапа добавления новой карточки
//
buttonPopupAddClose.addEventListener('click', () => {
    popupRemove(popupFormAdd);
});
//
// Добавление слушателя событий для кнопки закрытия попапа полноэкранного просмотра картинки
//
buttonPopupOpenImgClose.addEventListener('click', () => {
    popupRemove(popupFormOpenImg);
});
//



