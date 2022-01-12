import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
//import "../index.css"

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfilePopupOpen = () => {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlacePopupOpen = () => {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleEditAvatarPopupOpen = () => {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);

    setSelectedCard(null);
  };

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

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          id="avatar-link"
          name="avatar"
          className="form__info form__info_type_avatar-link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="form__input-error avatar-link-error">
          Введите адрес сайта.
        </span>
      </PopupWithForm>

      <PopupWithForm
        name="card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="input-title"
          className="form__info form__info_type_title"
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          autoComplete="off"
          required
        />
        <span className="form__input-error input-title-error">
          Вы пропустили это поле.
        </span>
        <input
          type="url"
          id="input-link"
          className="form__info form__info_type_link"
          name="link"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          required
        />
        <span className="form__input-error input-link-error">
          Введите адрес сайта.
        </span>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
      ></PopupWithForm>

      <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
