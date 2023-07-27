import { useState } from "react";

const initialItems=[
    {title:'Tomato',id:0},
    {title:'Onion',id:1},
    {title:'Spanich',id:2},
    {title:'Cornflower',id:3},
];

export function SelectedItem(){
    const[items,SetItems]=useState(initialItems);
    const[selectedItems,SetSelectedItems]=useState(items[0]);

    return(
        <>
        <div className="container">
            <h2>Pick Your Items For Purchase</h2>
            <ul>
               {items.map(it=>(
                <li key={it.id}>
                    {it.title}
                    {' '}
                    <button type="button" onClick={()=>SetSelectedItems(it)}>Select IT</button>
                </li>
               ))} 
               
            </ul>
            <p>You Picked The Items Is <b>{selectedItems.title}</b></p>
        </div>
        </>
    )
}