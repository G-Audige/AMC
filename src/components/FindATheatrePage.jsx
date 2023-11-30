import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Markets from '../pages/Markets';
import States from '../pages/States';
import FindATheatreNav from './FindATheatreNav';

function FindATheatre() {
  return (
    <div className='find-a-theatre'>
      <div className='content'>
        <FindATheatreNav />
        <Routes>
          <Route path='/markets' element={<Markets />} />
          <Route path='/states' element={<States />} />
        </Routes>
      </div>
    </div>
  );
}

export default FindATheatre;
