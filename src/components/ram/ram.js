import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RickAndMortyComponent() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching Rick and Morty characters:', error);
      });
  }, []);

  return (
    <div>
      <h2>Rick and Morty personajes</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} style={{ maxWidth: '100px' }} />
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RickAndMortyComponent;

