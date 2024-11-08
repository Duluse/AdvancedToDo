import { useState } from 'react'
import './App.css'
import AddTask from './Components/AddTask/Addtask.jsx'
import Tasks from './Components/Tasks/Tasks.jsx'

function App() {
  const [Task, setTask] = useState([{
    task:"",
    status:"",
    bttns:[]
  }])

function handleonAddTask(inputvalue ,optstatus ,btns){
  console.log(`${inputvalue} 'from app'`);
  console.log(`${optstatus} 'from app'`);
  console.log(`${btns} 'from app'`);
 setTask(prev =>{ return {...prev, task: inputvalue, status:optstatus , bttns:btns }})
  console.log(`this is a whole ${Task}`);
  // const TaskArray = object.values(Task)
  // console.log(TaskArray);
  
  
}
  return (
    <div className='container'>
   <AddTask onAddtask = {handleonAddTask}/>
   <Tasks  />
   <SingleTask AddTasks = {Task}/>
    </div>
  )
}

export default App
