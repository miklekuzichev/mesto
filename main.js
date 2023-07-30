(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var r,n;return r=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"_request",value:function(e,t){return fetch("".concat(this._baseUrl,"/").concat(e),t).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return this._request("cards",{headers:this._headers})}},{key:"editAvatar",value:function(e){return this._request("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.imagelink})})}},{key:"getUserInfo",value:function(){return this._request("users/me",{headers:this._headers})}},{key:"addCard",value:function(e){return this._request("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.imagename,link:e.imagelink})})}},{key:"editUserInfo",value:function(e){return this._request("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.username,about:e.userprofile})})}},{key:"deleteCard",value:function(e){return this._request("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"makeLike",value:function(e){return this._request("cards/".concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(e){return this._request("cards/".concat(e,"/likes"),{method:"DELETE",headers:this._headers})}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(t){var r=t.cardData,n=t.cardTemplate,o=t.userId,i=t.clickCard,u=t.removeCard,a=t.setLike,c=t.removeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._cardId=r._id,this._likes=r.likes,this._cardOwnerId=r.owner._id,this._cardTemplate=n,this._userId=o,this._clickCard=i,this._removeCard=u,this._setLike=a,this._removeLike=c}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._userElementCardImage=this._element.querySelector(".card__image"),this._eventActiveLike=this._element.querySelector(".card__heart-button"),this._eventDeleteButton=this._element.querySelector(".card__delete"),this._userElementCardImage.alt="Картинка "+this._name,this._userElementCardImage.src=this._link,this._element.querySelector(".card__text").textContent=this._name,this._eventOpenImg=this._element.querySelector(".card__open-image"),this._deleteButton(),this._setEventListeners(),this._isSetLike(),this._likesCount=this._element.querySelector(".card__heart-counter"),this._likesCount.textContent=this._likes.length,this._element}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_deleteButton",value:function(){this._userId!==this._cardOwnerId&&this._eventDeleteButton.remove()}},{key:"_isSetLike",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._eventActiveLike.classList.add("card__heart-button-active")}},{key:"makeLike",value:function(e){this._eventActiveLike.classList.toggle("card__heart-button-active"),this._likes=e.likes,this._likesCount.textContent=this._likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._userElementCardImage.addEventListener("click",(function(){e._clickCard(e._name,e._link)})),this._eventDeleteButton.addEventListener("click",(function(){e._removeCard(e._cardId)})),this._eventActiveLike.addEventListener("click",(function(){e._eventActiveLike.classList.contains("card__heart-button-active")?e._removeLike(e._cardId):e._setLike(e._cardId)}))}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._inputList=Array.from(r.querySelectorAll(t.inputSelector)),this._submitButtonSelector=r.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=r}var t,r;return t=e,(r=[{key:"_showError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_isInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._isInvalidInput()?(this._submitButtonSelector.classList.add(this._inactiveButtonClass),this._submitButtonSelector.setAttribute("disabled","")):(this._submitButtonSelector.classList.remove(this._inactiveButtonClass),this._submitButtonSelector.removeAttribute("disabled",""))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(r),this._renderer=n}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this._clear(),e.forEach((function(e){t._renderer(e)}))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t.name),this._profile=document.querySelector(t.about),this._avatar=document.querySelector(t.avatar),this._userId=0,this._userData={}}var t,r;return t=e,(r=[{key:"setUserInfo",value:function(e){this._userData=e,this._name.textContent=e.name,this._profile.textContent=e.about,this._avatar.src=e.avatar,this._userId=e._id}},{key:"getUserInfo",value:function(){return this._userData}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._escClose=this._handleEscClose.bind(this),this._close=this._popup.querySelector(".popup__close")}var t,r;return t=e,(r=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._escClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._escClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()})),this._close.addEventListener("click",(function(){e.close()}))}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},S.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(n);if(o){var r=k(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupOpenName=t._popup.querySelector(".popup__figcaption"),t._popupOpenImage=t._popup.querySelector(".popup__img"),t}return t=u,(r=[{key:"open",value:function(e,t){S(k(u.prototype),"open",this).call(this),this._popupOpenName.textContent=e,this._popupOpenImage.alt=e,this._popupOpenImage.src=t}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},j.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(n);if(o){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.selector,n=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r))._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__input"),t._handleFormSubmit=n,t._buttonSubmit=t._form.querySelector(".popup__button"),t._buttonSubmitText=t._buttonSubmit.textContent,t}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._values={},this._inputList.forEach((function(t){e._values[t.name]=t.value})),this._values}},{key:"close",value:function(){j(P(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;j(P(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"load",value:function(e,t){this._buttonSubmit.textContent=e?t:this._buttonSubmitText}}])&&O(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},T.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(n);if(o){var r=B(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r))._form=t._popup.querySelector(".popup__form"),t}return t=u,(r=[{key:"submitMethod",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;T(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(m),A={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function D(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t.load(!0,r),e().then((function(){t.close()})).catch(console.error).finally((function(){t.load(!1)}))}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var V=document.querySelector(".popup_type_edit"),F=document.querySelector(".popup_type_add"),N=document.querySelector(".popup_type_edit-profile"),M=document.querySelector(".profile__edit-button"),H=document.querySelector(".popup__input_type_name"),J=document.querySelector(".popup__input_type_profile"),z=document.querySelector(".profile__add-button"),$=document.querySelector(".profile__avatar-button"),G=new c(A,V),K=new c(A,F),Q=new c(A,N),W=new d({name:".profile__title",about:".profile__subtitle",avatar:".profile__avatar"}),X=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-71",headers:{authorization:"4d9ffc72-560d-4507-8006-e62ea753eb8d","Content-Type":"application/json"}});Promise.all([X.getInitialCards(),X.getUserInfo()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];W.setUserInfo(i),oe.renderItems(o)})).catch(console.error);var Y=new C({selector:".popup_type_edit",handleFormSubmit:function(e){D((function(){return X.editUserInfo(e).then((function(e){W.setUserInfo(e)}))}),Y)}});Y.setEventListeners();var Z=new C({selector:".popup_type_add",handleFormSubmit:function(e){D((function(){return X.addCard(e).then((function(e){oe.addItem(ne(e))}))}),Z)}});Z.setEventListeners();var ee=new x({popupSelector:".popup_type_delete"});ee.setEventListeners();var te=new C({selector:".popup_type_edit-profile",handleFormSubmit:function(e){D((function(){return X.editAvatar(e).then((function(e){W.setUserInfo(e)}))}),te)}});te.setEventListeners();var re=new w(".popup_type_img");re.setEventListeners();var ne=function(e){var t=new i({cardData:e,cardTemplate:"#card-template",userId:W.getUserInfo()._id,clickCard:function(e,t){re.open(e,t)},removeCard:function(e){ee.open(),ee.submitMethod((function(){X.deleteCard(e).then((function(){ee.close(),t.removeCard()})).catch(console.error)}))},setLike:function(e){X.makeLike(e).then((function(e){t.makeLike(e)})).catch(console.error)},removeLike:function(e){X.deleteLike(e).then((function(e){t.makeLike(e)})).catch(console.error)}});return t.generateCard()};M.addEventListener("click",(function(){G.resetValidation();var e=W.getUserInfo();H.value=e.name,J.value=e.about,Y.open()})),$.addEventListener("click",(function(){te.open(),Q.resetValidation()})),z.addEventListener("click",(function(){Z.open(),K.resetValidation()}));var oe=new f({renderer:function(e){oe.addItem(ne(e))}},".cards");G.enableValidation(),K.enableValidation(),Q.enableValidation()})();