import React from 'react'
import './style/signinon.css'
import { Link } from 'react-router-dom'

export default function Signinorup() {
  return (

    <div className='whiteContainer'>

      <Link to='/signin'>
        <button className='signBtn' id='btn'>Sign in</button>
      </Link>
      <h1>Or</h1>
      <Link to='/or' >
        <button className='signBtn' id='btn'>Sign up</button>
      </Link>
    </div>
  )
}
