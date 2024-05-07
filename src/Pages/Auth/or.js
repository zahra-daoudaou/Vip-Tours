import React from 'react'
import './style/signinon.css'
import { Link } from 'react-router-dom'
export default function Or() {
  return (
    <div className='whiteContainer'>
      <h1>Sign up</h1>
      <br />
      <Link to='/signup-guide'>
        <button className='signBtn' id='btnguide'>I'm a guide</button>
      </Link>
      <Link to='/signup'>
        <button className='signBtn'>I'm a tourist</button>
      </Link>
    </div>
  )
}
