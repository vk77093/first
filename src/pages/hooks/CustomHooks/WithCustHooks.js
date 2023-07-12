import UseFetechComp from "./UseFetchComp";
import './table.css';
export default function WithCustHooks(){
    const[data]=UseFetechComp("https://jsonplaceholder.typicode.com/todos");
    return(
<>
<table className="mytable">
    <tr>
        <th>ID</th>
        <th>Task Name</th>
        <th>User id</th>
        <th>Task Status</th>
    </tr>
    <tbody>
        {data && data.map((item)=>{
            return(
<>
<tr>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.userId}</td>
    <td>{(item.completed ? 'Completed' :'Pending')}</td>

</tr>
</>
            );
        })}
    </tbody>
</table>
</>
    );
}