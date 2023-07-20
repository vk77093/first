import { useState } from "react";
import Board from "./Board";
export default function GameHistory(){
    const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // const currentSquares = history[history.length - 1];
  const [currentMove, setCurrentMove] = useState(0); // for setting the move
  const currentSquares=history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistoryMove=([...history.slice(0,currentMove+1),nextSquares]);
    //setHistory([...history, nextSquares]);
    setHistory(nextHistoryMove);
  //  setXIsNext(!xIsNext);
    //chnageimg mobe to nect
    setCurrentMove(nextHistoryMove.length-1);
    setXIsNext(!xIsNext);
  }
  //set the hoistory of move
  function Jump(nextmove){ 
    //todo
    setCurrentMove(nextmove);
    setXIsNext(nextmove % 2 === 0);
  }
  const movesTaken=history.map((squqre,move)=>{
    let description;
    if(move >0){
      description='Go to Move #'+move;
    }else{
      description="Game Restart Again";
    }
    return (
      <li key={move}>
        <button type="button" onClick={()=>Jump(move)}>{description}</button>
      </li>
    )
  });
  return(
    <>
    <div className="game">
        <div className="board-game">
            <Board xIsNext={xIsNext} squareSign={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
        <ol>{movesTaken}</ol>
      </div>
    </div>
    </>
  )
}

