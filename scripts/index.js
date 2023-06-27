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
//
//
//
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

class FormValidator {
  constructor(enableValidation, formElement) {
    this._formSelector = enableValidation.formSelector; 
    this._inputSelector = enableValidation.inputSelector; 
    this._inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector));

    this._submitButtonSelector = formElement.querySelector(enableValidation.submitButtonSelector);
    this._inactiveButtonClass = enableValidation.inactiveButtonClass;
    this._inputErrorClass = enableValidation.inputErrorClass;
    this._errorClass = enableValidation.errorClass;
    this._formElement = formElement;
  }
//
  _showError(inputElement) {
  
    //console.log("inputElement ", inputElement);
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };
//
  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };
//
//
_checkInputValidity(inputElement) {
//  console.log("inputElement ", inputElement);
//  console.log("this._formElement ", this._formElement);
  const go = this._formElement.querySelector(this._inputSelector);
  if (!inputElement.validity.valid) {
    this._showError(inputElement);
  } else {
    this._hideError(inputElement);
  }
};
//
//
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
}; 
//
//
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.setAttribute("disabled", "");
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.removeAttribute("disabled", "");
    }
}; 
//
//
_setEventListeners() {
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
};
//
enableValidation() {
  this._setEventListeners();
};

}


const formEditValidate = new FormValidator(enableValidation, popupFormEdit);
formEditValidate.enableValidation();
const formAddValidate = new FormValidator(enableValidation, popupFormAdd);
formAddValidate.enableValidation();




