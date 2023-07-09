
import Popup from "./Popup.js";
//
//
//
export default class PopupWithForm extends Popup {
    constructor({ selector, handleFormSubmit }) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
      }
    
      // Получаем данные из формы
      _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(item => {
          this._formValues[item.name] = item.value;
        })
    
        return this._formValues;
      }
    
      // Устанавливаем слушатели формы
      setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (event) => {
          event.preventDefault();
          this._handleFormSubmit(this._getInputValues());
        })
      }
    
      // Закрытие попапа + сброс инпутов
      close() {
      super.close();
      this._popupForm.reset();
      }

    }