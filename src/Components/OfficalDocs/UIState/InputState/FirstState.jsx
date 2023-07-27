import { useState } from "react";


export function FirstState(){
const[answere,SetAnswere]=useState('');
const[errro,setError]=useState(null);
const[status,SetStatus]=useState('typing');
if(status==='success'){
    return <h1>That's right!</h1>
}
async function HandleSubmit(e){
    e.preventDefault();
    SetStatus('submitting');
    try {
        await SubmitForm(answere);
        SetStatus('success');
    } catch (error) {
        SetStatus('typing');
        setError(error);
    }
}

function HandleAnswere(e){
SetAnswere(e.target.value);
}
return(
    <>
    <h1>Cricket Quiz</h1>
    <p>Which Country win the 2019 ODI Worldcup</p>
    <form onSubmit={HandleSubmit}>
        <textarea value={answere} onChange={HandleAnswere} disabled={status==='submitting'}/>
        <button type="submit" disabled={answere.length ===0 || status==='submitting'}>Submit Answere</button>
        {errro !=null && <p className="error">{errro.message}</p>}
    </form>
   
    </>
)

}


function SubmitForm(answere){
    //prenting its hitting server
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
let shouldError=answere.toLowerCase() !=='england';
if(shouldError){
   reject(new Error('Good guess but a wrong answer. Try again!'));
}else{
    resolve();
}
},1500);
    });
}