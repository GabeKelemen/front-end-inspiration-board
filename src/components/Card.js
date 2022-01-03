import "./Card.css";
import { useState } from "react";

const Card = (props) => {
  const [likesCount, setLikesCount] = useState(0);
  const incrementLikes = () => {
    setLikesCount(likesCount + 1);
  };

  const handleDeleteCard = () => {
    const currentCardComponents = props.cardsList;
    for (let card of currentCardComponents) {
      if (card.id === props.id) {
        currentCardComponents.splice(card, 1);
      }
    }
    // reset state of cardlist to reflect deletion
    props.setCardsList(currentCardComponents);
    props.handleDeleteCard(props.id, props.selectedBoard);
  };

  return (
    <div className="card">
      <p>This is a card with a message: {props.message}</p>

      <button className="card__button" onClick={incrementLikes}>
        {likesCount}
      </button>

      <button className="delete__button" onClick={handleDeleteCard}>
        X
      </button>
    </div>
  );
};

export default Card;
