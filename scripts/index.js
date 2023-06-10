const popupFormEdit = document.querySelector('.popup_type_edit');
const popupFormAdd = document.querySelector('.popup_type_add');
const popupFormOpenImg = document.querySelector('.popup_type_img');
const popupFormOpenImgPicture = popupFormOpenImg.querySelector('.popup__img');
const popupFormOpenImgFigcaption = popupFormOpenImg.querySelector('.popup__figcaption');
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const buttonPopupEditClose = document.querySelector('.popup_type_edit').querySelector('.popup__close');
const buttonPopupAddClose = document.querySelector('.popup_type_add').querySelector('.popup__close');
const buttonPopupOpenImgClose = document.querySelector('.popup_type_img').querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formEditElement = document.querySelector('.popup_type_edit').querySelector('.popup__form');
const formAddElement = document.querySelector('.popup_type_add').querySelector('.popup__form');
const buttonAddElement = document.querySelector('.popup_type_add').querySelector('.popup__button');
const editNameInput = document.querySelector('.popup__input_type_name');
const editJobInput = document.querySelector('.popup__input_type_profile');
const buttonPopupAdd = document.querySelector('.profile__add-button');
const imageNameInput = document.querySelector('.popup__input_type_imagename');
const imageLinkInput = document.querySelector('.popup__input_type_imageurl');
const cardTemplate = document.querySelector('#card-template').content;
const cardLoadTemplate = document.querySelector('.cards');
//
// Добавление слушателя событий для кнопки submit попапа редактирования данных профиля
//
formEditElement.addEventListener('submit', submitEditProfileForm); 
//
// Добавление слушателя событий для кнопки submit попапа добавления новой карточки
//
formAddElement.addEventListener('submit', submitImageForm);
//
// Добавляем карточки при загрузке страницы из массива initialCards и устанавливаем слушатели событий на кнопки открытия картинки, удаления картинки и кнопки лайка
for(let i = 0; i < initialCards.length; i++) {
  cardLoadTemplate.append(createCard(initialCards[i].name, initialCards[i].link));
}
//
// Предзаполнение контента на странице
profileTitle.textContent = "Жак-Ив Кусто";
profileSubtitle.textContent = "Исследователь океана";
//
buttonAddElement.classList.add('popup__button_disabled');
buttonAddElement.setAttribute("disabled", "");
//
// Функция добавления новой карочки в index.html
//
function createCard (titleValue, srcValue) {
  const userElement = cardTemplate.querySelector('.card').cloneNode(true);
  const userElementCardImage = userElement.querySelector('.card__image');
  userElementCardImage.src = srcValue;
  userElementCardImage.alt = 'Картинка ' + titleValue;
  userElement.querySelector('.card__text').textContent = titleValue;
  const eventOpenImg = userElement.querySelector('.card__open-image');
  const eventDeleteButton = userElement.querySelector('.card__delete');
  const eventActiveLike = userElement.querySelector('.card__heart-button');
  eventOpenImg.addEventListener('click', openImagePopup); 
  eventDeleteButton.addEventListener('click', deleteCard);
  eventActiveLike.addEventListener('click', function() {
    makeLike('card__heart-button-active', this);
  });
  return userElement;
}
//
// Функция удаления карочки из index.html
//
function deleteCard () {
  this.parentElement.remove();
}
//
// Функция заменяет картинку сердечка при нажатии на него
//
function makeLike (classActiveLike, elem) {
  elem.classList.toggle(classActiveLike);
}
//
// Функция открытия попапа картинки
//
function openImagePopup() {
  const linkImg = this.querySelector('.card__image').src;
  const textImg = this.parentElement.querySelector('.card__text').textContent;
  popupFormOpenImgPicture.src = linkImg;
  popupFormOpenImgPicture.alt = 'Картинка ' + textImg;
  popupFormOpenImgFigcaption.textContent = textImg;
  openPopup(popupFormOpenImg);
};
//
// Функция закрытия открытого попапа при нажатии клавиши Escape
//
function selectEventListenerKey(event) {
  const keyCodeEscape = 27; //27 - KeyCode "Escape"
  if(event.keyCode == keyCodeEscape) { 
    removeCurrentPopup();
  }
}
//
// Функция для закрытия открытого в данный момент попапа
//
function removeCurrentPopup () {
  const openedPopup = document.querySelector('.popup_opened');
  removePopup(openedPopup);
}
//
// Функция открытия попапа
//
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', selectEventListenerKey);
  document.addEventListener('mousedown', selectEventListenerClick);
}
//
// Функция закрытия попапа
//
function removePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', selectEventListenerKey);
  document.removeEventListener('mousedown', selectEventListenerClick);
};
//
// Функция - обработчик «отправки» формы редактирования профиля
//
function submitEditProfileForm (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = editNameInput.value;
    profileSubtitle.textContent = editJobInput.value;
    removePopup(popupFormEdit);
}
//
// Функция - обработчик «отправки» формы добавления новой карточки
//
function submitImageForm (evt) {
  evt.preventDefault(); 
  cardLoadTemplate.prepend(createCard(imageNameInput.value, imageLinkInput.value));
  removePopup(popupFormAdd);
  evt.target.reset(); // сбрасывает поля формы после закрытия попапа
  buttonAddElement.classList.add('popup__button_disabled');
  buttonAddElement.setAttribute("disabled", "");
  //EventListeners(); // к новой карточке привязываем обработчик
}
//
// Добавление слушателя событий для попапа редактирования данных профиля
//
buttonPopupEdit.addEventListener('click', () => {
  openPopup(popupFormEdit);
  // Предзаполнение формы
  editNameInput.value = profileTitle.textContent;
  editJobInput.value = profileSubtitle.textContent;
});

//
// Добавление слушателя событий для попапа добавления новой карточки
//
buttonPopupAdd.addEventListener('click', () => {
  openPopup(popupFormAdd);
});
//
// Добавление слушателя событий для кнопки закрытия попапа редактирования данных пользователя
//
buttonPopupEditClose.addEventListener('click', () => {
  removePopup(popupFormEdit);
});
//
// Добавление слушателя событий для клика вне попапа
//
function selectEventListenerClick (event) {
    if(event.target.classList.contains('popup_opened')) { 
      removeCurrentPopup();
    }
}
//
// Добавление слушателя событий для кнопки закрытия попапа добавления новой карточки
//
buttonPopupAddClose.addEventListener('click', () => {
  removePopup(popupFormAdd);
});
//
// Добавление слушателя событий для кнопки закрытия попапа полноэкранного просмотра картинки
//
buttonPopupOpenImgClose.addEventListener('click', () => {
  removePopup(popupFormOpenImg);
});
//