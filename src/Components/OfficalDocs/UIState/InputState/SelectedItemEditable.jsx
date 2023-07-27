import { useState } from "react"
import { SelectedItem } from "./SelectedItem"

const initialItemsData=[
    {title:'Bench Coat',id:0},
    {title:'Scrum Pads',id:1},
    {title:'Tackle Bags',id:2},
    {title:'Training Poles',id:3}
]
export function  SelectedItemEditable(){
const[items,setItems]=useState(initialItemsData);
const[selectedItems,SetSelectedItems]=useState(items[0]);

function ChnageInSelection(id,e){
    setItems(items.map((item)=>{
        if(item.id===id){
            return {
                ...item,
                title:e.target.value,
            };
        }else{
            return item;
        }
    })
    );
}
return(
    <>
    <h2>Select your Favourite Items</h2>
    <ul>
        {items.map((item)=>(
            <li key={item.id}>
                <input type="text" className="form-control" value={item.title} 
                onChange={(e)=>ChnageInSelection(item.id,e)}/>
                <button type="button" onClick={()=>SetSelectedItems(item)}>Select </button>
            </li>
        ))}
    </ul>
    <p>You Have Selected The Items is <b>{selectedItems.title}</b></p>
    </>
)
}