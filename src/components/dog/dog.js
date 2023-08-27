import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DogComponent() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setDogImage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  }, []);

  return (
    <div>
      <h2>Razas de perros aleatorias</h2>
      <img src={dogImage} alt="Dog" style={{ maxWidth: '100%' }} />
    </div>
  );
}

export default DogComponent;
