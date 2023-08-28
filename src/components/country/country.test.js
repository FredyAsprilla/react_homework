import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CountryComponent from './CountryComponent';

// Crear un servidor msw para simular las peticiones
const server = setupServer(
  rest.get('https://restcountries.com/v3.1/all', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: { common: 'Country 1' }, cca3: 'CCA1' },
        { name: { common: 'Country 2' }, cca3: 'CCA2' },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('muestra un listado de países', async () => {
  render(<CountryComponent />);

  // Verifica que el título se muestre en la pantalla
  const tituloElement = screen.getByText('Listado de paises');
  expect(tituloElement).toBeInTheDocument();

  // Espera a que los países se muestren en la pantalla
  const countryElement1 = await screen.findByText('Country 1');
  const countryElement2 = await screen.findByText('Country 2');
  expect(countryElement1).toBeInTheDocument();
  expect(countryElement2).toBeInTheDocument();
});