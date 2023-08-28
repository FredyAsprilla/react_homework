import React, { useState } from 'react';
import axios from 'axios';

const ClimaActual = () => {
  const [ciudad, setCiudad] = useState('');
  const [clima, setClima] = useState(null);
  const API_KEY = '4147d2df006a369cbc1de3eaf7649de4';

  const obtenerClima = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`
      );
      setClima(response.data);
    } catch (error) {
      console.error('Error al obtener el clima', error);
    }
  };

  return (
    <div>
      <h2>Obtener Clima Actual</h2>
      <input
        type="text"
        placeholder="Ciudad"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      <button onClick={obtenerClima}>Obtener Clima</button>
      {clima && (
        <div>
          <h3>Información del Clima</h3>
          <p>Ciudad: {clima.name}</p>
          <p>Temperatura: {clima.main.temp} °C</p>
          <p>Descripción: {clima.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default ClimaActual;