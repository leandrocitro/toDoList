import style from './taskList.module.css'
import { useState } from 'react';
import { Task } from './Task'
 

export function TaskList({content}) {

    const [tasks, setTasks] = useState([
        
        ])

    function handleCreateNewTask() {

    event?.preventDefault();

    const newTask = event.target.newTask.value;

    

    //Imutabilidade

        setTasks([...tasks, newTask]);

        }

    return (

        <div className={style.tasks}>
            <form onSubmit = {handleCreateNewTask} className={style.newTask}> 

            <textarea name="newTask"
            className={style.textArea}
            id="tasks" cols={60} rows={2} placeholder="Digite uma tarefa"
            maxLength={30}>
            </textarea>

            <footer className={style.footerTaskList}> 
            <button className={style.botaoAdd} type="submit">Add</button> 
            </footer>
            
            </form>

            
     
            <div className={style.tasksList}>
    
            {tasks.map((task) => {
            return (
            
            <Task content={task}/>
        )

        
    
        
    })}
    
    
</div>



        </div>
        
    )
}

