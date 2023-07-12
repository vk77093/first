import {useRef } from "react";
export default function FocusChange(){
    const InputElement=useRef();

    let ChangeFocusClick=()=>{
        InputElement.current.focus();
    }
    return (
        <>
        <input type="text" ref={InputElement}/>
        <button type="buttton" onClick={ChangeFocusClick}>Focus On Input</button>
        </>
    )
}