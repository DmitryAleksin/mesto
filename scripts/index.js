
//  Масcив
const initialCards = [
    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1648935436374-433545565dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fCVEMCVCNCVEMSU4MyVEMCVCMSVEMCVCMCVEMCVCOXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'Челябинская область',
        link: 'https://images.unsplash.com/photo-1578152678928-ae77977377f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fCVEMCVCNCVEMSU4MyVEMCVCMSVEMCVCMCVEMCVCOXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'Иваново',
        link: 'https://images.unsplash.com/photo-1667303402335-26617c3219d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxnX2VqdGQtenFMc3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'Камчатка',
        link: 'https://images.unsplash.com/photo-1639347205093-0d0a1fff3f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xKbTFBZWFUaWY4c3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'Холмогорский район',
        link: 'https://images.unsplash.com/photo-1615482828330-14a060a2e6c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xsU2czQ1ZYLUlEY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        name: 'Байкал',
        link: 'https://images.unsplash.com/photo-1582120042072-d01e2fc8f3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXxsU2czQ1ZYLUlEY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    }
];

// для всех попапов
const closePopupsButtons = document.querySelectorAll('.popup__button-close');

const profilePopup = document.querySelector('#popup-profile');
const nameInput = profilePopup.querySelector('.popup__input_name_write');
const statusInput = profilePopup.querySelector('.popup__input_status_write');

const profileForm = document.forms["profile-form"];


const profileOpenButton = document.querySelector('.profile__square');
const popupAddButtonElement = document.querySelector('.profile__rectangle');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');

// редакрирования карточки
const popupPhotoElement = document.querySelector('#popup-photo-card');
const photoName = popupPhotoElement.querySelector('#popup-photo-name');
const photoLink = popupPhotoElement.querySelector('#popup-photo-link');

const cardForm = document.forms["card-form"];

// общий контейнер карточек
const photoCardsContainer = document.querySelector('.elements');

const addTemplate = document.querySelector('#template-elements').content.querySelector('.elements__element').cloneNode(true);
const photoCardElement = document.querySelector('.elements__element');

// блок профиля
const openPopupPhotoZoom = document.querySelector('#popup-photo-card-zoom');
const popupPhotoZoomElement = openPopupPhotoZoom.querySelector('.popup__photo-item');
const popupPhotoZoomSubtitle = openPopupPhotoZoom.querySelector('.popup__photo-subtitle');


// попап профиля
function openPopup(popupItem) {
    popupItem.classList.add('popup_is-opened');
};

// добавление данных попапа профиля
const addProfileInfo = function () {
    nameInput.value = profileName.textContent;
    statusInput.value = profileStatus.textContent;
};

// попап фото-карточки
const openPopupPhotoCard = function () {
    openPopup(popupPhotoElement);
};

// закрыте попапа
function closePopup(popupItem) {
    popupItem.classList.remove('popup_is-opened');
};

// отправка данных введенных в попап
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    closePopup(profilePopup);
};


//const closePopupByClickOnOverlay = function (event) {
//   if (event.target === event.currentTarget) {
//        closePopup();
//   }
//}


// создания фото-контейнера
function generateCard(placeName, link) {
    const addPhotoContainer = addTemplate.cloneNode(true);
    const addPhoto = addPhotoContainer.querySelector('.elements__photo-element');
    const addPhotoName = addPhotoContainer.querySelector('.elements__name-element');
    const addLike = addPhotoContainer.querySelector('.elements__heart-element');
    const trashBin = addPhotoContainer.querySelector('.elements__delete');

    addPhoto.src = link;
    addPhoto.alt = placeName;
    addPhotoName.textContent = placeName;

    addLike.addEventListener('click', toggleLike);

    addPhoto.addEventListener('click', function () {
        popupPhotoZoomElement.src = link;
        popupPhotoZoomElement.alt = placeName;
        popupPhotoZoomSubtitle.textContent = placeName;
        openPopup(openPopupPhotoZoom);
    });

    trashBin.addEventListener('click', deletePhotoCard);

    return addPhotoContainer;
};

// удаление карточки
const deletePhotoCard = (evt) => {
    evt.target.closest('.elements__element').remove();
};

// добавление лайка
const toggleLike = (evt) => {
    evt.target.classList.toggle('elements__heart-element_active');
};

// обработка карточки
function renderCard(place, link) {
    photoCardsContainer.prepend(generateCard(place, link));
};

// массив карточек
initialCards.forEach(function (item) {
    renderCard(item.name, item.link);
});

// функия закрытия попапов
closePopupsButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

//СЛУШАТЕЛИ

popupAddButtonElement.addEventListener('click', openPopupPhotoCard);

profileOpenButton.addEventListener('click', () => {
    openPopup(profilePopup);
    addProfileInfo();
});

profilePopup.addEventListener('submit', handleProfileFormSubmit);

popupPhotoElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    renderCard(photoName.value, photoLink.value);
    cardForm.reset();
    closePopup(popupPhotoElement);
});

//profilePopup.addEventListener('click', closePopupByClickOnOverlay);