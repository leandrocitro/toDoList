import style from './Task.module.css'



export function Task({content}) {
    return (
        

    
        <form className={style.newTask}>
            <strong>{content}</strong>
                <footer>
                    <button className={style.botaoDeletar} type="submit">Del</button>
                </footer>
         
        
        </form>
        
   

        
        
        
        
    )
}