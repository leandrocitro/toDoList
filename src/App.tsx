import { Header } from './components/Header'
import { Task } from './components/Task'
import { Footer } from './components/Footer'

import './global.css';
import style from './components/App.module.css';

let mensagem: string;

export function App() {

  return (
    <div>
      <Header />
        <div className={style.wrapper}>
          <aside> 
            Leandro Citro
          </aside>
        <main>
          <Task />
        </main>
      </div>
      <Footer />
    </div>
  )
}

