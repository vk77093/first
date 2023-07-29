import { useState } from "react"

export default function Shopping(){
    const[item,SetItem]=useState('');
    const[itemList,SetItemList]=useState([]);
function OnChangeItem(e){
    SetItem(e.target.value);
}
function HandleSubmit(e){
e.preventDefault();
const newItems=[...itemList,item];
SetItemList(newItems);
SetItem('');
}
function RemoveItem(itemid){
const newItems=itemList.filter((itemData)=>{
    return itemData !==itemid;
})
SetItemList(newItems);
}

    return(
        <>
        <div className="container mt-2">
            <div className="col-sm-4 col-md-4">
                <h2>Shopping List </h2>
                <h3>Please Enter Items To add in List</h3>
            <form className="form-group" onSubmit={HandleSubmit}>
                <label>Enter Item
                    <input type="text" value={item} className="form-control" onChange={OnChangeItem}/>
                </label>
                <button type="submit" className="btn btn-info">Add Item</button>
            </form>
            {itemList.map((itemgot,id)=>(
                <ul key={id}>
                    {/* <li className="ml-2">{itemgot}
                    <button className="btn btn-danger btn-sm mr-2" onClick={()=>RemoveItem(itemgot)}>X</button>
                    </li> */}
                    <ItemsShow item={itemgot} OnRemoveMethod={RemoveItem}/>
                </ul>
            ))}
            </div>
        </div>
        </>
    )
}
export function ItemsShow({item,OnRemoveMethod}){
    return(
        <li className="ml-2">{item}
        <button className="btn btn-danger btn-sm mr-2" onClick={()=>OnRemoveMethod(item)}>X</button>
        </li>
    )
}