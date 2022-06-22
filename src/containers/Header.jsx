import React from 'react'
import '@styles/header.scss';

import netflixIsologo from '@images/netflix-nlogo.png';
import rickProfile from '@html-version/rick.jpeg';


const Header = () => {
  return (
    <header>
    <div className="navbar-top">
        <div className="logo-container">
            <img
                src={netflixIsologo}
                alt="Netflix"
            />
        </div>
        <div  className="profile-container">
            <img
                src={rickProfile}
                alt="Profile"
            />
        </div>
    </div>
    <div className="navbar-bottom">
        <ul className="link-container">
            <li>Series</li>
            <li>Movies</li>
            <li>Categories <span></span></li>
        </ul>
    </div>
</header>
  )
}

export default Header