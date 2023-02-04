import React from 'react';

export function Header() {
  return (
    <nav>
      <div className='nav-wrapper blue lighten-2'>
        <a href='#!' className='brand-logo center black-text'>
          MovieProject2.0
        </a>
        <ul className='left hide-on-med-and-down'>
          <li>
            <a
              href='https://theephir.github.io/Movie_project_try1/'
              className='black-text'
            >
              MP1
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
