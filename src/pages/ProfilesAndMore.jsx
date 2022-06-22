import React from 'react';
import '@styles/profilesAndMore.scss';

import rickProfile from '@html-version/rick.jpeg';
import mortyProfile from '@html-version/morty.jpeg';
import summerProfile from '@html-version/summer.jpeg';
import bethProfile from '@html-version/beth.jpeg';
import jerryProfile from '@html-version/jerry.jpeg';

const profilesAndMore = () => {
  return (
    <nav>
        <header>
            <span></span>
            <h2>Profiles & More</h2>
        </header>
        <ul className="main--profiles-container">
            <li>
                <div className="main--profile">
                    <a href="">
                        <div className="main--image-container">
                            <img
                            src={rickProfile}
                            alt="Profile 1"
                            />
                        </div>
                        <p>Rick Sanchez</p>
                    </a>
                </div>
            </li>
            <li>
                <div className="main--profile">
                    <a href="">
                        <div className="main--image-container">
                            <img
                            src={mortyProfile}
                            alt="Profile 2"
                            />
                        </div>
                        <p>Morty Smith</p>
                    </a>
                </div>
            </li>
            <li>
                <div className="main--profile">
                    <a href="">
                        <div className="main--image-container">
                            <img
                            src={summerProfile}
                            alt="Profile 3"
                            />
                        </div>
                        <p>Summer Smith</p>
                    </a>
                </div>
            </li>
            <li>
                <div className="main--profile">
                    <a href="">
                        <div className="main--image-container">
                            <img
                            src={bethProfile}
                            alt="Profile 4"
                            />
                        </div>
                        <p>Beth Smith</p>
                    </a>
                </div>
            </li>
            <li>
                <div className="main--profile">
                    <a href="">
                        <div className="main--image-container">
                            <img
                            src={jerryProfile}
                            alt="Profile 5"
                            />
                        </div>
                        <p>Jerry Smith</p>
                    </a>
                </div>
            </li>
        </ul>
        <ul className="main--links-container">
            <li className="links__first"><span></span>My list</li>
            <li>Settings App</li>
            <li>Account</li>
            <li>Help</li>
            <li>Log out</li>
        </ul>
    </nav>
  )
}

export default profilesAndMore