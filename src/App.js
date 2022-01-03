import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

import Card from "./components/Card";
import AddForms from "./components/AddForms";
import BoardList from "./components/BoardList";

function App() {
  const [allBoardsList, setAllBoardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({});
  const [cardsList, setCardsList] = useState([]);

  const [count, setCount] = useState(0);
  const incrementLikes = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    axios
      .get("https://mando-backend.herokuapp.com/boards")
      .then((response) => {
        console.log(response.data);
        setAllBoardsList([...response.data.boards]);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("No boards found");
      });
  }, []);

  const onSelectBoard = (board) => {
    setSelectedBoard(board);
  };
  // need to get cards for selected board
  // pass down to cardlist -- collection of card components

  return (
    <>
      <Header />
      <div className="App">
        <p>Just for fun click </p>
        <button onClick={incrementLikes}>{count}</button>

        <section>
          <div className="board-container">
            <p>board and board list go here</p>
          </div>

          <Card />
        </section>

        <section>
          <AddForms />
        </section>
      </div>
    </>
  );
}

export default App;
