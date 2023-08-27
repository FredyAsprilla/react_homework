import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemon.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20') // Limitamos a 20 Pokémon para no cargar demasiados datos
      .then(response => {
        const results = response.data.results;
        const updatedResults = results.map(async pokemon => {
          const detailedInfo = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: detailedInfo.data.sprites.front_default,
          };
        });
        Promise.all(updatedResults).then(updatedPokemons => {
          setPokemonList(updatedPokemons);
        });
      })
      .catch(error => {
        console.error('Error fetching Pokémon:', error);
      });
  }, []);

  return (
    <div className='pokemon'>
    <h1>Listado de Pokémon</h1>
    <ul className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <li className="pokemon-item" key={index}>
          <p>{pokemon.name}</p>
          <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
