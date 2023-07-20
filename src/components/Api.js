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
  


    /*
    getUserInfo() {
        fetch('https://nomoreparties.co/v1/cohort-71/users/me', {
  headers: {
    authorization: '4d9ffc72-560d-4507-8006-e62ea753eb8d'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`Ошибка ${err}`);
  }); 

    }
*/

    getUserInfo() {
        //console.log(`${this._baseUrl}/users/me`);
        //console.log(this._headers);
        return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers
        })
          .then(res => this._responseServer(res))
          //.then(res => console.log(res.json));
      }
    







  }
  
  