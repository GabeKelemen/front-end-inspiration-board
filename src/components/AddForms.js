import { useState } from "react";

import Card from "./Card";
import AddCardForm from "./AddCardForm";
import AddBoardForm from "./AddBoardForm";
import "./AddForms.css";

const AddForms = (props) => {
  const [cards, setCards] = useState(props.cards);
  const [board, setBoard] = useState(props.board);
  const [boardFormVisible, setBoardFormVisible] = useState(false);
  const [cardFormVisible, setCardFormVisible] = useState(false);
  const [buttonTextForm, setButtonTextForm] = useState(
    "Display Add Board Form"
  );

  const toggleBoardForm = () => {
    setBoardFormVisible(!boardFormVisible);
    if (boardFormVisible) {
      setButtonTextForm("Hide Add Board Form");
    } else {
      setButtonTextForm("Display Add Board Form");
    }
  };

  return (
    <>
      <div className="form__header">
        <h1>Add a New Card or Board</h1>
      </div>
      <section className="forms-panel">
        <div>
          <AddCardForm
            onAdd={(card) => {
              setCards([...cards, card]);
            }}
          />
        </div>

        <div>
          <button onClick={toggleBoardForm}>{buttonTextForm}</button>
          <AddBoardForm
            onAdd={(card) => {
              setCards([...cards, card]);
            }}
          />
        </div>
      </section>
    </>
  );
};

export default AddForms;
