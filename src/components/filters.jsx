import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './searchBar'
import Categories from './categories'
import '../App.css'

export default function filters() {
  return (
    <div className='filters'>
      <SearchBar/>
      <Categories/>
    </div>
  )
}
