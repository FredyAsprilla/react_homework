import './home.css';

function HomeComponent() {
  return <div className="homeComponent">
    <h1>Biblioteca Publica Web</h1>
    <div className="menu1">
      
            <ul className='opciones'>
                <li className='uno'><a href='/ClimaActual' className='t1'>Consultar Clima Ciudades</a></li>
                <li className='dos'><a href='/pokemon' className='t1'>API POKEMON</a></li>
                <li className='tres'><a href='/cat' className='t1'>API GATOS</a></li>
                <li className='cuatro'><a href='/country' className='t1'>PAISES</a></li>
            </ul>
    </div>
    <div className="menu1">
    <ul className='opciones'>
                <li className='cuatro'><a href='/dog' className='t1'>API PERROS</a></li>
                <li className='tres'><a href='/ram' className='t1'>API RICK AND MORTY</a></li>
                <li className='uno'><a href='/BusquedaLibrosGoogle' className='t1'> Consultar Libros Google</a></li>
                <li className='dos'><a href='/RegistroUsuario' className='t1'> Registrar Usuario</a></li>
            </ul>
    </div>
  </div>;
}

export default HomeComponent;