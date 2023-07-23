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
let userId;
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
  userId = userData._id;
  cardList.renderItems(initialCards);
})
.catch((err) => {
  console.log(`Ошибка: ${err}`);
});
//
// Создание попапа редактирования профиля
//
const editProfilePopup = new PopupWithForm({
  selector: '.popup_type_edit',
  handleFormSubmit: (data) => {
    editProfilePopup.load(true); // показываем сообщение "Сохранение..."
    api.editUserInfo(data)
      .then((data) => {
        userProfile.setUserInfo(data);
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editProfilePopup.load(false);
      });
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
    addCardPopup.load(true); // показываем сообщение "Сохранение..."
    api.addCard(data)
      .then((data) => {
        cardList.addItem(createCard(data));
        addCardPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        addCardPopup.load(false);
      });
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
    editAvatarPopup.load(true); // показываем сообщение "Сохранение..."
    api.editAvatar(data)
      .then((data) => {
        userAvatar.src = data.avatar;
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.load(false);
      });
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
    userId: userId, 
    cardClick: (name, link) => {
      openImagePopup.open(name, link);
    },
    cardDelete: (cardId) => {
      deleteCard.open();
      deleteCard.submitMethod(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCard.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    setLike: (cardId) => {
      api.makeLike(cardId)
        .then((data) => {
          card.makeLike(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    removeLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.makeLike(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
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