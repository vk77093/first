import { useState,useEffect } from "react";
export default function UseEffect3(){
    const[count,setCount]=useState(0);
    const[cal,setCal]=useState(0);

    let updateCount=()=>{
        if(count>=0){
            setCount((count)=>count+1);
        }else{
            setCount((count)=>count=0);
        }
    }
    useEffect(()=>{
        setCal(()=>cal+1);
    },[count]);
    return(
        <>
        <p>Only change the effect when we prees the Button</p>
        <h1>The Count Value is <b style={{color:'darkblue'}}>{count}</b></h1>
        <button type="button" onClick={updateCount}>+</button>
        <h2>The Effect Value change occur is <b style={{color:'darkblue'}}>{cal}</b></h2>
        </>
    )
}