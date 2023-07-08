import { useState } from "react"
export default function CounterTest(){
    let[counterValue, setCounter]=useState(0);

    let IncrementCounter=()=>{
       //setCounter(counterValue+1); 
       setCounter(counterValue++); // if not const then it will work
    }
    let DerementCounter=()=>{
       if(counterValue ===0){
        setCounter(counterValue =0);
       }else{
        setCounter(counterValue -1 );
       }
    }
    return (
        <>
        <h1>The Counter Value is {counterValue}</h1>
    <button type="button" onClick={IncrementCounter}>Increment Counter</button>
    {/* <button type="button" onClick={()=>setCounter(counterValue +1)}>Increment Counter</button> */}
    <button type="button" onClick={DerementCounter}>DerementCounter Counter</button>
        </>
    )
}