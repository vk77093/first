import { useState } from "react";

export function SpreadOpertorUse(){
    const [person,setPerson]=useState({
        firstname:'Enter Your First Name',
        lastname:'Enter your Last Name',
        Email:'Enter Your Email Id',
    });
    let SetFirstName=(e)=>{
        setPerson({
            ...person,
            firstname:e.target.value,
        });
    }
    let SetLastName=(e)=>{
        setPerson({
            ...person,
            lastname:e.target.value,
        });
    }
    let SetEmailId=(e)=>{
        setPerson({
            ...person,
            Email:e.target.value,
        })
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" value={person.firstname} onChange={SetFirstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" value={person.lastname} onChange={SetLastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email Id</label>
                        <input type="email" className="form-control" value={person.Email} onChange={SetEmailId}/>
                    </div>
                </div>
                <h2>Setted Value is</h2>
                <p>
                    {person.firstname} {person.lastname } {person.Email}
                </p>
            </div>
        </div>
        </>
    )


}