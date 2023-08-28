import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import RickAndMortyComponent from './RickAndMortyComponent';


const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            image: 'https://example.com/rick.jpg',
          },
          {
            id: 2,
            name: 'Morty Smith',
            image: 'https://example.com/morty.jpg',
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('muestra un listado de personajes de Rick and Morty', async () => {
  render(<RickAndMortyComponent />);


  const tituloElement = screen.getByText('Rick and Morty personajes');
  expect(tituloElement).toBeInTheDocument();


  const personajeElement1 = await screen.findByText('Rick Sanchez');
  const personajeElement2 = await screen.findByText('Morty Smith');
  expect(personajeElement1).toBeInTheDocument();
  expect(personajeElement2).toBeInTheDocument();

 
  const imagenElement1 = screen.getByAltText('Rick Sanchez');
  const imagenElement2 = screen.getByAltText('Morty Smith');
  expect(imagenElement1).toBeInTheDocument();
  expect(imagenElement2).toBeInTheDocument();
});