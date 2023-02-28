import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { Task } from './components/Task'
import { Footer } from './components/Footer'


import './global.css';
import style from './components/App.module.css';

export function App() {

  return (
    <div className={style.container}>
        <Header />
      <div className={style.wrapper}>

    
      
        <TaskList />
      </div>
        <Footer />
    </div>
  )
}

