import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Markets from '../pages/Markets';
import States from '../pages/States';
import FindATheatreNav from './FindATheatreNav';
import Footer from './Footer';
import Footerlogo from './Footerlogo';
import Header from './Header';

function FindATheatre() {
  return (
    <div className="find-a-theatre">
      <Header />
      <FindATheatreNav />
      <div className="content">
        <Routes>
          <Route path="/markets" element={<Markets />} />
          <Route path="/states" element={<States />} />
        </Routes>
      </div>
      <div className="footer">
        <img src="./links.png" className="img" alt="" />
        <Footer />
        <Footerlogo />
      </div>
    </div>
  );
}

export default FindATheatre;
