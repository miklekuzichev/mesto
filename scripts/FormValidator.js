//
// Класс валидации поля формы
//
export default class FormValidator {
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
//
//
    _showError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
    };
//
//
//
    _hideError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    };
//
//
//
  _checkInputValidity(inputElement) {
    const go = this._formElement.querySelector(this._inputSelector);
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  };
//
//
//
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
  }; 
//
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
//
//
    enableValidation() {
        this._setEventListeners();
    };
//
//
//
  }