import { useState } from "react";

export default function GitHubUsers(){
    const[userName,SetUserName]=useState('');
    const[userList,SetUserList]=useState([]);
    return(
        <div className="container mt-2">
            <div className="col-sm-4 col-md-4">
                <form className="form-group" onSubmit={HandleSubmit}>
{/* <label>Enter User Name 
<input type="text" className="form-control" value={userName} onChange={ChangeInUserName}/>
</label> */}
{/* <button type="submit" className="btn btn-info btn-sm">Search User</button> */}
<SearchBar inputvalue={userName} chnageMethod={ChangeInUserName}/>
<SubmitButton buttoName={'Search User'}/>

                </form>
               {/* {userList !==null ? (
 <table className="table table-bordered table-hover">
 <thead>
<tr>
    <th>Id</th>
    <th>Image</th>
    <th>Name</th>
</tr>
 </thead>
 <tbody>
    {userList.map((user,id)=>(
        <tr key={id}>
            <td>{id+1}</td>
            <td><img src={user.avatar_url} width={50} height={50} className="img-thumbnail"/></td>
            <td><a href={user.html_url} target="_blank">{user.login}</a></td>
        </tr>
    ))}
 </tbody>
</table>
               ) :(<p>No User data Is Found</p>)
               
               } */}
               {userList.map((user,id)=>(
                <TableComp datagot={user} idkey={id}>
               <th>Id</th>
             <th>Image</th>
                <th>Name</th>
               </TableComp>
               ))}
               
            </div>
        </div>
    )
   async function HandleSubmit(e){
        e.preventDefault();
        var userData=await SearchUserFromGitHub(userName);
        SetUserList(userData);
        SetUserName('');
    }
function ChangeInUserName(e){
    SetUserName(e.target.value);
}

async function SearchUserFromGitHub(query){
    const Base_url='https://api.github.com';
    try{
        const response=await fetch(`${Base_url}/search/users?q=${query}`);
        const json=await response.json();
        return json.items || [];
    }catch(e){
        throw new Error(e);
    }   
}
}

//Now Making componets for that

// Search Button Comp
export function SubmitButton({buttoName}){
    return(
        <button type="submit" className="btn btn-success btn-sm">{buttoName}</button>
    )
}
function SearchBar({inputvalue,chnageMethod}){
    return(
        <>
         <label>Enter User Name 
            <input type="text" className="form-control" value={inputvalue} onChange={chnageMethod}/>
        </label>
        </>
       
    )
}
function TableComp({children,datagot,idkey}){
    return(
        <table className="table table-borderd table-hover">
            <thead>
                <tr>
                    {children}
                </tr>
            </thead>
            <tbody>
                <tr key={idkey}>
                <td>{idkey+1}</td>
            <td><img src={datagot.avatar_url} width={50} height={50} className="img-thumbnail"/></td>
            <td><a href={datagot.html_url} target="_blank">{datagot.login}</a></td>
                </tr>
            </tbody>
        </table>
    )
}
