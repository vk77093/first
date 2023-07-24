

import {people} from "./List2";
import {getImageUrl} from "./List2";
import { ButtonText } from "./List2";
export default function ShowList(){
let personData=people.map(p=>
    <>
    <ul><ButtonText clickAction={()=>ButtonClick(p.name)}/></ul>
    <li key={p.id}>
        <img src={getImageUrl(p)} alt={p.name}/>
        <p>
            Person Name <b>{p.name}</b>
           {' ' +p.profession + ' '}
            His accomplishment is {p.accomplishment}
        </p>
    </li>
    </>
    
    
    );
    let ButtonClick=(name)=>{
        // let personData2=people.map((p)=>{
        //     if(p.name===name){
        //         <li key={p.id}>
        //         <img src={getImageUrl(p)} alt={p.name}/>
        //         <p>
        //             Person Name <b>{p.name}</b>
        //            {' ' +p.profession + ' '}
        //             His accomplishment is {p.accomplishment}
        //         </p>
        //     </li>  
        //     }else{
        //         <li key={p.id}>
        //         <img src={getImageUrl(p)} alt={p.name}/>
        //         <p>
        //             Person Name <b>{p.name}</b>
        //            {' ' +p.profession + ' '}
        //             His accomplishment is {p.accomplishment}
        //         </p>
        //     </li>  
        //     }
        // })
    }
    return(
        <>
       
        <article>
        <h1>Scientists</h1>
        <ul>{personData}</ul>
        </article>
        </>
    )
}
