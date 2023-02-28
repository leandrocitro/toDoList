import style from './Task.module.css'



export function Task({content}) {
    return (
        <div className={style.newTaskBox}>
             <strong>{content}</strong>
             <button>Del</button>
        </div>
        
    )
}