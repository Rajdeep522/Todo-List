import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
export default function Todo(){
    const[taskList,setTaskList]=useState([{tk: "Sample Task",id: uuidv4()}]);
    const[task,settask]=useState("");

    let addtask=(()=>{
        setTaskList((pretask)=>{
            return [...pretask,{tk: task, id: uuidv4()}]});
        settask("");
    });

    let updateTask=((event)=>{
        settask(event.target.value);
        
    });

    let deleteTask=((id)=>{
        setTaskList(taskList.filter((tk)=>tk.id != id));

    });

   
    return (
        <>
            <div>
                <h4>Todo List</h4>
                <input type="text" onChange={updateTask} style={{border: "1px solid black"}} placeholder="Please enter the task" value={task} />
                <button type="submit" onClick={addtask}>Add</button>
                <br />
                <br />
                <ul>
                    {taskList.map((tk) => (
                        <li key={tk.id}>
                            <span>{tk.tk}</span>
                             &nbsp;&nbsp;
                            <button className="bg-red-600" onClick={()=>deleteTask(tk.id)}>delete</button> &nbsp; &nbsp;
                            <button className="bg-blue-500">edit</button>
                            
                        </li>
                        ))}
                        <br />
                        <button className="bg-yellow-400">edit all</button>
                       
                </ul>
            </div>
        </>
    )
}
