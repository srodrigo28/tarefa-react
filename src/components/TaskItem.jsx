import axios from "axios";
import "./TaskItem.scss"
import { AiFillDelete } from "react-icons/ai"

const TaskItem = ({ task, fetchTasks } ) => {

    const handleTaskDeletion = async (task) => {
        try{
            const confirm = window.confirm("Deseja apagar " + task.description)
            if (!confirm) return
            const { data } = await axios.delete(`http://localhost:8080/tasks/${task.id}`);
            alert('Deletado com sucesso')

            await fetchTasks();
        }catch(error){
            console.error(error)
        }
    }

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
            <div className="delete" onClick={ () => handleTaskDeletion(task)}>
                <AiFillDelete size={18} color="red" />
            </div>
        </div>
        </>
    );
}

export default TaskItem;