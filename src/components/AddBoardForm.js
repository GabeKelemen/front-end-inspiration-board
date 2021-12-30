import { useState } from "react";
import "./AddBoardForm.css";

const AddBoardForm = (onAdd) => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!title || !owner) {
      alert("Please enter a title and owner name");
      return;
    }
    onAdd({ title, owner });
    setTitle("");
    setOwner("");
  };

  return (
    <div className="container">
      <p>Use this form to add a board</p>
      <form className="add-form" onSubmit={onSubmitForm}>
        <div className="form-control">
          <label>Board Title</label>
          <input
            type="text"
            placeholder="Add Board Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Board Owner</label>
          <input
            type="text"
            placeholder="Add Owner Name"
            value={owner}
            onChange={(event) => setOwner(event.target.value)}
          />
        </div>
      </form>
      <input
        type="submit"
        value="Add Board Form"
        className="card_form_button"
      />
    </div>
  );
};

export default AddBoardForm;
