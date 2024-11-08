
import styles from "./Tasks.module.css";
import { TbTargetArrow } from "react-icons/tb";
import { RiProgress2Fill } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import SingleTask from "./singletask";

function Tasks() {
  return (
    <div className={styles.taskscontainer}>
      <div className={styles.tittle}>
        <div className={styles.todo}>
          <TbTargetArrow />
         <h2>To do</h2>
          <SingleTask />
        </div>
        <div className={styles.todo}>
          <RiProgress2Fill />
          <h2>Doing</h2>
          <SingleTask/>
        </div>
        <div className={styles.todo}>
          <IoCheckmarkDoneCircle />
          <h2>Done</h2>
          <SingleTask/>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
