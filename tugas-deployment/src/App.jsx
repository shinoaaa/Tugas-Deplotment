import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<SecondPage/>}/>
        <Route path='/login' element={<ThirdPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
