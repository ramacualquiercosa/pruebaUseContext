import React from 'react'

 function Nav() {
  return (
    <div className='flex'>
      <h1 className='p-5'>NavBar:</h1>
      <ul className='flex'>
      <li className='p-5'><a href="/">Contador Parcial</a></li>
      <li className='p-5'><a href="/contotal">Contador Total</a></li>
      </ul>
      
    </div>
  )
}

export default Nav