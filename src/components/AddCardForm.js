import { useState } from "react";
import "./AddCardForm.css";

const AddCardForm = (onAdd) => {
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!message || !emoji) {
      alert("Please enter a message and emoji");
      return;
    }
    onAdd({ message, emoji });
    setMessage("");
    setEmoji("");
  };

  return (
    <div className="container">
      <p>Use this form to add a card</p>
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

        <div className="form-control">
          <label>Emoji</label>
          <select id="emoji" name="emoji"></select>
        </div>
      </form>
      <input type="submit" value="Add Card Form" className="card_form_button" />
    </div>
  );
};

export default AddCardForm;
