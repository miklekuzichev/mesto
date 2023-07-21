
import Popup from "./Popup.js";
//
//
//
export default class PopupWithForm extends Popup {
    constructor({ selector, handleFormSubmit }) {
        super(selector);
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._handleFormSubmit = handleFormSubmit;

        this._submitBtn = this._popupForm.querySelector('.submit');
        this._submitBtnText = this._submitBtn.textContent;
      }
      //
      // Приватный метод сбора данных всех полей формы
      //
      _getInputValues() {
        this._values = {};
        this._inputList.forEach(item => {
          this._values[item.name] = item.value;
        })
        return this._values;
      }
      //
      // Публичный метод закрытия попапа
      //
      close() {
        super.close();
        this._form.reset(); // сбрасываем поля формы
      }
      //
      // Публичный метод установки слушателя кнопки сабмита
      //
      setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => { 
            evt.preventDefault();
          this._handleFormSubmit(this._getInputValues());
        })
      }
      //
      //
      //
      loading(isLoading) {
        if (isLoading) {
          this._submitBtn.textContent = 'Сохранение...'
        } else {
          this._submitBtn.textContent = this._submitBtnText;
        }
      }
      //
      //
      //
    }
