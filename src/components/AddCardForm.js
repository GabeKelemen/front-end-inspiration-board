import { useState } from "react";
import "./AddCardForm.css";

const AddCardForm = (onAdd) => {
  const [message, setMessage] = useState("");
  // const [emoji, setEmoji] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!message || message.length < 40) {
      alert("Please enter a message that is less than 40 characters");
      return;
    }
    onAdd({ message });
    setMessage("");
  };

  return (
    <div className="container">
      <h3>Add a New Card</h3>

      <form className="add-form" onSubmit={onSubmitForm}>
        <div className="form-control">
          <label>Your Message</label>
          <input
            type="text"
            placeholder="Add Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </form>
      <input type="submit" value="Add Card Form" className="card_form_button" />
    </div>
  );
};

export default AddCardForm;
