import React from 'react';
import markets from '../models/MarketLinks';

function Markets() {
  return (
    <div className='markets'>
      <div className='markets-div'>
        <div>
          <ul>
            {markets[0].map((market) => {
              return (
                <li>
                  <a href={market.href}>{market.name} </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
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
      </div>
      <div className='markets-div'>
        <div>
          <ul>
            {markets[2].map((market) => {
              return (
                <li>
                  <a href={market.href}>{market.name} </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
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
      </div>
    </div>
  );
}

export default Markets;
