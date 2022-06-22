import React from 'react';
import '@styles/projectInfo.scss';

import rickProfile from '@html-version/rick.jpeg';

const ProjectInfo = () => {
  return (
    <>
        <header>
            <span className="header__left"></span>
            <div className="header__right">
                <span className="header--search"></span>
                <div  className="header--profile-container">
                    <img
                        src={rickProfile}
                        alt="Profile"
                    />
                </div>
            </div>
        </header>
        <article>
            <div className="movie__image-container">
                <p>Trailer not available</p>
            </div>
            <h2 className="movie__title">The Boys</h2>
            <ul className="movie__features">
                <li>2022</li>
                <li className="features--age">18+</li>
                <li>3 seasons</li>
            </ul>
            <div className="primary-buttons__container">
                <button className="movie__button watch"><span></span>Watch</button>
                <button className="movie__button download"><span></span>Download</button>
            </div>
            <p className="movie__description overview">
                A group of vigilantes known informally as “The Boys” set
                out to take down corrupt superheroes with no more than 
                blue-collar grit and a willingness to fight dirty.
            </p>
            <p className="movie__description starring">
                <strong>Starring:</strong> Karl Urban, Jack Quaid, Antony Starr
            </p>
            <p className="movie__description direction">
                <strong>Direction:</strong> Eric Kripke
            </p>
            <div className="secondary-buttons__container">
                <button>
                    <div className="button--my-list">
                        <p>+</p>
                    </div>
                    My list
                </button>
                <button>
                    <div className="button--rate">
                        <p>♡</p>
                    </div>
                    Rate
                </button>
                <button>
                    <div className="button--share">
                        <span></span>
                    </div>
                    Share
                </button>
                <button>
                    <div className="button--download">
                        <span></span>
                    </div>
                    Download
                </button>
            </div>
        </article>
    </>
  )
}

export default ProjectInfo