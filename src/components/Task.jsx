import style from './task.module.css'
import { useState } from 'react';
 

export function Task() {

    const [tasks, setTasks] = useState([
        'Estudar React',
        ])

    function handleCreateNewTask() {

    event?.preventDefault();

    const newTask = event.target.newTask.value;

    //Imutabilidade

        setTasks([...tasks, newTask]);

        }

    return (
        <form onSubmit = {handleCreateNewTask} className={style.tasks}> 

        <textarea name="newTask"
            className={style.textArea}
            id="tasks" cols={60} rows={2} placeholder="Digite uma tarefa">
        </textarea>

        <footer> 
            <button type="submit">Add</button> 
        </footer>
             
        <div className={style.taskslist}>
            <div>
            {tasks.map(task => {
                return (
                    <p>Task adicionado</p>
                )
            
                
            })}
            </div>
        </div>

        </form>
    )
}

