import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RegistroUsuario from './RegistroUsuario/RegistroUsuario';

test('permite registrar un nuevo usuario', () => {

  const mockOnUsuarioRegistrado = jest.fn();

  render(<RegistroUsuario onUsuarioRegistrado={mockOnUsuarioRegistrado} />);


  const nombreInput = screen.getByPlaceholderText('Nombre');
  const emailInput = screen.getByPlaceholderText('Email');
  const contrasenaInput = screen.getByPlaceholderText('Contraseña');

  fireEvent.change(nombreInput, { target: { value: 'Usuario de Prueba' } });
  fireEvent.change(emailInput, { target: { value: 'usuario@example.com' } });
  fireEvent.change(contrasenaInput, { target: { value: 'contrasena123' } });


  const registrarBoton = screen.getByText('Registrar');
  fireEvent.click(registrarBoton);


  expect(mockOnUsuarioRegistrado).toHaveBeenCalledWith({
    nombre: 'Usuario de Prueba',
    email: 'usuario@example.com',
  });
});