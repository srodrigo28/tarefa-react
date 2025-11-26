import { useState } from "react";

import CustomInput from "./CustomInput";
import "./AddTask.scss"
import CustomButton from "./CustomButton";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
    const [task, setTask] = useState("")

    const onChange = (e) => {
        setTask(e.target.value);
        console.log(e.target.value)
    }

    return (
        <div className="add-task-container">
            <CustomInput 
                label="Adicionar tarefa ..." 
                value={task}
                onChange={onChange}
            />
            <CustomButton>
                <FaPlus size={14} color="#fff" />
            </CustomButton>
        </div>
    )
}

export default AddTask;