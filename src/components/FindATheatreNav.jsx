import React from 'react';
import { Link } from 'react-router-dom';

function FindATheatreNav() {
  return (
    <div className='nav-and-search'>
      <div>
        <h1>Find A Theatre</h1>
        <div className='searchbar'>
          <div className='input-div'>
            <input placeholder='Search by City, Zip or Theatre'></input>
          </div>
          <div>
            <button type='submit'>
              <img src='https://i.imgur.com/RZIsbIl.png' alt='' />
            </button>
          </div>
        </div>
      </div>
      <div className='all-theatres'>
        <h1 className='all-theatres-box-size'>All Theatres</h1>
        <div className='navLinks'>
          <Link to='/'>
            <h4>Markets</h4>
          </Link>
          <Link to='/states'>
            <h4>States</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FindATheatreNav;
