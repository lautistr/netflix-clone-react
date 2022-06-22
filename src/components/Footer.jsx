import React from 'react';
import '@styles/footer.scss';

import home from '@icons/home-white.png';
import games from '@icons/games-white.png'; 
import soon from '@icons/soon-white.png'; 
import download from '@icons/download-white.png'; 


const Footer = () => {
  return (
    <footer>
        <ul className="footer-container">
            <li className="footer-item-container">
                <img src={home} alt="Home"/>
                <span>Home</span>
            </li>
            <li className="footer-item-container">
                <img src={games} alt="Games"/>
                <span>Games</span>
            </li>
            <li className="footer-item-container">
                <img src={soon} alt="Coming soon"/>
                <span>Coming soon</span>
            </li>
            <li className="footer-item-container">
                <img src={download} alt="Downloads"/>
                <span>Downloads</span>
            </li>
        </ul>
    </footer>
  )
}

export default Footer