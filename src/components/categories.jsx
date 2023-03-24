import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiNoodles, GiChopsticks, GiHamburger} from 'react-icons/gi'
import './categories.css'

export default function () {
  return (
    <div className='categories-wrapper'>
      <div className="category-container">
        <FaPizzaSlice/>
        <p className="title">Italian</p>
      </div>

      <div className="category-container">
        <GiHamburger size={20}/>
        <p className="title">American</p>
      </div>

      <div className="category-container">
        <GiNoodles size={23}/>
        <p className="title">Thai</p>
      </div>

      <div className="category-container">
        <GiChopsticks size={23}/>
        <p className="title">Japanese</p>
      </div>
    </div>
  )
}
