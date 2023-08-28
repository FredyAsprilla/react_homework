import React from 'react';
import { render, screen } from '@testing-library/react';
import ClimaActual from './ClimaActual';

test('muestra la información actual del clima', () => {
 
  const temperaturaActual = 25; 
  const descripcionClima = 'Soleado'; 
  const iconoClima = 'soleado.png'; 

  render(
    <ClimaActual
      temperatura={temperaturaActual}
      descripcion={descripcionClima}
      icono={iconoClima}
    />
  );

  
  const temperaturaTexto = screen.getByText(`Temperatura: ${temperaturaActual}°C`);
  const descripcionTexto = screen.getByText(`Descripción: ${descripcionClima}`);
  const iconoElement = screen.getByAltText(`Icono del clima: ${iconoClima}`);
  expect(temperaturaTexto).toBeInTheDocument();
  expect(descripcionTexto).toBeInTheDocument();
  expect(iconoElement).toBeInTheDocument();
});