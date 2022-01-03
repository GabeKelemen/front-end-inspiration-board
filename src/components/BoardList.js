import "./BoardList.css";

const BoardList = (props) => {
  const handleSelectBoard = () => {
    props.onSelectBoard(props.board);
  };

  return (
    <>
      <section className="boardlist" onClick={handleSelectBoard}>
        {props.board.title}
      </section>
    </>
  );
};

export default BoardList;
