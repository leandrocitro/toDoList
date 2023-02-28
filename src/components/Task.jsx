import style from './Task.module.css'



export function Task({content}) {
    return (
        
    <div className={style.TaskBox}>
        <p className={style.tasksCriadas}>Tarefas Criadas</p>
        <p className={style.tasksConcluidas}>Concluídas</p>
    
        <form className={style.newTask}>
            <strong>{content}</strong>
                <footer>
                    <button className={style.botaoDeletar} type="submit">Del</button>
                </footer>
         
        
        </form>
        
    </div>

        
        
        
        
    )
}