import './findATheatre.css';
import './App.css';
import './App1.css';
import SeeAMovie from './pages/SeeAMovie';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Footerlogo from './components/Footerlogo';
import Header from './components/Header';
import Markets from './pages/Markets';
import States from './pages/States';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Markets/>}/>
        <Route path="/seeamovie" element={<SeeAMovie />} />
        <Route path="/main" element={<Main />} />
        <Route path="/states" element={<States />} />
      </Routes>
      <div className="footer">
        <img src="./links.png" className="img" alt="" />
        <Footer />
        <Footerlogo />
      </div>
    </div>
  );
}

export default App;
