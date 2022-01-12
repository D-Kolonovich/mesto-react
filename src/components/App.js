import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup"
//import "../index.css"

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false);

  const handleEditProfilePopupOpen = () => {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlacePopupOpen = () => {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const handleEditAvatarPopupOpen = () => {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setEditAvatarPopupOpen(false)

    setSelectedCard(false)
  }

//   const handleEditAvatarClick = () => {
//     document.querySelector(".popup_type_edit-avatar").classList.add('popup_opened');
//  }

//  const handleEditProfileClick = () => {
//   document.querySelector(".popup_type_edit-profile").classList.add('popup_opened');
// }

// const handleAddPlaceClick = () => {
// document.querySelector(".popup_type_add-card").classList.add('popup_opened');
// }

  return (
    <div className="page">
      <Header />
      
      <Main 
      onEditProfile={handleEditProfilePopupOpen}
      onAddPlace={handleAddPlacePopupOpen}
      onEditAvatar={handleEditAvatarPopupOpen}
      onCardClick={handleCardClick}
      />
      
      <Footer />

      <PopupWithForm name="profile" title="Редактировать профиль" children={
        <>
        <input
                type="text"
                // value=""
                id="input-name"
                className="form__info form__info_type_name"
                name="name"
                autoComplete="off"
                minLength="2"
                maxLength="40"
                placeholder="Имя"
                required
              />
              <span className="form__input-error input-name-error">
                Вы пропустили это поле.
              </span>

              <input
                type="text"
                // value=""
                id="input-job"
                className="form__info form__info_type_job"
                name="about"
                autoComplete="off"
                minLength="2"
                maxLength="200"
                placeholder="Вид деятельности"
                required
              />
              <span className="form__input-error input-job-error">
                Вы пропустили это поле.
              </span>
        </>
      }
      buttonText="Сохранить"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      />

      <PopupWithForm name="avatar" title="Обновить аватар" children={
        <>
          <input type="url" id="avatar-link" name="avatar" className="form__info form__info_type_avatar-link" placeholder="Ссылка на картинку" required/>
          <span className="form__input-error avatar-link-error">Введите адрес сайта.</span>
        </>
      }
      buttonText="Сохранить"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      />

      <PopupWithForm name="card" title="Новое место" children={
        <>
          <input type="text" id="input-title" className="form__info form__info_type_title" name="name" minLength="2" maxLength="30" placeholder="Название" autoComplete="off" required/>
          <span className="form__input-error input-title-error">Вы пропустили это поле.</span>
          <input type="url" id="input-link" className="form__info form__info_type_link" name="link" placeholder="Ссылка на картинку" autoComplete="off" required/>
          <span className="form__input-error input-link-error">Введите адрес сайта.</span>
        </>
      } 
      buttonText="Создать"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      />

      <PopupWithForm name="confirm" title="Вы уверены?" children={
        <>
        </>
      }
      buttonText="Да"
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      
    </div>
  );
}

export default App;
