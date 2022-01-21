class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    //получить информацию о пользователе
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
      })
      .then(this._checkResponse);
    }

    //получить начальные карты
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      })
      .then(this._checkResponse);
    }

    //установить информацию о пользователе
    setUserInfo(name, about) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name,
          about
        })
      })
      .then(this._checkResponse);
    }
  
    //установить аватар
    setAvatar(avatar) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar
        })
      })
      .then(this._checkResponse);
    }
  
    //добавить карту
    addCard(name, link) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name,
          link
        })
      })
      .then(this._checkResponse);
    }
  
    //удалить карту
    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(this._checkResponse);
    }
  
    //установить лайк
    setLikeCard(cardId) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: this._headers
      })
      .then(this._checkResponse);
    }
  
    //удалить лайк
    removeLikeCard(cardId) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(this._checkResponse);
    }

    changeLikeCardStatus(cardId, isLiked){
      if(!isLiked){
        return this.setLikeCard(cardId)
      }else {
        return this.removeLikeCard(cardId)
      }
    }

    //проверить ответ
    _checkResponse(result) {
      if (result.ok) {
        return result.json();
      }
      return Promise.reject(`Ошибка: ${result.status}`);
    }
  }
  
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-30',
    headers: {
      authorization: '0d0c1ecf-4cb6-4add-84fe-013c8fefdb82',
      'Content-Type': 'application/json'
    }
  });

  export default api