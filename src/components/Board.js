import React from "react";

const Board = (props) => {
  return (
    <div onClick={() => props.selectBoard(props.board)}>
      <h3>{props.board.title}</h3>
    </div>
  );
};

export default Board;
