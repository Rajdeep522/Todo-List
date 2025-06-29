import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
export default function Todo(){
    const[taskList,setTaskList]=useState([{tk: "Sample Task",id: uuidv4(),isDone: false}]);
    const[task,settask]=useState("");

    let addtask=(()=>{
        setTaskList((pretask)=>{
            return [...pretask,{tk: task, id: uuidv4(), isDone: false}]});
        settask("");
    });

    let updateTask=((event)=>{
        settask(event.target.value);
        
    });

    let deleteTask=((id)=>{
        setTaskList(taskList.filter((tk)=>tk.id != id));

    });

    let updateUppercaseALL = (() => {
        setTaskList((prevtask) =>
            prevtask.map((tk) => {
                return { ...tk, tk: tk.tk.toUpperCase() }
            })
        );
    });

    let updateone=((id)=>{
        setTaskList(
            (prevtask)=>
                prevtask.map(
                    (tk)=>{
                        if(tk.id===id){
                            return{
                                ...tk, tk: tk.tk.toUpperCase()
                            }
                        }else{
                            return tk;
                        }
                    }
                )
        )
    })

    let Done=(
        (id)=>{

        }
    )

    let DoneALL = (() => {

    });
   
    return (
        <>
            <div>
                <h4>Todo List</h4>
                <input type="text" onChange={updateTask}  style={{border: "1px solid black"}} placeholder="Please enter the task" value={task} required />
                <button type="submit" onClick={addtask}>Add</button>
                <br />
                <br />
                <hr />
                <ul>
                    {taskList.map((tk) => (
                        <li key={tk.id}> 
                            <br />
                            <span className="line-through">{tk.tk}</span>
                             &nbsp;&nbsp;
                            <button className="bg-red-600" onClick={()=>deleteTask(tk.id)}>delete</button> &nbsp; &nbsp;
                            <button className="bg-blue-500" onClick={()=>updateone(tk.id)}>edit</button>&nbsp; &nbsp;
                            <button className="bg-green-500" onClick={()=>Done(tk.id)}>Mark as Done</button>&nbsp; &nbsp;
                            
                        </li>
                        ))}
                </ul>
                <br />
                <button className="bg-yellow-400" onClick={updateUppercaseALL}>edit all</button> <br /> <br />
                <button className="bg-green-800 text-white" onClick={DoneALL}>edit all</button>
                       
                
            </div>
        </>
    )
}
