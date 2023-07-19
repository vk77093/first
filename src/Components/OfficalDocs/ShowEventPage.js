// for componet which sateremain same during click
import { useState } from "react";
import EventStateRemainSame from './EventStateRemainSame';
import EventStateComp from "./EventStateComp";


 
export default function ShowEventPage(){
    const[countvalue,setcountValue]=useState(0);
    let chnageCounter=()=>{
        setcountValue(countvalue+1);
     }
return(
    <>
    <EventStateComp/>
    <EventStateComp/>
    <br/>
    <h2>Here In Below Event State remain same for the button</h2>
    <EventStateRemainSame countvalueprops={countvalue} onclickaction={chnageCounter}/>
    <EventStateRemainSame countvalueprops={countvalue} onclickaction={chnageCounter}/>
    </>
)
}