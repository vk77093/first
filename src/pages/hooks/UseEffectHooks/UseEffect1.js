import { useState,useEffect } from "react";
export default function UseEffect1(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
        },100);
    });

    return (
    <>
    <p>Keep Runnig Countinously</p>
     <h1>The countdown got started <b style={{color:'red'}}>{count}</b></h1>
    </>
   )
}