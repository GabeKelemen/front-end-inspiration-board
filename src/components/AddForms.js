import AddCardForm from "./AddCardForm";
import AddBoardForm from "./AddBoardForm";
import "./AddForms.css";

const AddForms = (props) => {
  return (
    <>
      <div className="form__header">
        <h1>Add a New Card or Board</h1>
      </div>

      <section className="forms-panel">
        <div>
          <AddCardForm />
        </div>

        <div>
          <AddBoardForm />
        </div>
      </section>
    </>
  );
};

export default AddForms;
