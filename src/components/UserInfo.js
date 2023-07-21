
export default class UserInfo {
    constructor( selector ) {
        this._name = document.querySelector(selector.name);
        this._profile = document.querySelector(selector.about); 
        this._userData = {};
    }
//
//
//
    setUserInfo(userData) {
        this._userData = userData;
        this._name.textContent = userData.name;
        this._profile.textContent = userData.about;
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