import { useState } from "react";

const initialItems2=[
    {title:'Blue Shirts',id:0},
    {title:'White Shirts',id:1},
    {title:'Yellow Shirts',id:2},
    {title:'Pink Shirts',id:3},

];
export function SelectedItemEditable2(){
    const[colors,setColors]=useState(initialItems2);
    const[selectedCorsId,SetSelectedColorsId]=useState(0);

    //here we select the id insted of whole array copies
    const selectedColros=colors.find(item=>
        item.id===selectedCorsId
        );
        function HandleColorsChange(id,e){
            setColors(
                colors.map((it)=>{
                    if(it.id===id){
                        return{
                            ...it,
                            title:e.target.value,
                            
                        }
                            
                        
                    }else{
                        return it;
                    }
                })
            )
        }
        return(
           <div className="container">
            <div className="row">
                <h4>here we select the id insted of whole array copies</h4>
                <ul>
                {colors.map((item,index)=>(
                    <li key={item.id}>
                        <div className="form-group">
                    <input type="text" className="form-control" value={item.title} 
                  
                    onChange={(e)=>HandleColorsChange(item.id,e)}/> 
                      {' '}
                    <button type="button" onClick={()=>SetSelectedColorsId(item.id)}>Select Id</button> 
                        </div>
                    </li>
                ))}
                </ul>
                <p>You Selected Colors is <b>{selectedColros.title}</b></p>
            </div>
           </div>
        )
}