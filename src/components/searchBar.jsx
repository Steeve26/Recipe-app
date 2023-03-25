import React, { useState } from 'react'
import {MdCancel} from 'react-icons/md'
import './searchBar.css'

export default function searchBar() {
  const [searchInput, setSearchInput] = useState('');

  function clear() {
    setSearchInput('')
  }

  return (
    <div className='searchBar-wrapper'>
      <input onChange={(e) => setSearchInput(e.target.value)} value={searchInput} type="text" placeholder='Search'/>
      {searchInput && <button onClick={() => clear()} className="clear-btn">
        <MdCancel color='white' size={25}/>                
      </button>}
    </div>
  )
}
