
export default class UserInfo {
    constructor( selector ) {
        console.log(selector.name);
        this._name = document.querySelector(selector.name);
        this._profile = document.querySelector(selector.profile); 
        console.log(this._name);
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