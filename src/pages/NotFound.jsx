import React from 'react';
import '@styles/notFound.scss';

import netflixIsologo from '@images/netflix-isologo.png';

const NotFound = () => {
  return (
    <>
      <main className="not-found__background">
          <h1 className="not-found__title text-shadow">Lost your way?</h1>
          <p className="not-found__description text-shadow">Sorry, we can't find that page. You'll find loads to explore on the home page.</p>
          <button className="not-found__button">Netflix Home</button>
          <p className="not-found__error text-shadow">Error Code <strong>NSES-404</strong></p>
          <p className="not-found__movie-image-title">FROM <strong>LOST IN SPACE</strong></p>
      </main>
    </>
  )
}

export default NotFound