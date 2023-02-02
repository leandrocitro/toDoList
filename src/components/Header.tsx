import style from './Header.module.css'

import toDo from '../assets/todo.svg'



export function Header () {
    return (
        <header className={style.header}>
            <img src={toDo} />
        </header>
    )
}