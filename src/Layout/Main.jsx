import { useEffect } from 'react';
import { useState } from 'react';
import { MovieList } from '../components/MovieList';
import { Search } from './Search';
import { Preloader } from './Preloader';
const API_KEY = process.env.REACT_APP_API_KEY;

export function Main() {
  const [movieList, setMovieList] = useState('');
  const [isLoading, setLoading] = useState(false);

  const SearchFunc = (str = 'matrix', type = 'all') => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== ('all' || undefined) ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.Search);
        setLoading(true);
      });
  };

  useEffect(SearchFunc, []);

  return (
    <div className='content container'>
      <Search SearchFunc={SearchFunc} />
      {isLoading ? <MovieList movieList={movieList} /> : <Preloader />}
    </div>
  );
}
