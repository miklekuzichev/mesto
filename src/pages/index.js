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
  enableValidation,
  userSelector,
  baseUrl,
  authorization
} from '../utils/constants.js';
import handleSubmit from '../utils/utils.js';
//
const popupFormEdit = document.querySelector('.popup_type_edit');
const popupFormAdd = document.querySelector('.popup_type_add');
const popupFormEditAvatar = document.querySelector('.popup_type_edit-profile');
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const editNameInput = document.querySelector('.popup__input_type_name');
const editJobInput = document.querySelector('.popup__input_type_profile');
const buttonPopupAdd = document.querySelector('.profile__add-button');
//
const buttonPopupAvatarEdit = document.querySelector('.profile__avatar-button');
const userAvatar = document.querySelector('.profile__avatar');
//
// Создаем новые обьекты класса FormValidator
//
const formEditValidate = new FormValidator(enableValidation, popupFormEdit);
const formAddValidate = new FormValidator(enableValidation, popupFormAdd);
const formEditAvatarValidate = new FormValidator(enableValidation, popupFormEditAvatar);
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
.catch(console.error
  //(err) => {
  //console.log(`Ошибка: ${err}`);}
);
//
// Функция отображения ошибок и отображения текста кнопки сабмита 
//
/*function handleSubmit(request, popupInstance, loadingText = "Сохранение...") {
  // изменяем текст кнопки до вызова запроса
  popupInstance.load(true, loadingText);
  request()
    .then(() => {
  // закрывать попап нужно только в `then`
      popupInstance.close()
    })
    .catch(console.error
      //(err) => {
  // в каждом запросе ловим ошибку
      //console.error(`Ошибка: ${err}`);}
    )
  // в каждом запросе в `finally` нужно возвращать обратно начальный текст кнопки
    .finally(() => {
      popupInstance.load(false);
    });
}*/
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
          //userAvatar.src = userProfile.getUserInfo().avatar;
          userAvatar.src = userProfile.avatar;
          
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
          .catch(console.error
            //(err) => {
            //console.log(`Ошибка: ${err}`);
            //}
          );
      });
    },
    setLike: (cardId) => {
      api.makeLike(cardId)
        .then((data) => {
          card.makeLike(data);
        })
        .catch(console.error
          //(err) => {
          //console.log(`Ошибка: ${err}`);}
        );
    },
    removeLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.makeLike(data);
        })
        .catch(
          console.error
          //(err) => {
          //console.log(`Ошибка: ${err}`);}
        );
    }
  });
  const cardElement = card.generateCard();
  return cardElement
}
//
// Добавление слушателя событий для попапа редактирования данных профиля
//
buttonPopupEdit.addEventListener('click', () => {
  formEditValidate.resetValidation();
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
  formEditAvatarValidate.resetValidation();
});
//
// Добавление слушателя событий для попапа добавления новой карточки
//
buttonPopupAdd.addEventListener('click', () => {
  addCardPopup.open();
  formAddValidate.resetValidation();
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
formEditValidate.enableValidation();
formAddValidate.enableValidation();
formEditAvatarValidate.enableValidation();
//