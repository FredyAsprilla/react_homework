import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CountryComponent() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  return (
    <div>
      <h2>Listado de paises</h2>
      <ul>
        {countries.map(country => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountryComponent;
