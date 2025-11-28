// Componente: TaskItem
// Descrição: Renderiza uma única tarefa com checkbox para marcar como
// completa/incompleta e um botão para deletar a tarefa.
// Props:
// - task: objeto da tarefa { id, description, isCompleted }
// - fetchTasks: função para recarregar a lista de tarefas após alterações
// Observações: Faz chamadas HTTP (axios) para uma API local em
// `http://localhost:8080/tasks` para atualizar/remover tarefas.
import axios from "axios";
import "./TaskItem.scss"
import { AiFillDelete } from "react-icons/ai"

const TaskItem = ({ task, fetchTasks } ) => {

    // Função: handleTaskDeletion
    // - Pergunta confirmação ao usuário
    // - Chama DELETE na API para remover a tarefa pelo id
    // - Notifica o usuário e recarrega a lista via `fetchTasks`
    const handleTaskDeletion = async (  ) => {
        try{
            const confirm = window.confirm("Deseja apagar " + task.description)
            if (!confirm) return
            const { data } = await axios.delete(`http://localhost:8080/tasks/${task.id}`);
            alert('Deletado com sucesso')

            await fetchTasks();
            return
        }catch(error){
            // Em caso de erro, logamos no console para depuração.
            console.error(error)
        }
    }
    // Função: handleTaskCompletetionChange
    // - Chamado quando o checkbox muda de estado
    // - Envia um PATCH para atualizar apenas o campo `isCompleted`
    // - Ao final, recarrega a lista de tarefas para refletir a mudança
    const handleTaskCompletetionChange = async (e) => {

            const { data } = await axios.patch(`http://localhost:8080/tasks/${task.id}`, {
                isCompleted: e.target.checked,
            });
            
            alert('Tarefa atualizada')

            await fetchTasks();
    }

    return (
        <>
        <div className="task-item-container">
            <div className="task-description">
                {/* Checkbox + descrição da tarefa. A classe muda quando a tarefa está completa. */}
                <label className={ task.isCompleted ? 'checkbox-container-completed' : 'checkbox-container'}>
                    {/* Texto descritivo da tarefa */}
                    <p>{task.description}</p>
                    {/* Checkbox que controla o estado `isCompleted` */}
                    <input 
                    type="checkbox" 
                        id={task.id}
                        onChange={ (e) => handleTaskCompletetionChange(e)}
                        defaultChecked={task.isCompleted }
                    />
                    {/* Marca visual customizada (CSS) */}
                    <span className={task.isCompleted ? 'checkmark completed' : 'checkmark'} > 
                        {/* Texto opcional para acessibilidade poderia ir aqui */}
                    </span>
                </label>    
            </div>
            {/* Botão de exclusão: chama handleTaskDeletion ao clicar */}
            <div className="delete" onClick={ () => handleTaskDeletion(task)}>
                <AiFillDelete size={18} color="red" />
            </div>
        </div>
        </>
    );
}

export default TaskItem;