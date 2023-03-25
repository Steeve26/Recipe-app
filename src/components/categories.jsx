import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiNoodles, GiChopsticks, GiHamburger} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import './categories.css'

export default function () {
  return (
    <div className='categories-wrapper'>
      <NavLink to={'/cuisine/italian'} className="category-container">
        <FaPizzaSlice/>
        <p className="title">Italian</p>
      </NavLink>

      <NavLink to={'/cuisine/american'} className="category-container">
        <GiHamburger size={20}/>
        <p className="title">American</p>
      </NavLink>

      <NavLink to={'/cuisine/thai'} className="category-container">
        <GiNoodles size={23}/>
        <p className="title">Thai</p>
      </NavLink>

      <NavLink to={'/cuisine/japanese'} className="category-container">
        <GiChopsticks size={23}/>
        <p className="title">Japanese</p>
      </NavLink>
    </div>
  )
}
