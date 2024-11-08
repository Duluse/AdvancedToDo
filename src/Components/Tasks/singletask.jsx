import styles from "./Tasks.module.css";
import { TbTrashXFilled } from "react-icons/tb";
function SingleTask(props) {
    props.AddTasks(Task)
    return(
        <>
        <div className={styles.task}>
            <p>Task.task</p>
            <div className={styles.pickedbtns}>
              <div>
              <button className={styles.crsbtn}>html</button>
              <button className={styles.crsbtn}>css</button>
              </div>
              <div> <TbTrashXFilled /></div>
              </div>
        </div>
        </>
    )
}
export default SingleTask 