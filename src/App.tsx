import {Header} from './components/Header'
import {Task} from './components/Task'
import {Footer} from './components/Footer'

import './global.css';

let mensagem: string;

export function App() {

  return (
  <div> 
    <Header />
    <Task />
    <Footer />
    </div>
      
  )
}

