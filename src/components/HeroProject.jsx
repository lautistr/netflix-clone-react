import React from 'react';
import '@styles/heroProject.scss';

const HeroProject = () => {
  return (
    <article className="hero-project">
        <div className="hero-project__content-container">
            <ul className="hero-project__description-container">
                <li className="description--first">Disturbing</li>
                <li>Nostalgic</li>
                <li>Horror</li>
                <li>Prominent Soundtrack</li>
            </ul>
            <div className="hero-project__buttons-container">
                <button className="buttons--git-hub buttons__no-decoration">
                    <p>+</p>
                    My list
                </button>
                <button className="buttons--project"><span></span>Play</button>
                <button className="buttons--info buttons__no-decoration">
                    <span></span>
                    Info
                </button>
            </div>
        </div>

    </article>
  )
}

export default HeroProject