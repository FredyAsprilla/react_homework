import React, { useState } from 'react';
import axios from 'axios';

const BusquedaLibrosGoogle = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const API_KEY = 'TU_CLAVE_DE_API'; // Reemplaza con tu clave de API

  const handleBusqueda = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${terminoBusqueda}&key=${API_KEY}`
      );
      setResultados(response.data.items);
    } catch (error) {
      console.error('Error al realizar la búsqueda', error);
    }
  };

  return (
    <div>
      <h2>Buscar Libros en Google Books</h2>
      <input
        type="text"
        placeholder="Título, Autor, Palabras clave..."
        value={terminoBusqueda}
        onChange={(e) => setTerminoBusqueda(e.target.value)}
      />
      <button onClick={handleBusqueda}>Buscar</button>
      <ul>
        {resultados.map((libro) => (
          <li key={libro.id}>
            <h3>{libro.volumeInfo.title}</h3>
            <p>Autores: {libro.volumeInfo.authors && libro.volumeInfo.authors.join(', ')}</p>
            <p>Editorial: {libro.volumeInfo.publisher}</p>
            <p>Año de publicación: {libro.volumeInfo.publishedDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusquedaLibrosGoogle;