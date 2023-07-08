import buttonStyle from '../Module/button.module.css';
import { useState } from 'react';

export default function UseStateHook(){
    const[colorname,setcolor]=useState("red");
    return (
        <div className='container'>
            <h4 id={buttonStyle.pstyle}>The Current Selected COlor is {colorname}</h4>
            <br/>
            <button type='button' className={buttonStyle.yellow} onClick={()=>setcolor('blue')}>Yellow</button>
            <button type='button' className={buttonStyle.green} onClick={()=>setcolor('Green')}>Green</button>
            <button type='button' className={buttonStyle.pink} onClick={()=>setcolor("PINK")}>PINK</button>
            <button type='button' className={buttonStyle.red} onClick={()=>setcolor("RED")}>RED</button>
        </div>
    )
}