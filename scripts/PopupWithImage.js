
import Popup from "./Popup.js";
//
//
//
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupOpenName = this._popup.querySelector('.popup__figcaption');
    this._popupOpenImage = this._popup.querySelector('.popup__img');
  }
//
//
//
  open(name, link) {
    super.open();
    this._popupOpenName.textContent = name;
    this._popupOpenImage.alt = name;
    this._popupOpenImage.src = link;
  }
}
//
//
//