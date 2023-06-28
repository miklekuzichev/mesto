import Card from "./Cards.js";
import FormValidator from "./FormValidator.js";
//
//
//
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
// Предзаполнение контента на странице
//
profileTitle.textContent = "Жак-Ив Кусто";
profileSubtitle.textContent = "Исследователь океана";
//
buttonAddElement.classList.add('popup__button_disabled');
buttonAddElement.setAttribute("disabled", "");
//
// Функция открытия попапа картинки
//
function openImagePopup(name, link) {
  popupFormOpenImgPicture.src = link;
  popupFormOpenImgPicture.alt = 'Картинка ' + name;
  popupFormOpenImgFigcaption.textContent = name;
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
  const card = new Card({name: imageNameInput.value, link: imageLinkInput.value}, '#card-template', openImagePopup);
  const cardElement = card.generateCard();
  cardLoadTemplate.prepend(cardElement);
  removePopup(popupFormAdd);
  evt.target.reset(); // сбрасывает поля формы после закрытия попапа
  buttonAddElement.classList.add('popup__button_disabled');
  buttonAddElement.setAttribute("disabled", "");
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
//
//
const renderInitCards = (initialCards) => {
  initialCards.forEach((item) => {
    const card = new Card(item, '#card-template', openImagePopup);
    const cardElement = card.generateCard();
    cardLoadTemplate.append(cardElement);
  });
}
//
//
//
renderInitCards(initialCards);
//
//
//
const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
//
//
//
const formEditValidate = new FormValidator(enableValidation, popupFormEdit);
formEditValidate.enableValidation();
const formAddValidate = new FormValidator(enableValidation, popupFormAdd);
formAddValidate.enableValidation();




