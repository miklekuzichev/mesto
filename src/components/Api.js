export default class Api {
    constructor(options) {
      // тело конструктора
    }
  
    getInitialCards() {
      // ...
    }
  
    // другие методы работы с API
  }
  
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71',
    headers: {
        authorization: '4d9ffc72-560d-4507-8006-e62ea753eb8d',
      'Content-Type': 'application/json'
    }
  });