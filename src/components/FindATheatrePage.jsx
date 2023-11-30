import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Markets from '../pages/Markets';
import States from '../pages/States';
import FindATheatreNav from './FindATheatreNav';
import Footer from './Footer';
import Footerlogo from './Footerlogo';

function FindATheatre() {
  return (
    <div className="find-a-theatre">
      <div className="content">
        <FindATheatreNav />
        <Routes>
          <Route path="/markets" element={<Markets />} />
          <Route path="/states" element={<States />} />
        </Routes>
        <img src="./links.png" className="img" alt="" />
        <Footer />
        <Footerlogo />
      </div>
    </div>
  );
}

export default FindATheatre;
