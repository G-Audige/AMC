import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Markets from './pages/Markets';
import States from './pages/States';
import FindATheatreNav from './FindATheatreNav';

function FindATheatre() {
  //   const apiKey = '44FAF92B-1A86-46AB-93C4-1475F927B05A';
  //   const url = `https://${apiKey}.amctheatres.com/v2/theatres`
  //   const [market, setMarket] = useState('null')
  //   const getMarket = async () => {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setMarket(data)
  //     console.log(market)
  //   }
  //   getMarket()
  return (
    <div className="find-a-theatre">
      <div className="content">
        <FindATheatreNav />
        <Routes>
          <Route path="/markets" element={<Markets />} />
          <Route path="/states" element={<States />} />
        </Routes>
      </div>
    </div>
  );
}

export default FindATheatre;
