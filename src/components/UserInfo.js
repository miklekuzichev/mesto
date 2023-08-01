//
// Класс установки и отрисовки информации о пользователе
//
export default class UserInfo {
    constructor( selector ) {
        this._name = document.querySelector(selector.name);
        this._profile = document.querySelector(selector.about);
        this._avatar = document.querySelector(selector.avatar);
        this._userId = 0;
        this._userData = {};
    }
//
// Метод установки данных пользователя
//
    setUserInfo({ name, about, avatar, _id }) {
        this._userData = { name, about, avatar, _id };
        this._name.textContent = name;
        this._profile.textContent = about;
        this._avatar.src = avatar;
        this._userId = _id;
    }
//
// Метод получения данных пользоателя
//
    getUserInfo() {
        return this._userData;
    }
 //
 //
 //     
}