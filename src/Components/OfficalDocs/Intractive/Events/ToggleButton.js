
export default function ToggleButton(){
   function ChnageColor(){
    let bodyColr=document.body.style;
    if(bodyColr.backgroundColor==='black'){
        bodyColr.backgroundColor='white';
    }else{
        bodyColr.backgroundColor='black';
    }
   }
   return(
    <>
    <div className="myClass">
        <button type="button" onClick={ChnageColor}>Toggle Color</button>
    </div>
    </>
   )

}