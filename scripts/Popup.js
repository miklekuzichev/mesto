export default class Popup {
    constructor(selector) {
      this._popup = document.querySelector(selector);
      this._escClose = this._handleEscClose.bind(this);
      this._closeButton = this._popup.querySelector('.popup__close');
    }
  
    open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._escClose);
    }
  
    close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._escClose);
    }
  
    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
          this.close();
        });
        this._popup.addEventListener('mousedown', (event) => {
          if (event.target.classList.contains('popup')) {
            this.close();
          }
        });
      }

    _handleEscClose(event) {
      if (event.key === 'Escape') {
        this.close();
      }
    }
  }