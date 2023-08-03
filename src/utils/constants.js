  //
  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };
  //
  const userSelector = { name: '.profile__title', 
                       about: '.profile__subtitle',
                       avatar: '.profile__avatar' };
  //
  const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-71';
  const authorization = '4d9ffc72-560d-4507-8006-e62ea753eb8d';
//
  export {
    config,
    userSelector,
    baseUrl,
    authorization
  };
  