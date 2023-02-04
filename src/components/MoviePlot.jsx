import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;

export function MoviePlot(props) {
  const { imdbID } = props;
  const [moviePlotList, setPlotList] = useState('');

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&plot=short&i=${imdbID}`)
      .then((response) => response.json())
      .then((data) => setPlotList(data));
  }, [imdbID]);

  return (
    <div className='moviePlot'>
      <p>Year: {moviePlotList.Year}</p>
      <p>Genre: {moviePlotList.Genre}</p>
      <p>Actors: {moviePlotList.Actors}</p>
      <p>Plot: {moviePlotList.Plot}</p>
    </div>
  );
}
