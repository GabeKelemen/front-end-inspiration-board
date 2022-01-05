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
  const [boardFormDisplay, setBoardFormDisplay] = useState(false);

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

  // ======= ADD NEW BOARD =======

  const addNewBoard = (board) => {
    const newBoard = {
      title: board.title,
      owner: board.owner,
    };
    axios
      .post("https://mando-backend.herokuapp.com/boards", newBoard)
      .then((response) => {
        console.log(response);
        const allBoards = [...allBoardsList];
        allBoards.push(response.data);
        setAllBoardsList(allBoards);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // ======= ADD NEW CARD =======

  const addNewCard = (Newcard, selectedBoard) => {
    const newCard = {
      message: Newcard.message,
    };

    axios
      .post(
        `https://mando-backend.herokuapp.com/boards/${selectedBoard.id}/cards`,
        newCard
      )
      .then((response) => {
        console.log(response.data);
        const newCardsList = [...cardsList];
        newCardsList.push(response.data);
        setCardsList(newCardsList);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // ======= DELETE A CARD =======

  const deleteCard = (card) => {
    axios
      .delete(
        `https://mando-backend.herokuapp.com/boards/${selectedBoard.id}/cards/${card.id}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log("Error:", error));
  };

  // ======= TOGGLE FORM =======

  const [buttonTextForm, setButtonTextForm] = useState(
    "Display Add Board Form"
  );

  const toggleBoardForm = () => {
    setBoardFormDisplay(!boardFormDisplay);
    if (boardFormDisplay) {
      setButtonTextForm("Hide Add Board Form");
    } else {
      setButtonTextForm("Display Add Board Form");
    }
  };

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

        <section className="card__display">{individualCardComponents}</section>

        <section>
          <AddForms />
          <button onClick={toggleBoardForm}>{buttonTextForm}</button>
        </section>
      </div>
    </>
  );
}

export default App;
