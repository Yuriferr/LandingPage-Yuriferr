import { useState } from 'react'
import './App.scss'

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Logo from '/yurei.png'
import Dev from './assets/dev.png'

function App() {

  function Alert(){
    toast("🦄Obrigado por utilizar este site!!!");
  }

  return (
    <div className="App">
      <header>
        <div className='logo'>
          <a href=''>
            <img src={Logo}/>
            <p>Yuriferr</p>
          </a>
        </div>

        <div className='links'>
          <a href='mailto:yurifernandespreto@gmail.com'><p>Email</p></a>
          <a target='_blanck' href='https://www.linkedin.com/in/yuriferr'><p>Linkedin</p></a>
          <a target='_blanck' href='https://github.com/Yuriferr'><p>GitHub</p></a>
        </div>
      </header>

      <section>
        <div className='container'>
          <div className='containerInfo'>
            <h1>Yuri Fernandes</h1>
            <h3>Desenvolvedor Full Stack</h3>
            <button onClick={Alert}>Click Me!</button>
          </div>
          <div className='containerImg'>
            <img src={Dev}/>
          </div>
        </div>

        <div className='info'>
          <div/>
            <p>🚀Desenvolvimento rápido</p>
            <p>🧹Códigos otimizados</p>
            <p>📓Rápido aprendizado para novas linguagens</p>
        </div>
      </section>
      <ToastContainer />
    </div>
  )
}

export default App
