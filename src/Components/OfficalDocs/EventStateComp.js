import { useState } from "react";
export default function EventStateComp(){
const[Countervalue,setCount]=useState(0);

let clickCounter=()=>{
    setCount(Countervalue+1);
}
return (
    <>
    <button type="button" onClick={clickCounter} value={Countervalue}
    style={{border:'solid 2px red', color:'greeen',margin:'12px'}}>I Am clicked {Countervalue} times</button>
    </>
)
}