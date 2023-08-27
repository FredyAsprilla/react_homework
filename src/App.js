import './App.css';
import {  BrowserRouter,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Home from './components/home/home';
import Spotify from './components/spotify/spotity';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="spotify/*" element={<Spotify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
