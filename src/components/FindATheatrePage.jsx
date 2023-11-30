import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Markets from './Markets';
import States from './States';
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
    <div className='find-a-theatre'>
      <div className='content'>
        {/* <div className='nav-and-search'>
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
            <h1>All Theatres</h1>
            <div className='marketsStates'>
              <h4>Markets</h4>
              <h4>States</h4>
            </div>
          </div>
        </div> */}
        <FindATheatreNav />
        {/* <div className='markets'>
          <div className='markets-div'>
            <ul>
              {markets[0].map((market) => {
                return (
                  <li>
                    <a href={market.href}>{market.name} </a>
                  </li>
                );
              })}
            </ul>
            <ul>
              {markets[1].map((market) => {
                return (
                  <li>
                    <a href={market.href}>{market.name} </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='markets-div'>
            <ul>
              {markets[2].map((market) => {
                return (
                  <li>
                    <a href={market.href}>{market.name} </a>
                  </li>
                );
              })}
            </ul>
            <ul className='row4'>
              {markets[3].map((market) => {
                return (
                  <li>
                    <a href={market.href}>{market.name} </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div> */}
        <Routes>
          <Route path='/markets' element={<Markets />} />
          <Route path='/states' element={<States />} />
        </Routes>
      </div>
    </div>
  );
}

export default FindATheatre;
