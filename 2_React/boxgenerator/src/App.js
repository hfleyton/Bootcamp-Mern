import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import PadreDeCajas from './components/PadreDeCajas';
import Caja from './components/Caja';

function App() {
  const [ colores, setColores ] = useState([]);
  const [ propDeNuevaCaja, setPropDeNuevacaja ] = useState();

  console.log({color: propDeNuevaCaja})

  useEffect(() => {
    if(propDeNuevaCaja)
      setColores((existentes) => [propDeNuevaCaja, ...existentes]);
  }, [propDeNuevaCaja]);

  const cajas = colores.map(({color, tamaño}, index) => 
    <Caja color={color} tamaño={tamaño} key= {index}/>)

  return (
    <div className="App">
      <Formulario añadirPropDeNuevaCaja={setPropDeNuevacaja} />
      <PadreDeCajas>
        {cajas}
      </PadreDeCajas>
    </div>
  );
}

export default App;
