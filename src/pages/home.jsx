import React from 'react'
import Popular from '../components/popular'
import Veggies from '../components/veggies'
import Categories from '../components/categories'
import SearchBar from '../components/searchBar'
import { NavLink, Route, Routes } from 'react-router-dom'
import '../App.css'
import Slides from './slides'
import Cuisine from './cuisine'

export default function home() {
  return (
    <Routes>
      <Route path='/' element={<Slides/>}></Route>
      <Route path='/cuisine/:type' element={<Cuisine/>}></Route>
    </Routes>
  )
}
