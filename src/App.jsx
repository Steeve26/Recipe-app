import { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Cuisine from './pages/cuisine'
import Filters from './components/filters'
import './App.css'
import { GiKnifeFork } from 'react-icons/gi'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to={'./'}>
          <h1> <GiKnifeFork size={25}/> delicioso</h1>
        </NavLink>
        <Filters/>
        <Home/>
      </BrowserRouter>
    </div>
  )
}

export default App
