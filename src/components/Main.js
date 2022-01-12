
import React from "react";
import api from "../utils/Api"
import Card from "../components/Card"
import addButton from "../images/add_button.svg";

function Main(props) {

  const [ userName, setUserName ] = React.useState("")
  const [ userDescription, setUserDescription ] = React.useState("")
  const [ userAvatar, setUserAvatar ] = React.useState("")
  const [ cards, setCards ] = React.useState([])


  React.useEffect(() => {
    api.getUserInfo()
      .then(({ name, about, avatar }) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
      })
      .catch((err) => {
        console.log(err);
      })

    api.getInitialCards()
      .then((cards) => {
        setCards(cards)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <main className="content">
      <section className="profile page__section-hidden">
        <div className="profile__wrap-avatar">
          <img
            src= { userAvatar }
            alt="Фото профиля"
            className="profile__avatar"
          />
          <button
            type="button"
            className="profile__button profile__button-avatar"
            aria-label="Редактировать"
            title="Редактировать"
            onClick={props.onEditAvatar}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name" id="name">
          { userName }
          </h1>
          <button
            type="button"
            className="profile__button profile__button_type_edit"
            aria-label="Редактировать"
            title="Редактировать"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__description" id="description">
            { userDescription }
          </p>
        </div>

        <button
          type="button"
          className="profile__button profile__button_type_add"
          aria-label="Добавить"
          title="Добавить"
          onClick={props.onAddPlace}
        >
          <img
            src={addButton}
            alt="Добавить фото"
          />
        </button>
      </section>

      <section className="elements">{ cards.map(({ _id, ...card }) => 
      <Card
      key={ _id }
      card={ card }
      onCardClick={props.onCardClick}
    />
      ) }</section>
    </main>
  );
}

export default Main;
