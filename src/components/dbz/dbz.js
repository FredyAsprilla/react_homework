import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DBZComponent() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://dragon-ball-api.herokuapp.com/api/character')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Error fetching Dragon Ball characters:', error);
      });
  }, []);

  return (
    <div>
      <h2>Dragon Ball personajes</h2>
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

export default DBZComponent;
