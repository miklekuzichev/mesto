//
// Класс взаимодействия с сервером
//
export default class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
//
// Метод проверки ответа сервера
//
    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
//
// Метод получения картинок с сервера
//
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
          })
            .then(res => this._checkResponse(res))
    }
//
// Метод изменения аватара пользователя
//  
    editAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(
                {avatar: data.imagelink
            })
          })
            .then(res => this._checkResponse(res))
    }
//
// Метод получения информации о пользователе
//
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers
        })
          .then(res => this._checkResponse(res))
      }
 //
 // Метод загрузки новой карточки на сервер
 //   
    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify(
            {name: data.imagename,
             link: data.imagelink
          })
        })
          .then(res => this._checkResponse(res));
    }
//
// Метод Изменения информации о пользователе
//
    editUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify(
            {name: data.username,
             about: data.userprofile
          })
        })
          .then(res => this._checkResponse(res));
    }
//
// Метод удаления карточки с сервера
//
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers
        })
          .then(res => this._checkResponse(res));
    }
//
// Метод установки лайка
//
    makeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'PUT',
          headers: this._headers
        })
          .then(res => this._checkResponse(res));
    }
//
// Метод удаления лайка
//
    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'DELETE',
          headers: this._headers
        })
          .then(res => this._checkResponse(res));
    }
  }
//
//
//