import { useState } from "react";

export function ShowCounter(){
return(
    <>
    <CounterComp/>
    <CounterComp/>
    </>
)
}
function CounterComp(){
    const[score,SetScore]=useState(0);
    const[hover,SetHover]=useState(false);

    let hoverClass='counter';
    if(hover){
        hoverClass+=' hover'
    } 
    return(
        <div className={hoverClass}
        onPointerEnter={()=>SetHover(true)}
        onPointerLeave={()=>SetHover(false)}
        >
<h2>{score}</h2>
<button onClick={()=>SetScore(score+1)}>Add Score</button>
        </div>
    )
}