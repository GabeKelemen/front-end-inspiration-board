import { useEffect } from "react";
import Card from "./Card";

// when card list is updated, not changing the state, just notifies that state has changed

const CardsDisplay = (props) => {

  useEffect(() => { 
    console.log("cards display updated");
  }, [props.cardsList]);

  // pass in cardsList to re-render when cardsList changes -- need board id if 
  const updateCardsDisplay = (props.cardsList, props.selectedBoard ) => { 
    const indivCardComponents = [];
    props.cardsList.map((card) => {
      indivCardComponents.push (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likesCount={card.likesCount}
        onIncrementLikes={props.onIncrementLikes}
      />
    );
    }
    );
  
  // const CardComponents = updateCardsDisplay(props.cardsList, props.selectedBoard);




  return <div>{/* returns individual card components from card list */} { indivCardComponents }</div>;
};

export default CardsDisplay;
