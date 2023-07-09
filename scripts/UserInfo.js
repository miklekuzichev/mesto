
export default class UserInfo {
    constructor({ selector }) {
        this._name = document.querySelector(selector.name);
        this._profile = document.querySelector(selector.profile); 

    }



    export default class UserInfo {
        constructor({ userNameSelector, userJobSelector, userAvatarSelector}) {
          this._userNameSelector = document.querySelector(userNameSelector);
          this._userJobSelector = document.querySelector(userJobSelector);
          this._userAvatarSelector = document.querySelector(userAvatarSelector);
          this._data = {};
        }
      
        /**Вернуть данные пользователя (возможность подставить в форму)*/
        getUserInfo() {
          return this._data;
        }
      
        /**Принять новые данные и добавить на страницу*/
        setUserInfo(data) {
          this._data = data;
          this._userNameSelector.textContent = data.name;
          this._userJobSelector.textContent = data.about;
        }
      
        /**Добавить аватар*/
        setUserAvatar(data) {
          this._data = data;
          this._userAvatarSelector.src = data.avatar;
        }
      }

}