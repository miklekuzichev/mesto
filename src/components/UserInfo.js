
export default class UserInfo {
    constructor( selector ) {
        this._name = document.querySelector(selector.name);
        this._profile = document.querySelector(selector.about);
        this._avatar = document.querySelector(selector.avatar);
        this._userData = {};
    }
//
//
//
    setUserInfo(userData) {
        this._userData = userData;
        this._name.textContent = userData.name;
        this._profile.textContent = userData.about;
        this._avatar.src = userData.avatar;
    }
//
//
//
    getUserInfo() {
        return this._userData;
    }
 //
 //
 //     
}