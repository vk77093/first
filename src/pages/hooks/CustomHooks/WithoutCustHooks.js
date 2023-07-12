import { useState,useEffect } from "react";
export default function WithoutCustHooks(){
    const[data,setData]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>response.json())
        .then((data)=>setData(data));
    },[]);
    return (
<>
<table style={{border:'solid 2px red'}}>
    <thead >
        <tr>
            <th style={{border:'solid 2px red'}}>No.</th>
            <th style={{border:'solid 2px red'}}>Title</th>
            <th style={{border:'solid 2px red'}}>User Id</th>
            <th style={{border:'solid 2px red'}}>Completed</th>
        </tr>
    </thead>
    <tbody>
   
  {data &&
  data.map((item)=>{
    return(
<>
<tr>
    <td style={{border:'solid 2px red'}}>{item.id}</td>
    <td style={{border:'solid 2px red'}}>{item.title}</td>
    <td style={{border:'solid 2px red'}}>{item.userId}</td>
    <td style={{border:'solid 2px red'}}>{
        (item.completed ? 'Yesy' :'NO')
        }</td>
</tr>
</>
    );
  })}
  

    </tbody>
</table>
</>
   );


}