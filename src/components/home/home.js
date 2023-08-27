import './home.css';

function HomeComponent() {
  return <div className="homeComponent">
    <div className="menu1">
            <ul className='opciones'>
                <li className='uno'><a href='/spotify' className='t1'>API SPOTIFY</a></li>
                <li className='dos'><a href='/pokemon' className='t1'>API POKEMON</a></li>
                <li className='tres'><a href='/cat' className='t1'>API GATOS</a></li>
                <li className='cuatro'><a href='/country' className='t1'>API PAISES</a></li>
            </ul>
    </div>
    <div className="menu1">
    <ul className='opciones'>
                <li className='cuatro'><a href='/dog' className='t1'>API PERROS</a></li>
                {/* AQUI LAS ULTIMAS DOS APIS */}
                <li className='tres'><a href='/ram' className='t1'>API RICK AND MORTY</a></li>
                <li className='uno'><a href='/dbz' className='t1'>API DBZ</a></li>
            </ul>
    </div>
  </div>;
}

export default HomeComponent;