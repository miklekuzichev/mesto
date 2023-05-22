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