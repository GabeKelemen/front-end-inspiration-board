// presentational component
// card likes
// card delete

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.message}</p>

      <button>Like Card </button>

      <button>Delete</button>
    </div>
  );
};

export default Card;
