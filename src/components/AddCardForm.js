import { useState } from "react";
import "./AddCardForm.css";

const AddCardForm = (onAdd) => {
  const [message, setMessage] = useState({ message: "" });

  const onSubmitCardForm = (event) => {
    event.preventDefault();
    // if (!message || message.length < 40) {
    //   alert("Please enter a message that is less than 40 characters");
    //   return;
    // }
    onAdd({ message });
    setMessage({ ...message });
  };

  return (
    <div className="container">
      <h3>Add a New Card</h3>

      <form className="add-form" onSubmit={onSubmitCardForm}>
        <div className="form-control">
          <label>Card Message</label>
          <input
            type="text"
            required
            placeholder="Add your message..."
            value={message.message}
            maxLength={40}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </form>
      <input type="submit" value="Add Message" className="card_form_button" />
    </div>
  );
};

export default AddCardForm;
