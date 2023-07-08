import { useState } from "react";

function MyForm(){
const[username,setName]=useState("");
const[password,setPass]=useState("");
let[pvalue]=useState("");
//let pvalue='';


function HandleSubmit(event){
    event.preventDefault();
    if(username ==='admin' && password==='admin'){
       alert("Credientals Validated")
       //pvalue="Credientals Validated";
    }else{
        alert(`sorry entered username ${username} and password ${password} is not matched`);
        //pvalue=`sorry entered username ${username} and password ${password} is not matched`;
    }
}
return (
    <div className="form">
        <form onSubmit={HandleSubmit}>
            <label>Enter Username</label>
            <input type="text" value={username} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <label>User Pass</label>
            <input type="password" value={password} onChange={(e)=>setPass(e.target.value)}/>
            <button type="submit">Login Here</button>
        </form>
        {/* <p id="messageStyle">
{pvalue}
        </p> */}
    </div>
)

}
export default MyForm;