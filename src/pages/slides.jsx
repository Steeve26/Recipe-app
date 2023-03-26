import React from 'react'
import Popular from '../components/popular'
import Veggies from '../components/veggies'

export default function slides() {
  return (
    <div className="slides-wrapper">
      <Popular/>
      <Veggies/>
    </div>
  )
}
