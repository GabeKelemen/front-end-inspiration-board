import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Board from "./components/Board";

import AddForms from "./components/AddForms";
import BoardList from "./components/BoardList";

function App() {
  const [allBoardsList, setAllBoardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState([1]);
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://mando-backend.herokuapp.com/boards")
      .then((response) => {
        console.log(response.data);
        setAllBoardsList([...response.data]);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("No boards found");
      });
  }, []);

  const selectBoard = (board) => {
    setSelectedBoard(board);
  };

  // need to get cards for selected board
  // pass down to cardlist -- collection of card components

  return (
    <>
      <Header />
      <div className="App">
        <section>
          <BoardList boards={allBoardsList} OnSelectBoard={selectBoard} />
        </section>

        <section>
          <AddForms />
        </section>
      </div>
    </>
  );
}

export default App;
