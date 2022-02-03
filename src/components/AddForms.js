import AddCardForm from "./AddCardForm";
import AddBoardForm from "./AddBoardForm";
import "./AddForms.css";

const AddForms = ({ addNewCard, addNewBoard, displayBoardForm }) => {
  return (
    <>
      <div className="form__header">
        <h1>Add a New Card or Board</h1>
      </div>

      <section className="forms-panel">
        <div>
          { displayBoardForm || <AddBoardForm addNewBoard={addNewBoard} />}
          <p></p>
        </div>

        <div>
          <AddCardForm
            addNewCard={addNewCard}
          />
        </div>
      </section>
    </>
  );
};

export default AddForms;
