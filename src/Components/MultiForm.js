import { useState } from "react";

export default function  MultiForm(){

    const[inputs,setInputs]=useState({});
    //textarea
    const[textareadata,setTextArea]=useState('Please enter the text data');
    // select dropdown
    const[selectarae,setSelect]=useState("Samoa");

    const handleChnage=(event)=>{
       // event.preventDefault();
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name] :value}));
    }
    const HandleSubmit=(event)=>{
        event.preventDefault();
        if(inputs.username ==='admin' || inputs.city ==='admin'){
            alert("Can not be empty data");
        }else{
            alert(inputs.username + '  '+ inputs.city+ ' '+ textareadata + ' '+ selectarae);
        }  

    }
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <label>User Name</label>
                <input type="text" name="username" value={inputs.username || ""} onChange={handleChnage}/>
                <br/>
                <label>City</label>
                <input type="text" name="city" value={inputs.city || ""} onChange={handleChnage}/>
                <br/>
                <label>Enter Long Address</label>
                <textarea value={textareadata} onChange={(e)=>setTextArea(e.target.value)}/>
                <br/>
                <select value={selectarae} onChange={(e)=>setSelect(e.target.value)}>
                    <option value="Chiswock">Chiswick</option>
                    <option value="Samoa">Samoa</option>
                    <option value="Welignton">Welignton</option>
                </select>
                <input type="text" className="form-control"/>
                <button type="submit">Save Data</button>
            </form>
        </div>
    )
}