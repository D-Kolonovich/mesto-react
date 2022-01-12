import React from "react"

function Card(props) {

    function handleCardClick() {
      props.onCardClick(props.card)
    }
  
  return (
    <li className="template-element">
        <article className="element">
          <img onClick={handleCardClick} src={ props.card.link } alt="Изображение" className="element__image" />
          <button
            type="button"
            className="element__button_type_delete"
            aria-label="Удалить"
            title="Удалить"
          ></button>
          <div className="element__content">
            <h2 className="element__title">{ props.card.name }</h2>
            <div className="element__like-wrap">
              <button
                type="button"
                className="element__like"
                aria-label="Нравится"
                title="Нравится"
              ></button>
              <p className="element__like-number">{ props.card.likes.length }</p>
            </div>
          </div>
        </article>
    </li>

)
}

export default Card