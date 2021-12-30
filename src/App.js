import "./App.css";
import React from "react";
import Card from "./components/Card";
import Board from "./components/Board";
import AddCardForm from "./components/AddCardForm";
import AddBoardForm from "./components/AddBoardForm";

function App() {
  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <div className="entire_board">
        <section className="board_section">
          <h2>Boards</h2>
          <p>boards go here</p>
          <Board />
        </section>

        <section className="card_section">
          <h2>Cards</h2>
          <Card />
          <Card />
          <Card />
        </section>

        <section className="add_board_form">
          <h2>Add a Board</h2>
          <p>form to add new board goes here</p>
          <AddBoardForm />
        </section>

        <section className="add_card_form">
          <h2>Add a Card</h2>
          <AddCardForm />
        </section>
      </div>
    </div>
  );
}

export default App;
