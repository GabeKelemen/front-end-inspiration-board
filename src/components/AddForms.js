import { useState } from "react";
import "./Board.css";
import Card from "./Card";
import AddCardForm from "./AddCardForm";
import AddBoardForm from "./AddBoardForm";

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
    <div className="entire_Board">
      <div>
        <button onClick={toggleBoardForm}>{buttonTextForm}</button>
        <AddBoardForm
          onAdd={(card) => {
            setCards([...cards, card]);
          }}
        />
      </div>

      <div>
        <AddCardForm
          onAdd={(card) => {
            setCards([...cards, card]);
          }}
        />
      </div>
    </div>
  );
};

export default AddForms;
