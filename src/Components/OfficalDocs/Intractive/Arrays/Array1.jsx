import { useState } from "react";
let indexNumber=0;
export function Array1(){
let[taskName,SetTaskName]=useState('');
const[taskList,SetTaskList]=useState([]);
function TaskNameChange(e){
    SetTaskName(
      e.target.value
    )
}
function AddTask(){
    SetTaskList([
        ...taskList,
        {id:indexNumber++,taskName:taskName}
       
    ])
    SetTaskName(taskName='');
    ;
}
function DeleteTaskAction(name){
    SetTaskList(taskList.filter(a =>
        a.id !== name.id
      ))
}
function DeleteTask(){
    if(taskList.length >0){
        return(
            <ul>
                {taskList.map(item=>(
                    <li key={item.id}>{item.taskName}
                    {' '}
                    <button onClick={()=>DeleteTaskAction(item)}>Delete Task</button>
                    </li>
                ))}
            </ul>
        )
    }
}
return(
    <>
    <div className="row">
        <div className="form-group">
            <label>Task Name</label>
            <input type="text" value={taskName} className="form-contol" onChange={TaskNameChange}/>
        </div>
        <button type="button" onClick={AddTask}>Add Task</button>
    </div>
    <div className="row">
        {/* <ul> */}
            {/* {taskList.map(item=>(
                <li key={item.id}>{item.taskName}</li>
            ))} */}

            {/* {taskList.map(item=>{
                <li key={item.id}>{item.taskName}</li>
            })} */}
        {/* </ul> */}
      
            <ul>
                {taskList.map(item=>(
                    <li key={item.id}>{item.taskName}
                    {' '}
                    <button onClick={()=>DeleteTaskAction(item)}>Delete Task</button>
                    </li>
                ))}
            </ul>
    </div>
    </>
)
}