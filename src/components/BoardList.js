import "./BoardList.css";
import Board from "./Board";

const BoardList = (props) => {
  console.log(props);

  const individualBoardComponents = props.boards.map((board) => {
    return (
      <li>
        <Board board={board} selectBoard={props.selectBoard} />
      </li>
    );
  });

  return (
    <div className="boardlist">
      <h2>Board List</h2>
      <ol>{individualBoardComponents}</ol>
    </div>
  );
};

export default BoardList;
