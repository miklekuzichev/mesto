let popup = document.querySelector('.popup');
let buttonPopupEdit = document.querySelector('.profile__edit-button');
let buttonPopupClose = document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_profile');

function popupRemove () {
    popup.classList.remove('popup_opened');
}

function popupOpened () {
    popup.classList.add('popup_opened');
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
    popupOpened();
    // Предзаполнение формы
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
});

buttonPopupClose.addEventListener('click', () => {
    popupRemove();
});
