import React, { useState } from 'react';

const RegistroUsuario = ({ onUsuarioRegistrado }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegistro = () => {
    // Lógica para registrar al usuario
    const nuevoUsuario = { nombre, email };
    onUsuarioRegistrado(nuevoUsuario);
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setContrasena(e.target.value)} />
      <button onClick={handleRegistro}>Registrar</button>
    </div>
  );
};

export default RegistroUsuario;