import { useState } from "react"
 export default function SettingState(){
    const[message,setMessage]=useState("Hi Type Msg");
    const[isSent,SetIsSent]=useState(false);


    if(isSent){
return (
    'Your Message is On the way '+{message}
)
    }
//send Button Function
function sendMessage(message){

}

  let submitAction=(e)=>{
    e.preventDefault();
    SetIsSent(true);
    sendMessage(message);
  }

return(
    <div>
        <form onSubmit={submitAction}>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)}>

            </textarea>
            <button type="submit">Send</button>
        </form>
    </div>
)
 }