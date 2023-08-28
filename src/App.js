import './App.css';
import {  BrowserRouter,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Home from './components/home/home';
import Pokemon from './components/pokemon/pokemon';
import Country from './components/country/country';
import Cat from './components/cat/cat';
import Dog from './components/dog/dog';
import Ram from './components/ram/ram';
import BusquedaLibrosGoogle from './components/BusquedaLibrosGoogle/BusquedaLibrosGoogle';
import ClimaActual from './components/ClimaActual/ClimaActual';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="ClimaActual/*" element={<ClimaActual />} />
        <Route path="pokemon/*" element={<Pokemon />} />
        <Route path="cat/*" element={<Cat />} />
        <Route path="country/*" element={<Country />} />
        <Route path="dog/*" element={<Dog />} />
        <Route path="ram/*" element={<Ram />} />
        <Route path="BusquedaLibrosGoogle/*" element={<BusquedaLibrosGoogle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
