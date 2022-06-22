import React from 'react';
import '@styles/profileSelection.scss';

import netflixIsologo from '@images/netflix-isologo.png';

import rickProfile from '@html-version/rick.jpeg';
import mortyProfile from '@html-version/morty.jpeg';
import summerProfile from '@html-version/summer.jpeg';
import bethProfile from '@html-version/beth.jpeg';
import jerryProfile from '@html-version/jerry.jpeg';

const ProfileSelection = () => {
  return (
    <div>
        <header>
            <div className="header--image-container">
                <img src={netflixIsologo} alt="Netflix" />
            </div>
        </header>
        <main>
            <div className="main--routes-container">    
                    <h1>Who's watching?</h1>
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
            </div>     
        </main>
    </div>
  )
}

export default ProfileSelection