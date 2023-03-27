import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import {MdCancel} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import './searchBar.css'

export default function searchBar() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate()

  console.log('navigate', navigate)

  function clear() {
    setSearchInput('')
  }

  return (
    <div className='searchBar-wrapper'>
      <div className="input-wrapper">
        <input onChange={(e) => setSearchInput(e.target.value)} 
         onKeyDown={(e) => { if(e.code === 'Enter') navigate('/search/' + searchInput);}}
         value={searchInput} type="text" placeholder='Search'/>

        <FaSearch className='search-icon' size={17}/>
      </div>
      { searchInput && 
        <button onClick={() => clear()} className="clear-btn">
          <MdCancel color='white' size={25}/>                
        </button>
      }
    </div>
  )
}
