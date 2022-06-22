import React from 'react';
import '@styles/sectionContainer.scss';

import stranger300 from '@html-version/stranger-poster-v300.jpeg';
import msmarvel300 from '@html-version/msmarvel-poster-v300.jpeg';
import obiwan300 from '@html-version/obiwan-poster-v300.jpeg';
import theboys300 from '@html-version/theboys-poster-v300.jpeg';


const SectionContainer = () => {
  return (
    <section className="section__main-container">
        <h2 className="section__title">Top TV</h2>
        <div className="section__scroll-container">
            <article className="movie__image">
                <img
                    src={stranger300}
                    alt="movie name"
                />
            </article>
            <article className="movie__image">
                <img
                    src={msmarvel300}
                    alt="movie name"
                />
            </article>
            <article className="movie__image">
                <img
                    src={obiwan300}
                    alt="movie name"
                />
            </article>
            <article className="movie__image">
                <img
                    src={theboys300}
                    alt="movie name"
                />
            </article>
        </div>
    </section>
  )
}

export default SectionContainer