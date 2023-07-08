import React, { useState } from "react";
export default function Counter(props){

let x=props.number;


function Increment(){
 if(x<=0){
   alert(x++);
 }else{
  
alert(x++);
 }
}
return (
   <div className="container">
    <p className="number">{x}</p>
    <button type="button" onClick={Increment}>Increment Counter</button>
   </div>
    
);
}
