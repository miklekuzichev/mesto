//
// Универсальная проверка заполнения формы
//
const showError = (formElement, input, errorMessage, inputErrorClass, errorClass) => {
  console.log("<< input >>", input);
    const errorElement = formElement.querySelector(`.${input.id}-error`);
  console.log("<< errorElement >>", errorElement);
  console.log("<< inputErrorClass >>", inputErrorClass);
    input.classList.add(inputErrorClass);
  console.log("<< errorElement >>", errorElement);
    errorElement.textContent = errorMessage;
  console.log("<< errorClass >>", errorClass);
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


/*
const enableValidationDev = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const inputListDev = Array.from(formElement.querySelectorAll(inputSelector));
    console.log(inputList[0]);


class FormValidator {
  constructor(enableValidationDev, formElement) {
    this._enableValidationDev = enableValidationDev;
    //
    this._formSelector = enableValidationDev.formSelector; 
    this._inputSelector = enableValidationDev.inputSelector; // formElement.querySelector(enableValidationDev.inputSelector);
    this._inputListDev = Array.from(formElement.querySelectorAll(enableValidationDev.inputSelector));
    this._submitButtonSelector = formElement.querySelectorAll(enableValidationDev.submitButtonSelector)//enableValidationDev.submitButtonSelector;
    this._inactiveButtonClass = enableValidationDev.inactiveButtonClass;
    this._inputErrorClass = enableValidationDev.inputErrorClass;
    this._errorClass = formElement.querySelectorAll(enableValidationDev.errorClass)//enableValidationDev.errorClass;
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
  this._inputList = Array.from(this._formElement.querySelectorAll(inputSelector));
  this._formElement.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity();
      this._toggleButtonState();
    });
  });
};
//


setFormState() {
  this._inputList.forEach((inputElement) => {
    this._hideError(inputElement);
  });
  this._toggleButtonState();
}







  enableValidation() {
    console.log("Hello!");
    this._setEventListeners();

  };






}


const formEditValidate = new FormValidator(enableValidationDev, popupFormEdit);
formEditValidate.enableValidation();
const formAddValidate = new FormValidator(enableValidationDev, popupAddEdit);
formAddValidate.enableValidation();



*/
