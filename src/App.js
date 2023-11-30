import './findATheatre.css';
import FindATheatre from './components/FindATheatrePage';
import { useState } from 'react';

function App() {
  // const apiKey = '44FAF92B-1A86-46AB-93C4-1475F927B05A';
  // const url = ` 	https://api.sandbox.amctheatres.com/`;
  // const [market, setMarket] = useState('null');
  // const getMarket = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setMarket(data);
  //   console.log(market);
  // };
  // getMarket();
  // fetch('https://jsonplaceholder.typicode.com/comments')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  return (
    <div className='App'>
      <FindATheatre />
    </div>
  );
}

export default App;
