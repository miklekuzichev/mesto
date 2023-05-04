let popup = document.querySelector('.popup');
let buttonPopupEdit = document.querySelector('.profile__edit-button');
let buttonPopupClose = document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__profile');

// Предзаполнение формы
nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;

// Обработчик «отправки» формы
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popup.classList.remove('popup__edit-opened');
}

formElement.addEventListener('submit', handleFormSubmit); 

buttonPopupEdit.addEventListener('click', () => {
    popup.classList.add('popup__edit-opened');
});

buttonPopupClose.addEventListener('click', () => {
    popup.classList.remove('popup__edit-opened');
});
