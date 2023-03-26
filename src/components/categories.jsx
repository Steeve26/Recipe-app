import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiNoodles, GiChopsticks, GiHamburger} from 'react-icons/gi'
import { NavLink, useLocation } from 'react-router-dom'
import './categories.css'

export default function () {
  const location = useLocation()
  return (
    <div className='categories-wrapper'>
      <NavLink to={'/cuisine/italian'} className={`category-container ${location.pathname.includes('italian' && 'active') }`}>
        <FaPizzaSlice/>
        <p className="title">Italian</p>
      </NavLink>

      <NavLink to={'/cuisine/american'} className={`category-container ${location.pathname.includes('american' && 'active') }`}>
        <GiHamburger size={20}/>
        <p className="title">American</p>
      </NavLink>

      <NavLink to={'/cuisine/thai'} className={`category-container ${location.pathname.includes('thai' && 'active') }`}>
        <GiNoodles size={23}/>
        <p className="title">Thai</p>
      </NavLink>

      <NavLink to={'/cuisine/japanese'} className={`category-container ${location.pathname.includes('japanese' && 'active') }`}>
        <GiChopsticks size={23}/>
        <p className="title">Japanese</p>
      </NavLink>
    </div>
  )
}
