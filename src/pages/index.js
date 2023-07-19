import '../pages/index.css';
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
  initialCards,
  enableValidation,
  initUser,
  userSelector
} from '../utils/constants.js';
//
//
//
const popupFormEdit = document.querySelector('.popup_type_edit');
const popupFormAdd = document.querySelector('.popup_type_add');
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const editNameInput = document.querySelector('.popup__input_type_name');
const editJobInput = document.querySelector('.popup__input_type_profile');
const buttonPopupAdd = document.querySelector('.profile__add-button');
//
// Создаем новые обьекты класса FormValidator
//
const formEditValidate = new FormValidator(enableValidation, popupFormEdit);
const formAddValidate = new FormValidator(enableValidation, popupFormAdd);
//
// Предзаполнение контента на странице
//
const userProfile = new UserInfo(userSelector);
userProfile.setUserInfo(initUser);
//
// создание попапа с формой редактирования профиля
//
const editProfilePopup = new PopupWithForm({
  selector: '.popup_type_edit',
  handleFormSubmit: (data) => {
    submitEditProfileForm(data);
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
    submitImageForm(data);
  }
});
//
addCardPopup.setEventListeners();
//
// Создание экземпляра класса PopupWithImage
//
const openImagePopup = new PopupWithImage('.popup_type_img');
openImagePopup.setEventListeners();
//
// Функция - обработчик «отправки» формы редактирования профиля
//
function submitEditProfileForm (data) {
    userProfile.setUserInfo({name: data.username, profile: data.userprofile});
    editProfilePopup.close();
}
//
// Функция генерации карточки
//
const createCard = (data) => {
  const card = new Card( {
    cardData: data, 
    cardTemplate: '#card-template', 
    handleCardClick: (name, link) => {
      openImagePopup.open(name, link);
    }
  });
  const cardElement = card.generateCard();
  return cardElement
}
//
// Функция - обработчик «отправки» формы добавления новой карточки
//
function submitImageForm (data) {
  cardList.addItem(createCard({name: data.imagename, link: data.imagelink}));
  addCardPopup.close();
  formAddValidate.resetValidation();
}
//
// Добавление слушателя событий для попапа редактирования данных профиля
//
buttonPopupEdit.addEventListener('click', () => {
  editProfilePopup.open();
  formEditValidate.resetValidation();
  // Предзаполнение формы
  const currentInfoIser = userProfile.getUserInfo();
  editNameInput.value = currentInfoIser.name;
  editJobInput.value = currentInfoIser.profile;
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
  cardList.renderItems(initialCards);
//
// Устанавливаем валидацию полей форм
//
formEditValidate.enableValidation();
formAddValidate.enableValidation();

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

  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71',
    headers: {
        authorization: '4d9ffc72-560d-4507-8006-e62ea753eb8d',
      'Content-Type': 'application/json'
    }
  });