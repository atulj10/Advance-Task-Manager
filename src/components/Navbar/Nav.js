import React from 'react'
import './Nav.css'
import { auth } from '../../firebase'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='container'>
      <div className='navbar'>
        <NavLink to='/guide' className=' link guide'><span className='guide-name'>Guide</span></NavLink>
        <NavLink to='/' className=' link home'><span className='home-name'>Home</span></NavLink>
        <button onClick={() => auth.signOut()} className='signout'>signOut</button>
      </div>
    </div>
  )
}

export default Nav
