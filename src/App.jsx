import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'

function App() {

  return (
    <div className="App">
      <h1>🍴 delicioso</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
