import React from 'react';
import '@styles/topContainer.scss';

import stranger300 from '@html-version/stranger-poster-v300.jpeg';
import msmarvel300 from '@html-version/msmarvel-poster-v300.jpeg';
import obiwan300 from '@html-version/obiwan-poster-v300.jpeg';
import theboys300 from '@html-version/theboys-poster-v300.jpeg';

const TopContent = () => {
  return (
    <section className="section__main-container">
        <h2 className="section__title">Top 10 TV Shows</h2>
        <div className="section__scroll-container">
            <article className="top__image topContent--first">
                <p>1</p>
                <img
                    src={stranger300}
                    alt="movie name"
                />
            </article>
            <article className="top__image topContent--second">
                <p>2</p>
                <img
                    src={msmarvel300}
                    alt="movie name"
                />
            </article>
            <article className="top__image topContent--third">
                <p>3</p>
                <img
                    src={obiwan300}
                    alt="movie name"
                />
            </article>
            <article className="top__image topContent--fourth">
                <p>4</p>
                <img
                    src={theboys300}
                    alt="movie name"
                />
            </article>
            <article className="top__image topContent--fifth">
                <p>5</p>
                <img
                    src={stranger300}
                    alt="movie name"
                />
            </article>
            <article className="top__image topContent--sixth">
                <p>6</p>
                <img
                    src={msmarvel300}
                    alt="movie name"
                />
            </article>
            <article className="top__image topContent--seventh">
                <p>7</p>
                <img
                    src={obiwan300}
                    alt="movie name"
                />
            </article>
            <article className="top__image topContent--eighth">
                <p>8</p>
                <img
                    src={theboys300}
                    alt="movie name"
                />
            </article>
            <article className="top__image topContent--ninth">
                <p>9</p>
                <img
                    src={stranger300}
                    alt="movie name"
                />
            </article>
            <article className="top__image topContent--tenth">
                <p>10</p>
                <img
                    src={msmarvel300}
                    alt="movie name"
                />
            </article>
        </div>
    </section>
  )
}

export default TopContent