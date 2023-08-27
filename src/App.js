import './App.css';
import {  BrowserRouter,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Home from './components/home/home';
import Spotify from './components/spotify/spotify';
import Pokemon from './components/pokemon/pokemon';
import Country from './components/country/country';
import Cat from './components/cat/cat';
import Dog from './components/dog/dog';
import Ram from './components/ram/ram';
import DBZ from './components/dbz/dbz';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="spotify/*" element={<Spotify />} />
        <Route path="pokemon/*" element={<Pokemon />} />
        <Route path="cat/*" element={<Cat />} />
        <Route path="country/*" element={<Country />} />
        <Route path="dog/*" element={<Dog />} />
        <Route path="ram/*" element={<Ram />} />
        <Route path="dbz/*" element={<DBZ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
