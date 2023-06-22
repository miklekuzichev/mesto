//
// Функция добавления новой карочки в index.html
//
function createCard (titleValue, srcValue) {
    const userElement = cardTemplate.querySelector('.card').cloneNode(true);
    const userElementCardImage = userElement.querySelector('.card__image');
    userElementCardImage.src = srcValue;
    userElementCardImage.alt = 'Картинка ' + titleValue;
    userElement.querySelector('.card__text').textContent = titleValue;
    const eventOpenImg = userElement.querySelector('.card__open-image');
    const eventDeleteButton = userElement.querySelector('.card__delete');
    const eventActiveLike = userElement.querySelector('.card__heart-button');
    eventOpenImg.addEventListener('click', openImagePopup); 
    eventDeleteButton.addEventListener('click', deleteCard);
    eventActiveLike.addEventListener('click', function() {
      makeLike('card__heart-button-active', this);
    });
    return userElement;
  }