import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Board from "./components/Board";
import AddCardForm from "./components/AddCardForm";
import AddBoardForm from "./components/AddBoardForm";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";

function App() {
  const [board, setBoard] = useState([
    { id: 1, title: "Leadership", owner: "Janeway" },
    { id: 2, title: "Social Groups", owner: "Seven of Nine" },
    { id: 3, title: "Engineering", owner: "Balana" },
  ]);

  // const addCardForm = (message, emoji) => {
  //   console.log(message, emoji)

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <Board />
      <div className="entire_board">
        <section className="board_section">
          <h2>Boards</h2>
          <p>boards go here</p>
          <BoardList />

          <section className="card_section">
            <h2>Cards</h2>
            <CardList />
            <Card />
            <Card />
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
