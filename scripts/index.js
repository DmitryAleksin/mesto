
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__square');

const formElement = popupElement.querySelector('.popup__content');
const nameInput = popupElement.querySelector('.popup__input_name');
const statusInput = popupElement.querySelector('.popup__input_status');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');

//const heartElement = document.querySelector('.elements__heart-element');
//const blackHeartElement = document.querySelector('.elements__blackHeart-element');

//function myFunction(elem){
//elem.classList.add('clicked', heartElement);
//if(elem === heartElement){
//  blackHeartElement.classList.remove('clicked');
//  }else{
//      heartElement.classList.remove('clicked');
//  }
//  }  


const openPopup = function () {
    popupElement.classList.add('popup_is-opened');
    nameInput.value = profileName.textContent;
    statusInput.value = profileStatus.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_is-opened')
}

//const closePopupByClickOnOverlay = function (event) {
//   if (event.target === event.currentTarget) {
//        closePopup();
//   }
//}

const formSubmitHandler = function (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

//popupElement.addEventListener('click', closePopupByClickOnOverlay);

formElement.addEventListener('submit', formSubmitHandler);

//heartElement.addEventListener('click', myFunction);