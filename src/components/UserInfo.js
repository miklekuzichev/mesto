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
    setUserInfo(userData) {
        this._userData = userData;
        this._name.textContent = userData.name;
        this._profile.textContent = userData.about;
        this._avatar.src = userData.avatar;
        this._userId = userData._id;
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