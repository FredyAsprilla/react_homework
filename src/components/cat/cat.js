import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CatComponent() {
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        setCatImage(response.data[0].url);
      })
      .catch(error => {
        console.error('Error fetching cat image:', error);
      });
  }, []);

  return (
    <div>
      <h2>Gatos aleatorios</h2>
      <img src={catImage} alt="Cat" style={{ maxWidth: '100%' }} />
    </div>
  );
}

export default CatComponent;
