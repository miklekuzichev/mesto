const popupFormEdit = document.querySelector('.popup_form_edit');
const popupFormAdd = document.querySelector('.popup_form_add');
const popupFormOpenImg = document.querySelector('.popup_form_open-img');
const popupFormOpenImgPicture = popupFormOpenImg.querySelector('.popup__img');
const popupFormOpenImgFigcaption = popupFormOpenImg.querySelector('.popup__figcaption');

const buttonPopupEdit = document.querySelector('.profile__edit-button');
const buttonPopupEditClose = document.querySelector('.popup_form_edit').querySelector('.popup__close');
const buttonPopupAddClose = document.querySelector('.popup_form_add').querySelector('.popup__close');
const buttonPopupOpenImgClose = document.querySelector('.popup_form_open-img').querySelector('.popup__close');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const formEditElement = document.querySelector('.popup_form_edit').querySelector('.popup__form');
const formAddElement = document.querySelector('.popup_form_add').querySelector('.popup__form');

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
profileTitle.textContent = "Жак-Ив Кусто";
profileSubtitle.textContent = "Исследователь океана";
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
// Функция заменияет картинку сердечка при нажатии на него
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
// Функция открытия попапа
//

function selectEventListenerKey(event) {
//  console.log(event.currentTarget);
  if(event.keyCode == 27) { //27 - KeyCode "Escape"

    //console.log(document.querySelector('.popup_form_edit'));

    removeCurrentPopup();
  }
}




//window.addEventListener('click', handleMouseClick)

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', selectEventListenerKey);
}
//
// Функция закрытия попапа
//
function removePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', selectEventListenerKey);
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
  //EventListeners(); // к новой карточке привязываем обработчик
}
//
// Функция для закрытия открытого в данный момент попапа
//
function removeCurrentPopup () {
  if(popupFormEdit.classList.contains('popup_opened')) {
    removePopup(popupFormEdit);
  } else if(popupFormAdd.classList.contains('popup_opened')) {
    removePopup(popupFormAdd);
  } else if(popupFormOpenImg.classList.contains('popup_opened')) {
    removePopup(popupFormOpenImg);
  }
}
//

// включение валидации вызовом enableValidation
// все настройки передаются при вызове
/*
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 
*/

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


/*
//
// Добавление слушателя событий для кнопки "Escape" для закрытия любого открытого попапа
//
window.addEventListener('keydown', function (evt) {
  if(evt.keyCode == 27) { //27 - KeyCode "Escape"
    removeCurrentPopup();
  }
});
//
window.addEventListener('click', function (evt) {
//  console.log(evt.srcElement.classList.contains('popup_opened'));
  if(evt.srcElement.classList.contains('popup_opened')) { 
    removeCurrentPopup();
  }
});
*/



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



//////////////////////////////////////////////////////////////////////////////////////////////////
//const formElement = document.querySelector('.popup__form');
//const formInput = formElement.querySelector('.popup__input_type_name');
//const formError = formElement.querySelector(`.${formInput.id}-error`);


const showError = (formElement, input, errorMessage) => {
  const errorElement = formElement.querySelector(`.${input.id}-error`);
  input.classList.add('popup__input_type_error');
  console.log('errorElement - ', errorElement);
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error-active');
};

const hideError = (formElement, input) => {
  const errorElement = formElement.querySelector(`.${input.id}-error`);
  input.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error-active');
  errorElement.textContent = '';
};


//console.log(formElement);
//console.log(formInput);
//console.log(formInput.validationMessage);




const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      });
      //setEventListeners(formElement);
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fieldset'));
      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet);
      });


  });
};


function hasInvalidInput(inputList) {
  console.log("inputList - ", inputList);
  return inputList.some((inputElement) => {
    console.log("inputElement - ", inputElement);
    return !inputElement.validity.valid;
  })
}; 

function toggleButtonState(inputList, buttonElement) {
  //console.log("hasInvalidInput(inputList) - ", hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save_inactive');
  } else {
    buttonElement.classList.remove('popup__save_inactive');
  }
}; 



const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save');
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

enableValidation();







//////////////////////////////////////////////////////////////////////////////////////////////////

