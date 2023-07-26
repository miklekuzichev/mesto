//
// Класс создания попапа с подтверждением
//
import Popup from "./Popup.js";
//
export default class PopupWithConfirm extends Popup {
    constructor({ popupSelector }) {
      super(popupSelector);
      this._form = this._popup.querySelector('.popup__form');
    }
//
// Метод получения коллбэка
//
    submitMethod(func) {
      this._handleSubmit = func;
    }
//
// Метод установки слушателей
//
    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('click', (event) => {
        event.preventDefault();
        this._handleSubmit();
      });
    }
  }
//
//
//