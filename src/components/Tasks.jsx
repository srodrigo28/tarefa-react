import axios from "axios"
import "./Tasks.scss"
import TaskItem from "./TaskItem"
import { useEffect, useState } from "react"

const Tasks = () => {
    const [tasks, setTasks] = useState([])

    const fetchTasks = async() => {
        try {
            const { data } = await axios.get("http://localhost:8080/tasks");
            setTasks(data);

        }catch(error){
            console.log(error);
        }
    }
    useEffect( () => {
        fetchTasks()
    }, [])

    return(
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem key={lastTask.id} task={lastTask} />
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                
                <div className="tasks-list">
                    {tasks
                        .filter((item) => item.isCompleted)
                        .map((taskCompleted) => (
                            <TaskItem key={taskCompleted.id} task={taskCompleted} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tasks;