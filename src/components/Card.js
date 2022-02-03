import "./Card.css";

const Card = (props) => {
  const incrementLikes = () => {
    props.onLike(props.id);
  };

  const handleDeleteCard = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="card">
      <p>Message:</p>
      <p className="card__message">{props.message}</p>

      <section className="card__bottom">
        <button className="card__button" onClick={incrementLikes}>
          {props.likes}
        </button>

        <button className="delete__button" onClick={handleDeleteCard}>
          X
        </button>
      </section>
    </div>
  );
};

export default Card;
