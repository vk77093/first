// import SquareComp from "./SquareComp";
// import { useState } from "react";
// export default function Board(){
//     const[squareSign,SetSquareSign]=useState(Array(9).fill(null));
//     //for setting the sign once
//     const[xIsNext,SetxIsNext]=useState(true);
//     let ChangeSign=(i)=>{
//         if(squareSign[i] || calculateWinner(squareSign)){
//             return;
//         }
//        const nextSign=squareSign.slice();
//        if(xIsNext){
//         nextSign[i]='X';
//        }else{
//         nextSign[i]='0';
//        }
       

//         SetSquareSign(nextSign);
//         SetxIsNext(!xIsNext);

       
//     }
//     //adding Winner Message and Player next Steps
//   const winner=calculateWinner(squareSign);
//   let statusMessage;
//   if(winner){
//     statusMessage='Winner is '+winner;
//   }else{
//     statusMessage='Next player Turn is '+(xIsNext ? 'X' :'0');
//   }
//     return(
//         <>
//         {/* previously we passed the props */}
//         {/* <div className="board-row">
//             <SquareComp value={1}/>
//             <SquareComp value={2}/>
//             <SquareComp value={3}/>
//         </div>
//         <div className="board-row">
//             <SquareComp value={4}/>
//             <SquareComp value='5'/>
//             <SquareComp value={6}/>
//         </div>
//         <div className="board-row">
//             <SquareComp value={7}/>
//             <SquareComp value={8}/>
//             <SquareComp value='9'/>
//         </div> */}

    
//         {/* <div className="board-row">
//             <SquareComp/>
//             <SquareComp />
//             <SquareComp />
//         </div>
//         <div className="board-row">
//             <SquareComp/>
//             <SquareComp />
//             <SquareComp />
//         </div>
//         <div className="board-row">
//             <SquareComp />
//             <SquareComp />
//             <SquareComp />
//         </div> */}
//         {/* After again receving the props from the square componets */}
//         <div className="status">{statusMessage}</div>
// <div className="board-row">
//     <SquareComp changeSignClick={()=>ChangeSign(0)} value={squareSign[0]}/>
//     <SquareComp changeSignClick={()=>ChangeSign(1)} value={squareSign[1]}/>
//     <SquareComp changeSignClick={()=>ChangeSign(2)} value={squareSign[2]}/>
// </div>
// <div className="board-row">
//     <SquareComp changeSignClick={()=>ChangeSign(3)} value={squareSign[3]}/>
//     <SquareComp changeSignClick={()=>ChangeSign(4)} value={squareSign[4]}/>
//     <SquareComp changeSignClick={()=>ChangeSign(5)} value={squareSign[5]}/>
// </div>
// <div className="board-row">
//     <SquareComp changeSignClick={()=>ChangeSign(6)} value={squareSign[6]}/>
//     <SquareComp changeSignClick={()=>ChangeSign(7)} value={squareSign[7]}/>
//     <SquareComp changeSignClick={()=>ChangeSign(8)} value={squareSign[8]}/>
// </div>
//         </>
//     )
// }
// function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }

// As we make the top componets as Game Componets so we are now
// using props for that
import SquareComp from "./SquareComp";
export default function Board({squareSign,onPlay,xIsNext}){
    let ChangeSign=(i)=>{
        if(squareSign[i] ||calculateWinner(squareSign)){
            return;
        }
        const nextSign=squareSign.slice();
        if(xIsNext){
            nextSign[i]='X';
        }else{
            nextSign[i]='0';
        }
        onPlay(nextSign);

    }
    const winnerStatus=calculateWinner(squareSign);
    let statusMessage;
    if(winnerStatus){
statusMessage='Winner is '+winnerStatus;
    }else{
        statusMessage='Next Turn is '+(xIsNext ? 'X' :'0');
    }
    return(
        <>
        <div className="status">{statusMessage}</div>
<div className="board-row">
    <SquareComp changeSignClick={()=>ChangeSign(0)} value={squareSign[0]}/>
    <SquareComp changeSignClick={()=>ChangeSign(1)} value={squareSign[1]}/>
    <SquareComp changeSignClick={()=>ChangeSign(2)} value={squareSign[2]}/>
 </div>
 <div className="board-row">
    <SquareComp changeSignClick={()=>ChangeSign(3)} value={squareSign[3]}/>
    <SquareComp changeSignClick={()=>ChangeSign(4)} value={squareSign[4]}/>
     <SquareComp changeSignClick={()=>ChangeSign(5)} value={squareSign[5]}/>
 </div>
 <div className="board-row">
    <SquareComp changeSignClick={()=>ChangeSign(6)} value={squareSign[6]}/>
    <SquareComp changeSignClick={()=>ChangeSign(7)} value={squareSign[7]}/>
    <SquareComp changeSignClick={()=>ChangeSign(8)} value={squareSign[8]}/>
 </div>
        </>
    )
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  