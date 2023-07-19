// export default function SquareComp({value}){
//     import { useState } from "react";
//     export default function SquareComp(){
//         const[valuesign,setValueSign]=useState(null);
//         let ChangeSign=()=>{
//             if(valuesign==='X'){
//                 setValueSign('0');
//             }else{
//                 setValueSign('X');
//             }
//         }
//     return(
//         <button className="square" onClick={ChangeSign}>{valuesign}</button>
//     );
// }

//After The Send All the action to the Board componets
export default function SquareComp({value,changeSignClick}){
return(
    <button className="square" onClick={changeSignClick}>{value}</button>
)
}