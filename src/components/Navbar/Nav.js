import React from 'react'
import './Nav.css'
import { auth } from '../../firebase'
import { Link, NavLink } from 'react-router-dom'
import { faHome, faBriefcase, fa2 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav() {
  return (
    <div className='container'>
      <div className='navbar'>
        <NavLink to='/guide' className=' link guide'><span className='guide-name'><FontAwesomeIcon className='nav-btn' icon={faBriefcase}/></span></NavLink>
        <NavLink to='/' className=' link home'><span className='home-name'><FontAwesomeIcon className='nav-btn' icon={ faHome}/></span></NavLink>
        <button onClick={() => auth.signOut()} className='signout'>signOut</button>
      </div>
    </div>
  )
}

export default Nav
