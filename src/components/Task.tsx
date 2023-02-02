import style from './task.module.css'
  

export function Task() {
    return (
        <body className={style.body}> 
        <textarea id="tasks" cols={60} rows={2}></textarea>
        <button>Add</button>
        </body>
    )
}