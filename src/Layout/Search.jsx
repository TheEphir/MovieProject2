import React from 'react';
import { useState } from 'react';

export function Search(props) {
  const [name, setName] = useState('matrix');
  const [type, setType] = useState('all');

  const Search = (event) => {
    if (event.key === 'Enter') {
      props.SearchFunc(name, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    props.SearchFunc(name, event.target.dataset.type);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          id='search'
          type='search'
          className='validate'
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={Search}
        />
        <label form='search'>Search</label>
      </div>
      <div className='typeSearch'>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='all'
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='movie'
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movie</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='series'
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>series</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='game'
            onChange={handleFilter}
            checked={type === 'game'}
          />
          <span>game</span>
        </label>
      </div>
    </div>
  );
}
