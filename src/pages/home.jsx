import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import '../App.css'
import Slides from './slides'
import Cuisine from './cuisine'
import SearchResult from './searchResults'
import Recipes from './Recipes'

export default function home() {
  return (
    <Routes>
      <Route path='/' element={<Slides/>}></Route>
      <Route path='/cuisine/:type' element={<Cuisine/>}></Route>
      <Route path='/recipe/:food' element={<Recipes/>}></Route>
      <Route path='/search/:result' element={<SearchResult/>}></Route>
    </Routes>
  )
}
