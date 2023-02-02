import style from './task.module.css'
  

export function Task() {
    return (
        <body className={style.body}> 
        <textarea>Tasks</textarea>
        <button>Add</button>
        </body>
    )
}