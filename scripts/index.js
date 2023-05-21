let popup = document.querySelector('.popup');
let popup_form_edit = document.querySelector('.popup_form_edit');
//let popup_form_edit_close = popup_form_edit.querySelector('.popup__close');
let popup_form_add = document.querySelector('.popup_form_add');
//let popup_form_add_close = popup_form_add.querySelector('.popup__close');

let buttonPopupEdit = document.querySelector('.profile__edit-button');
let buttonPopupClose = document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_profile');

let buttonPopupAdd = document.querySelector('.profile__add-button');

function popupRemove () {
    popup.classList.remove('popup_opened');
}

function popupOpened (popup_type) {
    popup_type.classList.add('popup_opened');
}

// Обработчик «отправки» формы
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popupRemove();
}

formElement.addEventListener('submit', handleFormSubmit); 

buttonPopupEdit.addEventListener('click', () => {
    popupOpened(popup_form_edit);
    // Предзаполнение формы
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
});


buttonPopupAdd.addEventListener('click', () => {
    popupOpened(popup_form_add);
    // Предзаполнение формы
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
});


buttonPopupClose.addEventListener('click', () => {
    popupRemove();
});

