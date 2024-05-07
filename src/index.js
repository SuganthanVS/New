import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IoCheckmarkDone } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const AddTask = ({addTask}) =>{
  const[value,updateValue] = useState("");

const handleSubmit = e =>{
  e.preventDefault();
  if(value !=="")
    {
      addTask(value)
      updateValue("");
    }
};

return (
  <>
    <form onSubmit={handleSubmit}>
    <input 
    type="text"
    value={value}
    placeholder="Enter Your Task"
    onChange={e => updateValue(e.target.value)}
    />
    <button type="submit"><i class="material-icons">add</i></button>
  </form>

  </>

);
} 
const DietList = () =>{
  const addTask = text =>updateTask([...tasks,{text}]);

  const [tasks,updateTask] = useState([
    {
      text:"Breakfast",
      isCompleted:false
    },
    {
      text:"Lunch",
      isCompleted:false
    },
    {
      text:"Dinner",
      isCompleted:false
    }
  ]);

  const toggleTask = index =>{
   const newTask = [...tasks];
   if(newTask[index].isCompleted)
    {
      newTask[index].isCompleted = false;
    }
    else{
      newTask[index].isCompleted = true;
    }
    updateTask(newTask);
 }

 const removeTask = index =>{
  const newTask = [...tasks];
  newTask.splice(index,1);
  updateTask(newTask);
 }
  return(
  <div id="wrapper">
    
     <div className="list-of-tasks-todo">
     <div><AddTask addTask={addTask}/></div>
      {tasks.map((task,index) =>(
        <div className = "task-status">
          <span  className={task.isCompleted? "task-name completed-task":"task-name"}>
          {task.text}
          </span>
          <div>
          <button onClick={() =>toggleTask(index)}><i><IoCheckmarkDone /></i></button>
          <button onClick={() =>removeTask(index)}><i><MdDeleteOutline /></i></button>
          </div>
          </div>
      ))}
      
    </div>  </div>
  );
}
ReactDOM.render(<DietList/>,document.getElementById('root'));