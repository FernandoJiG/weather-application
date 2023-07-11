import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className='buscador'>
            <div id="buscadorLocation"><i class="bi fa-fw bi-geo-alt-fill"></i></div>
            <input id='buscadorText' type='text' placeholder='Introduce un lugar'></input>
            <div id="buscadorIcon"><i class="bi fa-fw bi-search"></i></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
