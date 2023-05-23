const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    //link: './images/dombay.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    //link: './images/elbrus.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    //link: '../images/karachaevsk.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    //link: './images/dombay.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    //link: './images/dombay.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    //link: './images/dombay.jpg'
  }
];



let popup = document.querySelector('.popup');
let popupFormEdit = document.querySelector('.popup_form_edit');
let popupFormAdd = document.querySelector('.popup_form_add');

let popupFormOpenImg = document.querySelector('.popup_form_open-img');

let buttonPopupEdit = document.querySelector('.profile__edit-button');
let buttonPopupEditClose = document.querySelector('.popup_form_edit').querySelector('.popup__close');
let buttonPopupAddClose = document.querySelector('.popup_form_add').querySelector('.popup__close');

let buttonPopupOpenImgClose = document.querySelector('.popup_form_open-img').querySelector('.popup__close');


//console.log(buttonPopupClose);
//console.log(buttonPopup_Add_Close);

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_profile');
let buttonPopupAdd = document.querySelector('.profile__add-button');




// Add new card in index.html
//
const cardTemplate = document.querySelector('#card-template').content;
const cardLoadTemplate = document.querySelector('.cards');

function addNewCard (titleValue, srcValue) {
  const userElement = cardTemplate.querySelector('.card').cloneNode(true);
  userElement.querySelector('.card__image').src = srcValue;
  userElement.querySelector('.card__image').alt = 'Картинка ' + titleValue;
  userElement.querySelector('.card__text').textContent = titleValue;
  cardLoadTemplate.prepend(userElement);
}
//
//
function deleteCard (titleValue, srcValue) {
  const userElement = cardTemplate.querySelector('.card').cloneNode(true);
  userElement.querySelector('.card__image').src = srcValue;
  userElement.querySelector('.card__text').textContent = titleValue;
  cardLoadTemplate.prepend(userElement);
}
//console.log(cardTemplate);
//console.log(cardLoadTemplate);

 // addNewCard(initialCards[0].name, initialCards[0].link);
 // addNewCard(initialCards[1].name, initialCards[1].link);
 // addNewCard(initialCards[2].name, initialCards[2].link);
  
  for(let i = 0; i < initialCards.length; i++) {
    addNewCard(initialCards[i].name, initialCards[i].link);
  }
//

let openImg = document.querySelectorAll('.card__open-image');

let deleteCrd = document.querySelectorAll('.card__delete');

console.log(openImg);
console.log(deleteCrd);
//let openOldImg = document.getElementsByTagName('button');
//console.log(openOldImg);



function openPopup() {
  const pp = this.querySelector('.card__image').src;
  const uu = this.querySelector('.card__image').alt;
  console.log(this);
  popupFormOpenImg.querySelector('.popup__img').src = pp;
  popupFormOpenImg.querySelector('.popup__figcaption').textContent = uu;
  
  
  console.log(popupFormOpenImg.querySelector('.popup__figcaption'));

  //popupFormOpenImg.querySelector('.popup__img').alt = uu;
  //tt = popupFormOpenImg.querySelector('.popup__img');
  //ttImg = tt.src;
  //console.log(ttImg);
  popupOpened(popupFormOpenImg);
};

//const buttons = document.getElementsByTagName('button');

for (let i = 0; i < openImg.length; ++i) {
  const button = openImg[i];
  // к каждой кнопке привязываем обработчик
  button.addEventListener('click', openPopup); // обратите внимание, что мы не вызываем
  // функцию openPopup, а только пишем ее имя
}

let buttonPopupOpenImg = document.querySelector('.card__open-image');


function popupRemove (popup_type) {
    popup_type.classList.remove('popup_opened');
}

function popupOpened (popup_type) {
    popup_type.classList.add('popup_opened');
}


function popupOpenedAdd () {
    popupFormAdd.classList.add('popup_opened');
}

function popupRemoveAdd () {
    popupFormAdd.classList.remove('popup_opened');
}


// Обработчик «отправки» формы
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popupRemove(popupFormEdit);
}

formElement.addEventListener('submit', handleFormSubmit); 

buttonPopupEdit.addEventListener('click', () => {
    popupOpened(popupFormEdit);
    // Предзаполнение формы
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
});


buttonPopupAdd.addEventListener('click', () => {
    popupOpened(popupFormAdd);
    // Предзаполнение формы
    //nameInput.value = profileTitle.textContent;
    //jobInput.value = profileSubtitle.textContent;
});

buttonPopupOpenImg.addEventListener('click', () => {
    popupOpened(popupFormOpenImg);
    // Предзаполнение формы
    //nameInput.value = profileTitle.textContent;
    //jobInput.value = profileSubtitle.textContent;
});


buttonPopupEditClose.addEventListener('click', () => {
    popupRemove(popupFormEdit);
});

buttonPopupAddClose.addEventListener('click', () => {
    popupRemove(popupFormAdd);
});

buttonPopupOpenImgClose.addEventListener('click', () => {
    popupRemove(popupFormOpenImg);
});









/*
function AddSong (artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-templte').content;
  const songElement = songTemplate.querySelector('.song').cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue;

  songContainer.append(songElement);
}
*/

/*
  for(let i = 0; i < song.length; i++) {
    songs[i].remove();

  }
*/
