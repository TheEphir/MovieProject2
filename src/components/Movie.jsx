import React from 'react';
import { MoviePlot } from './MoviePlot';

export function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div className='card' id={imdbID}>
      <div className='card-image waves-effect waves-block waves-light'>
        {Poster === 'N/A' ? (
          <img
            className='activator'
            src={`https://via.placeholder.com/250x370?text=${Title}`}
          />
        ) : (
          <img className='activator' src={Poster} />
        )}
      </div>

      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {Title}
          <p>
            {Year}
            <span className='right'>{Type}</span>
          </p>
        </span>
      </div>
      <div className='card-reveal'>
        <span className='card-title grey-text text-darken-4'>{Title}</span>
        <MoviePlot imdbID={imdbID} />
      </div>
    </div>
  );
}
