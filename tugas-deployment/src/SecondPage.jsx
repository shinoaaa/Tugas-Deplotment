import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'



const SecondPage = () => {

    const [count, setCount] = useState(0)
    return (
         <div>
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
            </div>
            <Link to='/login'>
              <button>
                pindah Page
              </button>
            </Link>
          </div>
    )
}

export default SecondPage