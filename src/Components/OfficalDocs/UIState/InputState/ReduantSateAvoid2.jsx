import { useState } from "react";

export function ReduantStateAvoid2(){
    const[username,SetUsername]=useState('');
    const[emailId,SetEmailid]=useState('');

    const SendingAddress=username + ' '+emailId;

    function UserNameChnage(e){
SetUsername(e.target.value);
    }
    function EmailIdChnage(e){
        SetEmailid(e.target.value);
    }

    return(
        <>
        <div className="cotainer">
            <div className="row">
                <h2>Please Enter Details for Tickets</h2>
                <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={username} onChange={UserNameChnage}/>
                </div>
                <div className="form-group">
                    <label>Email id</label>
                    <input type="email" value={emailId} onChange={EmailIdChnage}/>
                </div>
                <p>The tickets will send to <b style={{color:'pink'}}>{SendingAddress}</b></p>
            </div>
        </div>
        </>
    )
}