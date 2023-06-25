//
// Универсальная проверка заполнения формы
//
const showError = (formElement, input, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${input.id}-error`);
    input.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
//
//
//
const hideError = (formElement, input, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${input.id}-error`);
    input.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};
//
//
//
const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
        });
        setEventListeners(formElement, inputSelector, inputErrorClass, inactiveButtonClass, submitButtonSelector, errorClass);
    });
};
//
//
//
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
}; 
//
//
//
function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute("disabled", "");
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute("disabled", "");
    }
 }; 
//
//
//
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      hideError(formElement, inputElement, inputErrorClass, errorClass);
    }
};
//
//
//
const setEventListeners = (formElement, inputSelector, inputErrorClass, inactiveButtonClass, submitButtonSelector, errorClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
};
//
// включение валидации вызовом enableValidation
// все настройки передаются при вызове
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});



const enableValidationDev = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};





class FormValidator {
  constructor(enableValidationDev, formElement) {
    this._enableValidationDev = enableValidationDev;
    this._formSelector = enableValidationDev.formSelector; 
    this._inputSelector = enableValidationDev.inputSelector; // formElement.querySelector(enableValidationDev.inputSelector);
    this._submitButtonSelector = enableValidationDev.submitButtonSelector;
    this._inactiveButtonClass = enableValidationDev.inactiveButtonClass;
    this._inactiveButtonClass = enableValidationDev.inactiveButtonClass;
    this._inputErrorClass = enableValidationDev.inputErrorClass;
    this._errorClass = enableValidationDev.errorClass;
    //
    this._formElement = formElement;
  }
//
  _showError() {
    const errorElement = this._formElement.querySelector(`.${this._inputSelector.id}-error`);
    this._inputSelector.classList.add(this._inputErrorClass);
    errorElement.textContent = this._inputSelector.validationMessage;
    this._inputSelector.classList.add(this._errorClass);
  };
//
  _hideError() {
    const errorElement = this._formElement.querySelector(`.${this._inputSelector.id}-error`);
    this._inputSelector.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };
//


//
_checkInputValidity() {
  if (!this._inputSelector.validity.valid) {
    this._showError();
  } else {
    this._hideError();
  }
};
//

// Проверить!
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  })
}; 
//










  enableValidation() {
    console.log(_enableValidationDev);

    this._formElement.addEventListener('submint', function (evt) {
      evt.preventDefault();
      //console.log(this._enableValidationDev);
    });

  };






}


const test = new FormValidator(enableValidationDev, );

test.enableValidation();


