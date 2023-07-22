export default class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  


    _responseServer(res) {
        //console.log(res.json())
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
          })
            .then(res => this._responseServer(res))
    }
  
    editAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(
                {avatar: data.imagelink
            })
          })
            .then(res => this._responseServer(res))
    }

 
    getUserInfo() {
        //console.log(`${this._baseUrl}/users/me`);
        //console.log(this._headers);
        return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers
        })
          .then(res => this._responseServer(res))
          //.then(res => console.log(res.json));
      }
    

      addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify(
            {name: data.imagename,
             link: data.imagelink
          })
        })
          .then(res => this._responseServer(res));
      }

      editUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify(
            {name: data.username,
             about: data.userprofile
          })
        })
          .then(res => this._responseServer(res));
      }





      //
      deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers
        })
          .then(res => this._responseServer(res));
      }
    
      //
      makeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'PUT',
          headers: this._headers
        })
          .then(res => this._responseServer(res));
      }




  }
  
  