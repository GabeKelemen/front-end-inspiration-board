import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Board from "./components/Board";

import AddForms from "./components/AddForms";
import BoardList from "./components/BoardList";
import Card from "./components/Card";

function App() {
  const [allBoardsList, setAllBoardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState([]);
  const [cardsList, setCardsList] = useState([]);

  // ======= GET ALL BOARDS =======

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

  // ======= GET CARDS FOR SELECTED BOARD =======
  useEffect(() => {
    axios
      .get(
        `https://mando-backend.herokuapp.com/boards/${selectedBoard.id}/cards`
      )
      .then((response) => {
        console.log(response.data);
        setCardsList([...response.data]);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("No cards found");
      });
  }, [selectedBoard]);

  const individualCardComponents = cardsList.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.likes}
      />
    );
  });

  return (
    <>
      <Header />
      <div className="App">
        <section>
          <BoardList
            boards={allBoardsList}
            OnSelectBoard={selectBoard}
            selectedBoard={selectedBoard}
          />
        </section>

        <section>
          <h3>cards for selected board</h3>
          {individualCardComponents}
        </section>

        <section>
          <AddForms />
        </section>
      </div>
    </>
  );
}

export default App;
