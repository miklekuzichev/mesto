//
// Класс отрисовки карточек
//
export default class Section {
    constructor({ renderer }, containerSelector) {
      this._container = document.querySelector(containerSelector);
      this._renderer = renderer;
    }
//
// Метод добавления карточки в шаблон
//
    addItem(element) {
      this._container.prepend(element);
    }
//
// Метод очистки дочерней разметки
//
    _clear() {
      this._container.innerHTML = '';
    }
//
// Метод добавления карточек в шаблон
// 
    renderItems(data) {
      this._clear();
      data.forEach(item => {
        this._renderer(item);
      });
    }
  }
//
//
//