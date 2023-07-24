import { useState } from "react";
import {sculptureList} from "./DataSets.js";
export default function ShowState(){
let[indexNumber,SetIndexNumber]=useState(0);
let chnageImage=()=>{
    SetIndexNumber(indexNumber +1);
    if(indexNumber===sculptureList.length-1){
        SetIndexNumber(indexNumber=0);
    }
}
let scruData=sculptureList[indexNumber];
return (
    <>
    <button type="button" onClick={chnageImage}>Go To Next {indexNumber+1}</button>
    <h2>
        <i>{scruData.name}</i>
        by Artist {scruData.artist}
    </h2>
    <h3>
        ({indexNumber+1} of {sculptureList.length})
    </h3>
    <img 
        src={scruData.url} 
        alt={scruData.alt}
      />
      <p>
        {scruData.description}
      </p>
    </>
)
}