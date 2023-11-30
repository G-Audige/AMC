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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/seeamovie" element={<SeeAMovie />} />
        <Route path="/markets" element={<Markets />} />
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
