import { Task } from './Task'
import style from './TaskList.module.css'

const [tasks, setTasks] = useState([
    'Estudar React',
    ])

function handleCreateNewTask() {

event?.preventDefault();

//Imutabilidade

    setTasks([...tasks, tasks.length +1]);

    }


export function TaskList () {
    return (
        <div className={style.taskList}>


                   
                   {tasks.map(task => {
                       return <p>Comentário adicionado</p>
                       
                       
                   })}
               </div>
            
       
        
    )
}