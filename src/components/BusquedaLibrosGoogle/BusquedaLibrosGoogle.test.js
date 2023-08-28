import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BusquedaLibrosGoogle from './BusquedaLibrosGoogle';

test('renderiza correctamente el componente', () => {
  render(<BusquedaLibrosGoogle />);
  const titulo = screen.getByText('Buscar Libros en Google Books');
  expect(titulo).toBeInTheDocument();
});

test('realiza una búsqueda al hacer clic en el botón', async () => {
  render(<BusquedaLibrosGoogle />);
  const input = screen.getByPlaceholderText('Título, Autor, Palabras clave...');
  const boton = screen.getByText('Buscar');

  fireEvent.change(input, { target: { value: 'React' } });
  fireEvent.click(boton);

});
