import { useState } from "react";
import styles from "./AddTask.module.css";

function AddTask(props) {
 const[inputvalue, setinputvalue] = useState('')
 const[optstatus, setoptstatus] = useState('To do')
 const[btns, setbtns] = useState([])
  function handleonclick(){
    console.log(inputvalue); 
    console.log(optstatus);
    props.onAddtask(inputvalue ,optstatus ,btns);
  }

  const handleinputValue = (e) =>{
    setinputvalue(e.target.value)
  }
const handleoptstratus = (e) =>{
  setoptstatus(e.target.value)
}
const Selectedbtns = (e) =>{
  const singleselectedbtn = e.target.textContent;
  setbtns( prev => { 
    return[...prev , singleselectedbtn ]
  })
  console.log(btns);
  
}
  return (
    <>
      <input className={styles.input} type="text" placeholder="Enter your task" 
      onChange={handleinputValue}/>
      <div className={styles.buttonss}>
        <div className={styles.coursebuttons}>
          <button className={styles.courses} onClick = {Selectedbtns} >HTML</button>
          <button className={styles.courses} onClick = {Selectedbtns}>CSS</button>
          <button className={styles.courses} onClick = {Selectedbtns}>JavaScript</button>
          <button className={styles.courses} onClick = {Selectedbtns}>React</button>
        </div>
        <div className={styles.selectbuttons}>
          <select className={styles.select} onChange={handleoptstratus}>
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
          <button className={styles.Addbtn} onClick={handleonclick}>+AddTask</button>
        </div>
      </div>
    </>
  );
}

export default AddTask;
