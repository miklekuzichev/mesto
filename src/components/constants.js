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
//
  const popupFormEdit = document.querySelector('.popup_type_edit');
  const popupFormAdd = document.querySelector('.popup_type_add');
  const buttonPopupEdit = document.querySelector('.profile__edit-button');
  const editNameInput = document.querySelector('.popup__input_type_name');
  const editJobInput = document.querySelector('.popup__input_type_profile');
  const buttonPopupAdd = document.querySelector('.profile__add-button');
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
  const initUser = {name: "Жак-Ив Кусто", profile: "Исследователь океана"};
  const userSelector = { name: '.profile__title', 
                       profile: '.profile__subtitle' };
  //
  export {
    initialCards,
    popupFormEdit,
    popupFormAdd,
    buttonPopupEdit,
    editNameInput,
    editJobInput,
    buttonPopupAdd,
    enableValidation,
    initUser,
    userSelector
  };
  