import { useState } from "react";

import CustomInput from "./CustomInput";
import "./AddTask.scss"
import CustomButton from "./CustomButton";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { Toaster, toast } from 'sonner';

const AddTask = ({fetchTasks}) => {
    const [task, setTask] = useState("")

    const onChange = (e) => {
        setTask(e.target.value);
        // console.log(e.target.value)
    }

    const handleTaskAdd = async () => {
        try {
            if( task.length === 0 ) {
                return  <Toaster
                    toastOptions={{
                        classNames: {
                        toast: 'toast',
                        title: 'title',
                        description: 'description',
                        actionButton: 'action-button',
                        cancelButton: 'cancel-button',
                        closeButton: 'close-button',
                        },
                        style: {
                            color: '#fff',
                            fontSize: 18,
                            background: 'red',
                        },
                    }}
                />
            }
            await axios.post("http://localhost:8080/tasks", {
                description: task,
                isCompleted: false,
            })

            alert("Adicionado com sucesso!!!")

            await fetchTasks()
            setTask('')
        } catch(error) {
            alert(error)
            console.log(error)
        }
    }

    return (
        <div className="add-task-container">
            <CustomInput 
                label="Adicionar tarefa ..." 
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAdd}>
                <FaPlus size={14} color="#fff" />
            </CustomButton>
        </div>
    )
}

export default AddTask;