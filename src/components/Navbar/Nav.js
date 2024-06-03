import React, { useState, useEffect } from 'react';
import './Nav.css';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import { faHome, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Nav() {
  const user = useSelector(selectUser);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container blur ${scroll && 'nav-dark'}`}>
      <div className='navbar-user'>
        <h1>{user.email}</h1>
      </div>
      <div className='navbar-button'>
        <Link to='/' className={`link home`}>
          <FontAwesomeIcon className={`nav-btn ${scroll && "dark"} home-nav`} icon={faHome} />
          <span className={`home-text ${scroll && "dark"} `}>HOME</span>
        </Link>
        <Link to='/' className={`link guide ${scroll && "dark"}`}>
          <FontAwesomeIcon className={`nav-btn ${scroll && "dark"} guide-nav`} icon={faBriefcase} />
          <span className={`guide-text ${scroll && "dark"} `}>GUIDE</span>
        </Link>
        <button onClick={() => auth.signOut()} className='signout'>SignOut</button>
      </div>
    </div>
  );
}

export default Nav;
