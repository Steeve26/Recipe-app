import React from 'react'
import Popular from '../components/popular'
import Veggies from '../components/veggies'
import Categories from '../components/categories'
import SearchBar from '../components/searchBar'
import '../App.css'

export default function home() {
  return (
    <div className='home-wrapper'>
      <div className="filters">
        <SearchBar/>
        <Categories/>
      </div>
      <div className="slides-wrapper">
        <Popular/>
        <Veggies/>
      </div>
    </div>
  )
}
