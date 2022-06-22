import React from 'react';
import '@styles/moviePoster.scss';

import stranger300 from '@html-version/stranger-poster-v300.jpeg';

const MoviePoster = () => {
  return (
    <div className="movie__image">
      <img
          src={stranger300}
          alt="movie name"
      /> 
    </div>
  )
}

export default MoviePoster