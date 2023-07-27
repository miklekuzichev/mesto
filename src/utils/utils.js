//
// Функция отображения ошибок и отображения текста кнопки сабмита 
//
function handleSubmit(request, popupInstance, loadingText = "Сохранение...") {
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
  }