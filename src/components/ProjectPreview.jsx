import React from 'react';
import '@styles/projectPreview.scss';

import stranger300 from '@html-version/stranger-poster-v300.jpeg';
import close from '@icons/close-icon.png';

const ProjectPreview = () => {
  return (
    <article className="movie-container">
        <div className="movie__image">
            <img
                src={stranger300}
                alt="movie name"
            />
        </div>
        <div className="movie__info">
            <h3 className="movie__info--title">
                Stranger Things
            </h3>
            <ul className="movie__info--features">
                <li>2022</li>
                <li>16+</li>
                <li>4 seasons</li>
            </ul>
            <p className="movie__info--description">
                When a young boy vanishes, a small town uncovers 
                a mystery involving secret experiments, terrifying 
                supernatural forces, and one strange little girl.
            </p>
        </div>
        <div className="movie__close">
            <img src={close} alt="close"/>
        </div>
        <div className="buttons-container">
            <div className="movie__buttons">
                <div className="buttons--play">
                    <button><span></span></button>
                    <p>Play</p>
                </div>
                <div className="buttons--download">
                    <button><span></span></button>
                    <p>Download</p>
                </div>
                <div className="buttons--list">
                    <button>+</button>
                    <p>My list</p>
                </div>
                <div className="buttons--share">
                    <button><span></span></button>
                    <p>Share</p>
                </div>
            </div>
            <button className="movie__more">
                <div className="more__container">
                    <div>
                        <span className="more--left-icon"></span>
                        <p>Episodes & more</p>
                    </div>
                    <span className="more--right-icon"></span>
                </div>
            </button>
        </div>
    </article>
  )
}

export default ProjectPreview