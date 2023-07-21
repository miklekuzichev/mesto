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
  
    editAvatar() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(
                {name: data.name,
                link: data.link
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
    







  }
  
  