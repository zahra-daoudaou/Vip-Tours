import React from 'react'

export default function Forgotpassword() {
  return (
    <div className='whiteContainer'>
      <form>
        <input type='email' placeholder='Email' className='signInput' />
        <input type='password' placeholder='Password' className='signInput' />
        <input type='number' placeholder='Secret number sended by email' max={6} className='signInput' />
        <input type='password' placeholder='Change password' className='signInput' />

        <input type='submit' value={'Confirm'} className='signBtn' id='btnConfirm' />

      </form>
    </div>
  )
}
