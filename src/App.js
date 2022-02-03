import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

import AddForms from "./components/AddForms";
import BoardList from "./components/BoardList";
import Card from "./components/Card";

function App() {
  const [allBoardsList, setAllBoardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
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

  const getCards = (boardId) => {
    axios
      .get(
        `https://mando-backend.herokuapp.com/boards/${boardId}/cards`
      )
      .then((response) => {
        console.log(response.data);
        setCardsList([...response.data]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // ======= GET CARDS FOR SELECTED BOARD =======
  useEffect(() => {
    if (! selectedBoard) { return; }

    getCards(selectedBoard.id);
  }, [selectedBoard]);

  // ======= ADD NEW BOARD =======

  const addNewBoard = (newBoard) => {
    // const newBoard = {
    //   title: board.title,
    //   owner: board.owner,
    // };
    axios
      .post("https://mando-backend.herokuapp.com/boards", newBoard)
      .then((response) => {
        console.log(response);
        const newBoards = [...allBoardsList];
        newBoard["id"] = response.data.id;
        newBoards.push(newBoard);
        setAllBoardsList(newBoards);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // ======= ADD NEW CARD =======

  const addNewCard = (cardData) => {
    if (! selectedBoard) { return; }

    const newCard = {
      message: cardData.message,
    };

    axios
      .post(
        `https://mando-backend.herokuapp.com/boards/${selectedBoard.id}/cards`,
        newCard
      )
      .then((response) => {
        console.log(response.data);
        getCards(selectedBoard.id)
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // ======= DELETE A CARD =======

  const deleteCard = (cardId) => {
    axios
      .delete(
        `https://mando-backend.herokuapp.com/cards/${cardId}`
      )
      .then((response) => {
        console.log(response.data);
        getCards(selectedBoard.id);
      })
      .catch((error) => console.log("Error:", error));
  };

  // ======= LIKE A CARD =======

  const likeCard = (cardId) => {
    axios
      .patch(
        `https://mando-backend.herokuapp.com/cards/${cardId}/upvote`
      )
      .then((response) => {
        console.log(response.data);
        getCards(selectedBoard.id);
      })
      .catch((error) => console.log("Error:", error));
  };

  const individualCardComponents = cardsList.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.like_count}
        onLike={likeCard}
        onDelete={deleteCard}
      />
    );
  });

  // ======= TOGGLE FORM =======

  const [buttonTextForm, setButtonTextForm] = useState(
    "Hide Add Board Form"
  );

  const toggleBoardFormButton = () => {
    setBoardFormDisplay(!boardFormDisplay);
    if (boardFormDisplay) {
      setButtonTextForm("Hide Add Board Form");
    } else {
      setButtonTextForm("Display Add Board Form");
    }
  };

  // const toggleBoardForm = () => {
  //   if (boardFormDisplay === false) {
  //     return (
  //       <section>
  //         <h3>boardDispaly is false</h3>
  //         <AddForms />
  //         <button className="button" onClick={handleToggleBoardForm}>
  //           {" "}
  //           {toggleBoardForm} false
  //         </button>
  //       </section>
  //     );
  //   } else if (boardFormDisplay === true) {
  //     return (
  //       <section>
  //         <h3>boardDispaly is true</h3>
  //         <button className="button" onClick={handleToggleBoardForm}>
  //           {toggleBoardForm} true
  //         </button>
  //       </section>
  //     );
  //   }
  // };
  // const handleToggleBoardForm = () => {
  //   if (boardFormDisplay === false) {
  //     setBoardFormDisplay(true);
  //   } else if (boardFormDisplay === true) {
  //     setBoardFormDisplay(false);
  //   }
  // };

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
          <AddForms 
            addNewCard={addNewCard}
            addNewBoard={addNewBoard}
            displayBoardForm={boardFormDisplay}
            />
          <button className="button" onClick={toggleBoardFormButton}>
            {buttonTextForm}
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
