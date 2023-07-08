import { useState } from "react";
export default function HooksTest(){
    const[clubs,setClubs]=useState({
        clubname:'Samoa',
        origin:'Newze Land',
        Category:'clothingh',
        AccessRight:'Moderate',
    });

    return (
        <>
        <h1>The Main Club Name is <b>{clubs.clubname}</b></h1>
        <p>Other Details is  origin is : <b>{clubs.origin}</b></p>
        <p>Other Details is  Category is : <b>{clubs.Category}</b></p>
        <p>Other Details is  AccessRight is : <b>{clubs.AccessRight}</b></p>
        </>
    )
}