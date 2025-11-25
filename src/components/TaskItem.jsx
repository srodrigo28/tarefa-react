import "./TaskItem.scss"
import { AiFillDelete } from "react-icons/ai"

const TaskItem = ({ task } ) => {
    return (
        <>
        <div className="task-item-container">
            <div className="task-description">
                <label className={ task.isCompleted ? 'checkbox-container-completed' : 'checkbox-container'}>
                    <p>{task.description}</p>
                    <input type="checkbox" id={task.id}
                        defaultChecked={task.isCompleted }
                    />
                    <span className={task.isCompleted ? 'checkmark completed' : 'checkmark'} > 
                        {/* { task.isCompleted ? "Completa" : "Não completa" } */}
                    </span>
                </label>    
            </div>
            <div className="delete">
                <AiFillDelete size={18} color="red" />
            </div>
        </div>
        </>
    );
}

export default TaskItem;