import '../pages/index.css';
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js"
import {
  config,
  userSelector,
  baseUrl,
  authorization
} from '../utils/constants.js';
import handleSubmit from '../utils/utils.js';
//
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const editNameInput = document.querySelector('.popup__input_type_name');
const editJobInput = document.querySelector('.popup__input_type_profile');
const buttonPopupAdd = document.querySelector('.profile__add-button');
//
const buttonPopupAvatarEdit = document.querySelector('.profile__avatar-button');
//
// Устанавливаем валидацию полей форм
//
const formValidators = {}
//
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

   // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
//
enableValidation(config);
//
// Создаем экземпляр класса UserInfo
//
const userProfile = new UserInfo(userSelector);
//
// Создаем экземпляр класса Api
//
const api = new Api({
  baseUrl: baseUrl,
  headers: {
      authorization: authorization,
      'Content-Type': 'application/json'
  }
});
//
// Загрузка готовых карточек и данных о пользователе с сервера
//
Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(([initialCards, userData]) => {
  userProfile.setUserInfo(userData);
  cardList.renderItems(initialCards);
})
.catch(console.error);
//
// Создание попапа редактирования профиля
//
const editProfilePopup = new PopupWithForm({
  selector: '.popup_type_edit',
  handleFormSubmit: (data) => {
    function makeRequest() {
    // `return` позволяет потом дальше продолжать цепочку `then, catch, finally`
      return api.editUserInfo(data).then((data) => {
        userProfile.setUserInfo(data)
      });
    }
    handleSubmit(makeRequest, editProfilePopup);
}
});
//
editProfilePopup.setEventListeners();
//
// создание попапа с кнопкой добавления карточки
//
const addCardPopup = new PopupWithForm({
  selector: '.popup_type_add',
  handleFormSubmit: (data) => {
    function makeRequest() {
      return api.addCard(data)
        .then((data) => {
          cardList.addItem(createCard(data));
      });
    }
    handleSubmit(makeRequest, addCardPopup);
}
});
//
addCardPopup.setEventListeners();
//
// Создаем попап подтверждения удаления
//
const deleteCard = new PopupWithConfirm({
  popupSelector: '.popup_type_delete'
});
//
deleteCard.setEventListeners();
//
// Создаем попап с кнопкой добавления аватара
//
const editAvatarPopup = new PopupWithForm({
  selector: '.popup_type_edit-profile',
  handleFormSubmit: (data) => {
    function makeRequest() {
      return api.editAvatar(data)
        .then((data) => {
          userProfile.setUserInfo(data);    
      });
    }
    handleSubmit(makeRequest, editAvatarPopup);
}
});
//
editAvatarPopup.setEventListeners();
//
// Созданием экземпляр класса PopupWithImage
//
const openImagePopup = new PopupWithImage('.popup_type_img');
openImagePopup.setEventListeners();
//
// Функция генерации карточки
//
const createCard = (data) => {
  const card = new Card( {
    cardData: data, 
    cardTemplate: '#card-template',
    userId: userProfile.getUserInfo()._id, 
    clickCard: (name, link) => {
      openImagePopup.open(name, link);
    },
    removeCard: (cardId) => {
      deleteCard.open();
      deleteCard.submitMethod(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCard.close();
            card.removeCard(); 
          })
          .catch(console.error);
      });
    },
    setLike: (cardId) => {
      api.makeLike(cardId)
        .then((data) => {
          card.makeLike(data);
        })
        .catch(console.error);
    },
    removeLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.makeLike(data);
        })
        .catch(console.error);
    }
  });
  const cardElement = card.generateCard();
  return cardElement
}
//
// Добавление слушателя событий для попапа редактирования данных профиля
//
buttonPopupEdit.addEventListener('click', () => {
  formValidators['edit-form'].resetValidation();
  // Предзаполнение формы
  const currentInfoIser = userProfile.getUserInfo();
  editNameInput.value = currentInfoIser.name;
  editJobInput.value = currentInfoIser.about;
  editProfilePopup.open();
});
//
// Добавление слушателя событий для попапа изменения аватара
//
buttonPopupAvatarEdit.addEventListener('click', () => {
  editAvatarPopup.open();
  formValidators['update-avatar-form'].resetValidation();
});
//
// Добавление слушателя событий для попапа добавления новой карточки
//
buttonPopupAdd.addEventListener('click', () => {
  addCardPopup.open();
  formValidators['new-card-form'].resetValidation();
});
//
// Создаем новый обьект класса Section
//
const cardList = new Section({ 
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }}, '.cards');
//
// Устанавливаем валидацию полей форм
//
