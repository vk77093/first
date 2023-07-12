import { useState } from "react";
 import buttonStyle from './button.module.css';
// import buttonStyle from '.../Module/button.module.css';
export default function HooksTest1(){
    const[club,setClubs]=useState({
        clubname:'samoa',
        year:1988,
        brand:'clothing',
        color:'blue white',
    })
    let updateColor=()=>{
        setClubs(previousState=>{
            if(club.color==='blue white'){
                return {...previousState,color:'new color'}
            }else{
                return {...previousState,color:'blue white'}
            }
        });
    }
    return (
        <>
        <h2>Main Club Name is {club.clubname}</h2>
        <div>
            <p>Year of Establishment is {club.year}</p>
            <p>The Brand we are dealing is {club.brand}</p>
            <p style={{color:'green'}}>Current Color is {club.color}</p>
            <br/>
            <button type="button" className={buttonStyle.red} onClick={updateColor}>Change Color</button>
            
        </div>
        </>
    )
}