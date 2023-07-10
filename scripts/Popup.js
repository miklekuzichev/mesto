export default class Popup {
    constructor(selector) {
      this._popup = document.querySelector(selector);
      this._escClose = this._handleEscClose.bind(this); // привязываем контекст
      this._close = this._popup.querySelector('.popup__close');
    }
  //
  // Приватный метод закрытия попапа по кновке esc
  //
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  //
  // Публичный метод открытия попапа
  //
    open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._escClose);
    }
  //
  // Публичный метод закрытия попапа
  //
    close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._escClose);
    }
  //
  // Публичный метод установки слушателя клика
  //
    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popup')) {
            this.close();
          }
        });
        this._close.addEventListener('click', () => {
            this.close();
          });
      }
  }
