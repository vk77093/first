let Club=(props)=>{

function clickButton(){
    //return alert(props.message);
    var x=Math.random();
   if(props.message !==''){
    return <h3>{x + ' '+ props.message}</h3>
   }else{
    return <h3>{props.message=''}</h3>
   }

}
return (
<div className="button">
    <p>{props.message}</p>
    <button type="button" onClick={clickButton}>Show Message</button>
</div>
);
}

export default Club;

