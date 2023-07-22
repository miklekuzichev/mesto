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
  userSelector
} from '../utils/constants.js';
//
//
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
//console.log(userAvatar);
//
// Создаем новые обьекты класса FormValidator
//
const formEditValidate = new FormValidator(enableValidation, popupFormEdit);
const formAddValidate = new FormValidator(enableValidation, popupFormAdd);
const formEditAvatarValidate = new FormValidator(enableValidation, popupFormEditAvatar);
//
// Предзаполнение контента на странице
//
const userProfile = new UserInfo(userSelector);
//userProfile.setUserInfo(initUser);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71',
  headers: {
      authorization: '4d9ffc72-560d-4507-8006-e62ea753eb8d',
      'Content-Type': 'application/json'
  }
});

// Загрузка готовых карточек и данных о пользователе с сервера
Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(([initialCards, userData]) => {
  userProfile.setUserInfo(userData);
 // console.log('userData ', userData);
  userId = userData._id;
  cardList.renderItems(initialCards);
})
.catch((err) => {
  console.log(`Ошибка: ${err}`);
});






//
// создание попапа с формой редактирования профиля
//
const editProfilePopup = new PopupWithForm({
  selector: '.popup_type_edit',
  handleFormSubmit: (data) => {
    //submitEditProfileForm(data);
    editProfilePopup.load(true);
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
    //submitImageForm(data);

    addCardPopup.load(true); // показываем сообщение "Сохранение..."
    api.addCard(data)
      .then((data) => {
        //userAvatar.src = data.avatar;
        
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

// создаем попап подтверждения удаления
const deleteCard = new PopupWithConfirm({
  popupSelector: '.popup_type_delete'
});
deleteCard.setEventListeners();


//
// создание попапа с кнопкой добавления аватара
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
// Создание экземпляра класса PopupWithImage
//
const openImagePopup = new PopupWithImage('.popup_type_img');
openImagePopup.setEventListeners();
//
// Функция - обработчик «отправки» формы редактирования профиля
//
//function submitEditProfileForm (data) {
//    userProfile.setUserInfo({name: data.username, about: data.userprofile});
//    editProfilePopup.close();
//}
//
// Функция генерации карточки
//
const createCard = (data) => {
  const card = new Card( {
    cardData: data, 
    cardTemplate: '#card-template',
    userId: userId, 
    handleCardClick: (name, link) => {
      openImagePopup.open(name, link);
    },
    handleCardDelete: (cardId) => {
      deleteCard.open();
      deleteCard.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCard.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    }

    
  });
  const cardElement = card.generateCard();
  return cardElement
}
//
// Функция - обработчик «отправки» формы добавления новой карточки
//
//function submitImageForm (data) {
//  cardList.addItem(createCard({name: data.imagename, link: data.imagelink}));
//  addCardPopup.close();
//  formAddValidate.resetValidation();
//}
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
  //data: initialCards, 
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }}, '.cards');
//
//  cardList.renderItems(initialCards);
//
// Устанавливаем валидацию полей форм
//
formEditValidate.enableValidation();
formAddValidate.enableValidation();
formEditAvatarValidate.enableValidation();
/*
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
*/



 
  //Promise(api.getUserInfo())
  //  .then((userData) => {
  //    console.log(userData)
  //  })
  //  .catch((err) => {
  //    console.log(`Ошибка: ${err}`);
  //  });
  

  //userProfile.setUserInfo(test);