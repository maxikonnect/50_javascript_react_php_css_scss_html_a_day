import {reactLogo} from './assets/react.svg'
function App(){
  return (
    <div>
      <header>
        <img src={reactLogo} width="100px" alt="logo pix" />
      </header>
      <main>
        <h1>React Practice</h1>
        <ul>
          <li>React is fun  again</li>

          <li>React is easy to do</li>
          <li>React is fun</li>
        </ul>
      </main>
      <footer>
        <p>2020. All rights reserved</p>
      </footer>
    </div>
  )
}

export default App;
/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/
