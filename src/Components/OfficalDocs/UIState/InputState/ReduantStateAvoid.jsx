import { useState } from "react";

export function ReduantStateAvoid(){
    const[text,SetText]=useState("");
    const[status,SetStatus]=useState(false);

    const isSending=status==='sending';
    const isSent=status==='sent';

    //Form Method
    function SendMessage(message){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(message !==null){
                    resolve();
                }else{
                    reject(new Error("Form Can not be blank"));
                }
            },3000);
        })
    }
   async function HandleSubmit(e){
        e.preventDefault();
        SetStatus('sending');
        await SendMessage(text);
        SetStatus('sent');
    }
    if(isSent){
        return <h2>Thnaks for Submit Feedback</h2>
    }
    return (
        <>
        <div className="container">
            <div className="row">
                <form onSubmit={HandleSubmit}>
                    <label>Add Your Feedback Text</label>
                    <textarea className="form-control" disabled={isSending} value={text} onChange={(e)=>SetText(e.target.value)}/>
                    <button type="submit" className="btn btn-info" disabled={isSending}>Send Feedback</button>
                    {isSending && <p>Sending....</p>}
                </form>
            </div>
        </div>
        </>
    )
}