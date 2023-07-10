
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
// Публичный метод открытия попапа
//
  open(imgName, imgUrl) {
    super.open();
    this._popupOpenName.textContent = imgName;
    this._popupOpenImage.alt = imgName;
    this._popupOpenImage.src = imgUrl;
  }
}
//
//
//