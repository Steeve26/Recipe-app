import React from 'react'
import {MdCancel} from 'react-icons/md'
import './searchBar.css'

export default function searchBar() {
  return (
    <div className='searchBar-wrapper'>
      <input type="text" placeholder='Search'/>
      <button className="clear-btn">
        <MdCancel color='white' size={25}/>                
      </button>
    </div>
  )
}
