import { useState,useEffect,useRef } from "react";
export default function TrackCount1(){
    const[inputValue,setInputValues]=useState();
    const chnagesCount=useRef(0);
    useEffect(()=>{
        chnagesCount.current=chnagesCount.current+1;
    });
return (
<>
<input type="text" placeholder="enter something" value={inputValue}
onChange={(e)=>setInputValues(e.target.value)}/>
<p>The Change Count is {chnagesCount.current}</p>
</>
);
}