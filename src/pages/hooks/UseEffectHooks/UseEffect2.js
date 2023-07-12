import { useState,useEffect } from "react";
export default function UseEffect2(){
    //run only once 
    const[count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(() => {
            setCount((count)=>count+1);
        }, 1000);
    },[]); // it allow only once
    return (
        <>
        <p>Here Value will chnage only Once</p>
        <h1>The Count value updated As <b style={{color:'yellowgreen'}}>{count}</b></h1>
        </>
    )
}